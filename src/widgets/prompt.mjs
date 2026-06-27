export function initPromptWidget(container) {
  container.innerHTML = `
    <div class="widget-box prompt-anatomy-widget">
      <div class="widget-title">Anatomía de un Prompt Eficaz</div>
      <div class="widget-control-row">
        <button class="widget-btn active" id="btn-m2-weak">Prompt Débil</button>
        <button class="widget-btn" id="btn-m2-strong">Prompt Fuerte</button>
      </div>
      <div class="prompt-anatomy-display" id="display-m2">
        <div class="weak-prompt-view">
          "Ayúdame con la reunión del cliente."
        </div>
      </div>
      <div class="prompt-anatomy-legend" id="legend-m2" style="display:none;">
        Pasa el cursor sobre los componentes para destacar su función:
        <div class="legend-tags">
          <span class="tag-obj" data-part="obj">Objetivo</span>
          <span class="tag-ctx" data-part="ctx">Contexto</span>
          <span class="tag-tar" data-part="tar">Tarea</span>
          <span class="tag-res" data-part="res">Restricciones</span>
          <span class="tag-fmt" data-part="fmt">Formato</span>
        </div>
      </div>
      <div class="widget-caption" id="caption-m2">
        Un prompt vago obliga a la IA a adivinar qué es lo que esperas obtener.
      </div>
    </div>
  `;

  const btnWeak = container.querySelector("#btn-m2-weak");
  const btnStrong = container.querySelector("#btn-m2-strong");
  const display = container.querySelector("#display-m2");
  const legend = container.querySelector("#legend-m2");
  const caption = container.querySelector("#caption-m2");

  const weakText = `<div class="weak-prompt-view">"Ayúdame con la reunión del cliente."</div>`;
  const strongText = `
    <div class="strong-prompt-view">
      <span class="prompt-part part-obj" data-part="obj"><strong>[Objetivo]</strong> Preparar un seguimiento de 30 minutos.</span><br>
      <span class="prompt-part part-ctx" data-part="ctx"><strong>[Contexto]</strong> Te comparto la última minuta y los compromisos pendientes de la cuenta.</span><br>
      <span class="prompt-part part-tar" data-part="tar"><strong>[Tarea]</strong> Arma una guía de temas, preguntas clave y riesgos a tratar.</span><br>
      <span class="prompt-part part-res" data-part="res"><strong>[Restricciones]</strong> No inventes fechas; marca lo que falte como [FALTA].</span><br>
      <span class="prompt-part part-fmt" data-part="fmt"><strong>[Formato]</strong> Lista organizada en secciones en Markdown.</span>
    </div>
  `;

  btnWeak.addEventListener("click", () => {
    btnWeak.classList.add("active");
    btnStrong.classList.remove("active");
    display.innerHTML = weakText;
    legend.style.display = "none";
    caption.textContent = "Un prompt vago obliga a la IA a adivinar qué es lo que esperas obtener.";
  });

  btnStrong.addEventListener("click", () => {
    btnStrong.classList.add("active");
    btnWeak.classList.remove("active");
    display.innerHTML = strongText;
    legend.style.display = "block";
    caption.textContent = "Al separar con claridad los 5 componentes principales, la IA ejecuta exactamente lo requerido sin desviarse.";

    // Lógica de hovers en las leyendas
    const tags = legend.querySelectorAll(".legend-tags span");
    tags.forEach(tag => {
      tag.addEventListener("mouseenter", () => {
        const part = tag.dataset.part;
        const targetSpan = display.querySelector(`.part-${part}`);
        if (targetSpan) targetSpan.classList.add("highlighted");
      });
      tag.addEventListener("mouseleave", () => {
        const part = tag.dataset.part;
        const targetSpan = display.querySelector(`.part-${part}`);
        if (targetSpan) targetSpan.classList.remove("highlighted");
      });
    });
  });
}

// ============================================================================
// WIDGET 3: Técnicas (Simulador de Encadenamiento)
// ============================================================================
