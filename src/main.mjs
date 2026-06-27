import { modules, phases, resources, createInitialProgress } from "./app-data.mjs";
import { initWidgets, widgetIds } from "./widgets.mjs";

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
const noResults = document.querySelector("#noResults");
const toast = document.querySelector("#toast");

// Iconos Lucide — deben declararse antes de render()
const PHASE_ICONS = {
  entender:  `<svg class="nav-ico" viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
  pedir:     `<svg class="nav-ico" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  hacer:     `<svg class="nav-ico" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  construir: `<svg class="nav-ico" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
};

const MODULE_ICONS = {
  "diagnostico":          `<svg class="nav-ico" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  "fundamentos":          `<svg class="nav-ico" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  "modelos-multimodal":   `<svg class="nav-ico" viewBox="0 0 24 24"><rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/></svg>`,
  "prompt":               `<svg class="nav-ico" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  "output":               `<svg class="nav-ico" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  "tecnicas":             `<svg class="nav-ico" viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
  "contexto":             `<svg class="nav-ico" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
  "markdown":             `<svg class="nav-ico" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 15V9l2.5 3 2.5-3v6"/><path d="M17 11l-2 2 2 2"/></svg>`,
  "tools-skills":         `<svg class="nav-ico" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  "palancas":             `<svg class="nav-ico" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  "conocimiento-memoria": `<svg class="nav-ico" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  "mcp":                  `<svg class="nav-ico" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  "loops":                `<svg class="nav-ico" viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  "agentes":              `<svg class="nav-ico" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  "donde-vive":           `<svg class="nav-ico" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  "hooks":                `<svg class="nav-ico" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  "multi-agente":         `<svg class="nav-ico" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  "evals":                `<svg class="nav-ico" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  "seguridad":            `<svg class="nav-ico" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  "costos":               `<svg class="nav-ico" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  "buen-uso":             `<svg class="nav-ico" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
  "biblioteca":           `<svg class="nav-ico" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
};

render();
setupScrollSpy();
setupNav();
setupBreadcrumb();

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
  renderPhaseCards();
  renderSections();
  renderResources();
  initWidgets();
}

function renderPhaseCards() {
  const container = document.querySelector("#phaseCards");
  if (!container) return;
  const PHASE_COLORS = {
    entender:  "#0a56c6",
    pedir:     "#6b3fd4",
    hacer:     "#0d8a68",
    construir: "#b8450a",
  };
  container.innerHTML = `
    <div class="phase-cards">
      ${phases.map((phase) => {
        const mods = docModules.filter((m) => m.phase === phase.id);
        const color = PHASE_COLORS[phase.id] ?? "#9aa0a8";
        return `
          <div class="phase-card">
            <div class="phase-card-head" style="--pc: ${color}">
              <span class="phase-card-label">${phase.label}</span>
              <p class="phase-card-hint">${phase.hint}</p>
            </div>
            <ul class="phase-card-list">
              ${mods.map((m) => `<li><a href="#m-${m.id}">${m.title}</a></li>`).join("")}
            </ul>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderToc() {
  const groups = phases
    .map((phase) => {
      const items = docModules.filter((module) => module.phase === phase.id);
      if (!items.length) return "";
      const phaseIco = PHASE_ICONS[phase.id] ?? "";
      return `
        <div class="nav-group">
          <p class="nav-phase">${phaseIco}${phase.label}</p>
          ${items.map((module) => navLink(`m-${module.id}`, module.title, MODULE_ICONS[module.id] ?? "")).join("")}
        </div>
      `;
    })
    .join("");

  tocNav.innerHTML = `${groups}
    <div class="nav-group nav-extra">
      ${navLink("biblioteca", "Biblioteca", MODULE_ICONS["biblioteca"] ?? "")}
    </div>`;

  tocNav.querySelectorAll(".nav-link").forEach((link) => link.addEventListener("click", closeDrawer));
}

function navLink(anchor, title, ico = "") {
  return `
    <a class="nav-link" href="#${anchor}" data-toc="${anchor}">
      ${ico}
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
        <section class="page" id="m-${module.id}" data-phase="${module.phase}">
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
        <article class="resource-card">
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

function setupBreadcrumb() {
  const crumb = document.createElement("div");
  crumb.id = "breadcrumb";
  crumb.setAttribute("aria-hidden", "true");
  document.querySelector(".doc").prepend(crumb);

  const sections = [...document.querySelectorAll(".page[data-phase]")];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const phase = entry.target.dataset.phase;
        const metaText = entry.target.querySelector(".meta")?.textContent ?? "";
        const titleText = entry.target.querySelector("h2")?.textContent ?? "";
        crumb.innerHTML = `<span class="crumb-phase">${metaText}</span><span class="crumb-title">${titleText}</span>`;
        crumb.dataset.phase = phase;
        crumb.classList.add("is-visible");
      });
    },
    { rootMargin: "-1px 0px -85% 0px", threshold: 0 },
  );

  // Hide breadcrumb when the page header is visible
  const header = document.querySelector(".page-title");
  if (header) {
    const headerObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) crumb.classList.remove("is-visible");
      },
      { threshold: 0.1 },
    );
    headerObs.observe(header);
  }

  sections.forEach((s) => observer.observe(s));
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
