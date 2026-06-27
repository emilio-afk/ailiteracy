import { modules, phases, resources, createInitialProgress } from "./app-data.mjs";
import { initWidgets, renderCustomExamples, widgetIds } from "./widgets.mjs";

const storageKey = "taller-ia-progress-v1";
const state = { progress: loadProgress() };

// Los temas con `phase` son las paginas del wiki.
// "diagnostico" es la portada y "recursos" es la biblioteca: no llevan fase.
const docModules = modules.filter((module) => module.phase);

const tocNav = document.querySelector("#tocNav");
const toc = document.querySelector("#toc");
const tocBackdrop = document.querySelector("#tocBackdrop");
const menuToggle = document.querySelector("#menuToggle");
const docSections = document.querySelector("#docSections");
const resourceList = document.querySelector("#resourceList");
const searchInput = document.querySelector("#searchInput");
const noResults = document.querySelector("#noResults");
const taskField = document.querySelector("#selectedTask");
const toast = document.querySelector("#toast");

render();
setupTask();
setupSearch();
setupScrollSpy();
setupNav();

function loadProgress() {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? { ...createInitialProgress(), ...JSON.parse(raw) } : createInitialProgress();
  } catch {
    return createInitialProgress();
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(state.progress));
}


function render() {
  renderToc();
  renderSections();
  renderResources();
  initWidgets();
  renderCustomExamples(state.progress.selectedTask ?? "");
}

function renderToc() {
  const groups = phases
    .map((phase) => {
      const items = docModules.filter((module) => module.phase === phase.id);
      if (!items.length) return "";
      return `
        <div class="nav-group">
          <p class="nav-phase">${phase.label}</p>
          ${items.map((module) => navLink(`m-${module.id}`, module.title)).join("")}
        </div>
      `;
    })
    .join("");

  tocNav.innerHTML = `${groups}
    <div class="nav-group nav-extra">
      ${navLink("biblioteca", "Biblioteca")}
    </div>`;

  tocNav.querySelectorAll(".nav-link").forEach((link) => link.addEventListener("click", closeDrawer));
}

function navLink(anchor, title) {
  return `
    <a class="nav-link" href="#${anchor}" data-toc="${anchor}">
      <span class="nav-text">${title}</span>
    </a>
  `;
}

function renderSections() {
  docSections.innerHTML = docModules
    .map((module) => {
      const phase = phases.find((item) => item.id === module.phase);
      const meta = `${module.number} · ${phase ? phase.label : ""}`;
      return `
        <section class="page" id="m-${module.id}" data-search="${searchText(module)}">
          <p class="meta">${meta}</p>
          <h2>${module.title}</h2>
          ${module.ideaPrincipal ? `<p class="lead">${inline(module.ideaPrincipal)}</p>` : ""}

          ${renderProps(module.spec)}

          <h3>¿Qué es?</h3>
          ${paragraphs(module.whatIs)}
          ${renderPoints(module.points)}

          ${widgetIds.has(module.id) ? `<div class="interactive-widget-wrapper" data-widget-id="${module.id}"></div>` : ""}

          ${
            module.dondeVive
              ? `<div class="note note-location"><p class="note-label">Dónde vive y cómo se observa</p><p>${inline(module.dondeVive)}</p></div>`
              : ""
          }
          ${
            module.comoOperar
              ? `<div class="note note-operation"><p class="note-label">Cómo manipular, operar o crear</p><p>${inline(module.comoOperar)}</p></div>`
              : ""
          }

          ${
            module.ejemplo
              ? `<h3>Ejemplo en acción</h3>${renderEjemplo(module.ejemplo)}`
              : ""
          }

          <div class="disclosures">
            ${
              module.receta && module.receta.length
                ? disclosure("Receta para aplicarlo", renderRecipe(module.receta), true)
                : ""
            }

            ${module.note ? disclosure(module.note.title, paragraphs(module.note.body)) : ""}
          </div>

          ${
            module.concepts && module.concepts.length
              ? `<footer class="page-foot"><span class="page-foot-label">Conceptos</span>${renderTags(module.concepts)}</footer>`
              : ""
          }
          ${renderFuentes(module.fuentes)}
        </section>
      `;
    })
    .join("");
}

function renderProps(spec) {
  if (!spec) return "";
  const rows = [
    ["Nivel", spec.nivel],
    ["Cuándo usarlo", spec.cuando],
    ["Requiere", spec.requiere],
  ].filter(([, value]) => value);
  if (!rows.length) return "";
  return `
    <dl class="props">
      ${rows.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}
    </dl>
  `;
}

function renderEjemplo(ejemplo) {
  if (!ejemplo) return "";
  const escenario = ejemplo.escenario
    ? `<div class="ej-escenario">
         ${ejemplo.escenario.sector ? `<span class="ej-sector">Escenario · ${escapeHtml(ejemplo.escenario.sector)}</span>` : ""}
         <p>${inline(ejemplo.escenario.texto)}</p>
       </div>`
    : "";

  let cuerpo;
  switch (ejemplo.tipo) {
    case "documento":
      cuerpo = (ejemplo.secciones ?? []).map(renderSeccionDoc).join("");
      break;
    case "esquema":
      cuerpo = renderEsquema(ejemplo);
      break;
    case "resultados":
      cuerpo = renderResultados(ejemplo);
      break;
    default:
      cuerpo = (ejemplo.secciones ?? []).map(renderSeccionChat).join("");
  }

  const artefacto = ejemplo.artefacto ? renderBloque(ejemplo.artefacto) : "";
  const resultado = ejemplo.resultado
    ? `<div class="ej-resultado"><span class="ej-resultado-label">Resultado</span><p>${inline(ejemplo.resultado)}</p></div>`
    : "";
  return `<div class="ejemplo">${escenario}${cuerpo}${artefacto}${resultado}</div>`;
}

function ejDivider(seccion) {
  return seccion.etiqueta
    ? `<div class="ej-divider ej-divider-${seccion.tono ?? "neutral"}"><span>${escapeHtml(seccion.etiqueta)}</span></div>`
    : "";
}

function ejPie(seccion) {
  const concepto = seccion.concepto
    ? `<p class="ej-concepto"><span aria-hidden="true">↗</span> ${inline(seccion.concepto)}</p>`
    : "";
  const nota = seccion.nota ? `<p class="ej-nota">${inline(seccion.nota)}</p>` : "";
  return `${concepto}${nota}`;
}

/* --- Chat --- */
function renderSeccionChat(seccion) {
  return `${ejDivider(seccion)}${(seccion.turnos ?? []).map(renderTurno).join("")}`;
}

function renderTurno(turno) {
  const lineas = multilinea(turno.texto);
  if (turno.de === "claude") {
    const nota = turno.nota ? `<p class="ej-nota">${inline(turno.nota)}</p>` : "";
    return `<div class="ej-row ej-row-claude">
      <div class="ej-bubble ej-bubble-claude">
        <span class="ej-who"><span class="ej-spark" aria-hidden="true">✦</span> Claude</span>
        <div class="ej-text">${lineas}</div>
      </div>
    </div>${nota}`;
  }
  const concepto = turno.concepto
    ? `<p class="ej-concepto"><span aria-hidden="true">↗</span> ${inline(turno.concepto)}</p>`
    : "";
  const nota = turno.nota ? `<p class="ej-nota ej-nota-tu">${inline(turno.nota)}</p>` : "";
  return `<div class="ej-row ej-row-tu">
    <div class="ej-bubble ej-bubble-tu ${turno.destacado ? "is-destacado" : ""}">
      <div class="ej-text">${lineas}</div>
    </div>
  </div>${concepto}${nota}`;
}

/* --- Documento (artefactos antes/después) --- */
function renderSeccionDoc(seccion) {
  const bloques = (seccion.bloques ?? []).map(renderBloque).join("");
  return `${ejDivider(seccion)}<div class="ej-doc">${bloques}</div>${ejPie(seccion)}`;
}

/* --- Esquema (flujo o ciclo) --- */
function renderEsquema(ejemplo) {
  const nodos = (ejemplo.nodos ?? [])
    .map(
      (nodo) =>
        `<div class="ej-nodo"><span class="ej-nodo-titulo">${inline(nodo.titulo)}</span>${
          nodo.sub ? `<span class="ej-nodo-sub">${inline(nodo.sub)}</span>` : ""
        }</div>`,
    )
    .join('<span class="ej-flecha" aria-hidden="true">→</span>');
  const nota = ejemplo.nota ? `<p class="ej-nota">${inline(ejemplo.nota)}</p>` : "";
  return `<div class="ej-esquema ej-esquema-${ejemplo.forma ?? "flujo"}">${nodos}</div>${nota}`;
}

/* --- Resultados (tabla con marcador) --- */
function renderResultados(ejemplo) {
  const marcador = ejemplo.marcador
    ? `<div class="ej-marcador">
         <span class="ej-marca ej-marca-antes"><b>Antes</b> ${escapeHtml(ejemplo.marcador.antes ?? "")}</span>
         <span class="ej-marca-flecha" aria-hidden="true">→</span>
         <span class="ej-marca ej-marca-despues"><b>Después</b> ${escapeHtml(ejemplo.marcador.despues ?? "")}</span>
       </div>`
    : "";
  return `${marcador}${ejemplo.tabla ? renderTabla(ejemplo.tabla, true) : ""}`;
}

/* --- Bloques de artefacto reutilizables --- */
function renderBloque(bloque) {
  switch (bloque.tipo) {
    case "texto":
      return `<div class="bloque-texto">${multilinea(bloque.contenido)}</div>`;
    case "codigo":
    case "json":
      return `<div class="bloque-codigo">${
        bloque.lenguaje ? `<span class="bloque-lang">${escapeHtml(bloque.lenguaje)}</span>` : ""
      }<pre><code>${escapeHtml(bloque.contenido ?? "")}</code></pre></div>`;
    case "tabla":
      return renderTabla(bloque, false);
    case "plantilla":
      return `<div class="bloque-plantilla">
        ${bloque.titulo ? `<span class="bloque-plantilla-tit">${inline(bloque.titulo)}</span>` : ""}
        <ul>${(bloque.lineas ?? []).map((l) => `<li>${inline(l)}</li>`).join("")}</ul>
      </div>`;
    case "grafica":
      return renderGrafica(bloque);
    default:
      return "";
  }
}

function renderTabla(tabla, conEstado) {
  const head = (tabla.headers ?? []).map((h) => `<th>${inline(h)}</th>`).join("");
  const body = (tabla.filas ?? [])
    .map((fila) => {
      const celdas = fila
        .map((celda) => {
          if (conEstado && (celda === "ok" || celda === "fail")) {
            return `<td class="ej-estado ej-estado-${celda}">${celda === "ok" ? "✓" : "✗"}</td>`;
          }
          return `<td>${inline(String(celda))}</td>`;
        })
        .join("");
      return `<tr>${celdas}</tr>`;
    })
    .join("");
  return `<div class="ej-tabla-wrap"><table class="ej-tabla">${head ? `<thead><tr>${head}</tr></thead>` : ""}<tbody>${body}</tbody></table></div>`;
}

function renderGrafica(bloque) {
  const barras = bloque.barras ?? [];
  const max = Math.max(1, ...barras.map((b) => b.valor));
  const cols = barras
    .map(
      (b) =>
        `<div class="ej-bar-col"><div class="ej-bar" style="height:${Math.round((b.valor / max) * 100)}%"></div><span class="ej-bar-label">${escapeHtml(
          b.label,
        )}</span></div>`,
    )
    .join("");
  return `<div class="ej-grafica">${
    bloque.titulo ? `<span class="ej-grafica-tit">${inline(bloque.titulo)}</span>` : ""
  }<div class="ej-bars">${cols}</div></div>`;
}

function multilinea(texto) {
  return String(texto ?? "")
    .split("\n")
    .map((linea) => inline(linea))
    .join("<br>");
}

function renderFuentes(fuentes) {
  if (!fuentes || !fuentes.length) return "";
  return `
    <details class="sources">
      <summary>Fuentes verificadas <span>(${fuentes.length})</span></summary>
      <ul>
        ${fuentes
          .map(
            (f) =>
              `<li><a href="${escapeHtml(f.url).replaceAll('"', "&quot;")}" target="_blank" rel="noopener noreferrer">${escapeHtml(f.label)}</a></li>`,
          )
          .join("")}
      </ul>
    </details>
  `;
}

function renderTags(concepts) {
  if (!concepts || !concepts.length) return "";
  return `<ul class="tags">${concepts.map((concept) => `<li>${concept}</li>`).join("")}</ul>`;
}

function renderPoints(points) {
  if (!points || !points.length) return "";
  return `
    <ul class="points">
      ${points.map((point) => `<li><strong>${inline(point.term)}:</strong> ${inline(point.text)}</li>`).join("")}
    </ul>
  `;
}

function disclosure(title, body, open = false) {
  if (!body || !body.trim()) return "";
  return `
    <details class="disclosure"${open ? " open" : ""}>
      <summary>
        <span class="disclosure-title">${title}</span>
        <span class="disclosure-chevron" aria-hidden="true">›</span>
      </summary>
      <div class="disclosure-body">${body}</div>
    </details>
  `;
}

function renderRecipe(receta) {
  if (!receta || !receta.length) return "";
  return `
    <div class="recipe">
      <ol>
        ${receta.map((step) => `<li>${inline(step)}</li>`).join("")}
      </ol>
    </div>
  `;
}

function renderNote(note) {
  if (!note) return "";
  return `
    <div class="callout callout-info">
      <span class="callout-ico" aria-hidden="true">ℹ️</span>
      <div>
        <p class="callout-head">${note.title}</p>
        ${paragraphs(note.body)}
      </div>
    </div>
  `;
}

function renderResources() {
  resourceList.innerHTML = resources
    .map(
      (resource) => `
        <article class="resource-card" data-search="${escapeAttr(`${resource.title} ${resource.description}`)}">
          <div class="resource-head">
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
          </div>
          <pre>${escapeHtml(resource.markdown)}</pre>
          <div class="resource-actions">
            <button class="ghost-button" data-copy-resource="${resource.id}">Copiar</button>
            <button class="ghost-button" data-download-resource="${resource.id}">Descargar .md</button>
          </div>
        </article>
      `,
    )
    .join("");

  resourceList.querySelectorAll("[data-copy-resource]").forEach((button) => {
    button.addEventListener("click", () => copyResource(button.dataset.copyResource));
  });
  resourceList.querySelectorAll("[data-download-resource]").forEach((button) => {
    button.addEventListener("click", () => downloadResource(button.dataset.downloadResource));
  });
}

function setupTask() {
  taskField.value = state.progress.selectedTask ?? "";
  taskField.addEventListener("input", () => {
    state.progress = { ...state.progress, selectedTask: taskField.value };
    saveProgress();
    renderCustomExamples(taskField.value);
  });
}

function setupSearch() {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    docSections.querySelectorAll(".page").forEach((section) => {
      const match = !query || section.dataset.search.includes(query);
      section.hidden = !match;
      if (match) visible += 1;
    });

    const library = document.querySelector("#biblioteca");
    let resourceMatches = 0;
    resourceList.querySelectorAll(".resource-card").forEach((card) => {
      const match = !query || card.dataset.search.includes(query);
      card.hidden = !match;
      if (match) resourceMatches += 1;
    });
    library.hidden = query ? resourceMatches === 0 : false;

    noResults.hidden = !(query && visible === 0 && resourceMatches === 0);
  });
}

function setupScrollSpy() {
  const sections = [...document.querySelectorAll(".page")];
  const byId = new Map();
  tocNav.querySelectorAll(".nav-link").forEach((link) => byId.set(link.dataset.toc, link));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        tocNav.querySelectorAll(".nav-link.active").forEach((link) => link.classList.remove("active"));
        byId.get(entry.target.id)?.classList.add("active");
      });
    },
    { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
  );

  sections.forEach((section) => section && observer.observe(section));
}

function setupNav() {
  const layout = document.querySelector(".layout");
  const tocToggle = document.querySelector("#tocToggle");

  if (localStorage.getItem("taller-ia-toc-collapsed") === "1") {
    layout.classList.add("toc-collapsed");
  }
  syncToggle();

  tocToggle.addEventListener("click", () => {
    const collapsed = layout.classList.toggle("toc-collapsed");
    localStorage.setItem("taller-ia-toc-collapsed", collapsed ? "1" : "0");
    syncToggle();
  });

  function syncToggle() {
    const collapsed = layout.classList.contains("toc-collapsed");
    tocToggle.querySelector(".toc-toggle-icon").textContent = collapsed ? "›" : "‹";
    tocToggle.setAttribute("aria-expanded", String(!collapsed));
    const label = collapsed ? "Mostrar indice" : "Colapsar indice";
    tocToggle.setAttribute("aria-label", label);
    tocToggle.setAttribute("title", label);
  }

  menuToggle.addEventListener("click", () => {
    const open = toc.classList.toggle("open");
    tocBackdrop.hidden = !open;
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  tocBackdrop.addEventListener("click", closeDrawer);
}

function closeDrawer() {
  toc.classList.remove("open");
  tocBackdrop.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
}

function inline(text) {
  let value = escapeHtml(text ?? "");
  value = value.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  value = value.replace(/\*(.+?)\*/g, "<em>$1</em>");
  return value;
}

function paragraphs(value) {
  const items = Array.isArray(value) ? value : [value].filter(Boolean);
  return items.map((text) => `<p>${inline(text)}</p>`).join("");
}

function flatten(value) {
  if (Array.isArray(value)) return value.join(" ");
  return value ?? "";
}

function searchText(module) {
  const pointsText = (module.points ?? []).map((point) => `${point.term} ${point.text}`).join(" ");
  const ejemploText = ejemploSearchText(module.ejemplo);
  return escapeAttr(
    [
      module.title,
      module.enUnaFrase,
      module.objective,
      module.ideaPrincipal,
      flatten(module.whatIs),
      pointsText,
      module.dondeVive,
      module.comoOperar,
      ejemploText,
      ...module.concepts,
    ]
      .filter(Boolean)
      .join(" ")
      .replaceAll("*", ""),
  );
}

function ejemploSearchText(ejemplo) {
  if (!ejemplo) return "";
  const parts = [ejemplo.escenario?.texto, ejemplo.resultado];
  for (const seccion of ejemplo.secciones ?? []) {
    for (const turno of seccion.turnos ?? []) {
      parts.push(turno.texto, turno.nota, turno.concepto);
    }
  }
  return parts.filter(Boolean).join(" ").replaceAll("\n", " ");
}

async function copyResource(resourceId) {
  const resource = resources.find((item) => item.id === resourceId);
  await navigator.clipboard.writeText(resource.markdown);
  showToast("Plantilla copiada.");
}

function downloadResource(resourceId) {
  const resource = resources.find((item) => item.id === resourceId);
  const blob = new Blob([resource.markdown], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${resource.id}.md`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("Descarga iniciada.");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;").toLowerCase();
}
