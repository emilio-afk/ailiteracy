export function initContextoWidget(container) {
  container.innerHTML = `
    <div class="widget-box token-slider-widget">
      <div class="widget-title">Optimizador de Contexto y Foco</div>
      <div class="token-sliders">
        <div class="slider-group">
          <label for="noise-slider">Filtrado de información irrelevante:</label>
          <input type="range" id="noise-slider" min="0" max="3" value="0" step="1">
          <div class="slider-steps-labels">
            <span>Sin filtro (Ruido)</span>
            <span>Filtro bajo</span>
            <span>Filtro medio</span>
            <span>Óptimo (Foco)</span>
          </div>
        </div>
      </div>
      <div class="token-visualizer">
        <div class="visualizer-header">
          <div>Tokens: <span class="badge" id="token-count-badge">380</span></div>
          <div>Foco de la IA: <span class="badge" id="focus-badge">15%</span></div>
        </div>
        <div class="visualizer-body" id="visualizer-text">
          <!-- Se inyecta el texto por JS -->
        </div>
      </div>
      <div class="widget-caption" id="caption-m4">
        Mueve el control deslizante para eliminar el ruido contextual y ver cómo aumenta el foco de atención del modelo.
      </div>
    </div>
  `;

  const slider = container.querySelector("#noise-slider");
  const tokenCount = container.querySelector("#token-count-badge");
  const focus = container.querySelector("#focus-badge");
  const textDiv = container.querySelector("#visualizer-text");
  const caption = container.querySelector("#caption-m4");

  const levels = [
    {
      tokens: 380,
      focus: "15%",
      caption: "⚠️ <strong>Sin filtro:</strong> La propuesta, correos de 2024, minutas de otros proyectos y saludos de bienvenida llenan la memoria de la IA. El dato importante se pierde en el ruido.",
      html: `
        <span class="tok fluff">Estimado</span> <span class="tok fluff">equipo,</span> <span class="tok fluff">espero</span> <span class="tok fluff">que</span> <span class="tok fluff">estén</span> <span class="tok fluff">muy</span> <span class="tok fluff">bien.</span> <span class="tok fluff">Les</span> <span class="tok fluff">escribo</span> <span class="tok fluff">este</span> <span class="tok fluff">extenso</span> <span class="tok fluff">correo</span> <span class="tok fluff">para</span> <span class="tok fluff">conversar</span> <span class="tok fluff">sobre</span> <span class="tok fluff">múltiples</span> <span class="tok fluff">temas.</span> <span class="tok key">Contrato</span> <span class="tok key">firmado</span> <span class="tok key">con</span> <span class="tok key">proveedor</span> <span class="tok key">el</span> <span class="tok key">15</span> <span class="tok key">de</span> <span class="tok key">julio</span> <span class="tok key">a</span> <span class="tok key">las</span> <span class="tok key">10am</span> <span class="tok fluff">aunque</span> <span class="tok fluff">también</span> <span class="tok fluff">tenemos</span> <span class="tok fluff">pendiente</span> <span class="tok fluff">lo</span> <span class="tok fluff">de</span> <span class="tok fluff">la</span> <span class="tok fluff">fiesta</span> <span class="tok fluff">de</span> <span class="tok fluff">fin</span> <span class="tok fluff">de</span> <span class="tok fluff">año.</span>
      `
    },
    {
      tokens: 210,
      focus: "45%",
      caption: "ℹ️ <strong>Filtro bajo:</strong> Se eliminan algunos saludos cordiales y mails viejos, pero aún hay información irrelevante de proyectos ajenos en el prompt.",
      html: `
        <span class="tok fluff">Les</span> <span class="tok fluff">escribo</span> <span class="tok fluff">este</span> <span class="tok fluff">correo</span> <span class="tok fluff">para</span> <span class="tok fluff">detallar</span> <span class="tok fluff">pendientes.</span> <span class="tok key">Contrato</span> <span class="tok key">firmado</span> <span class="tok key">con</span> <span class="tok key">proveedor</span> <span class="tok key">el</span> <span class="tok key">15</span> <span class="tok key">de</span> <span class="tok key">julio</span> <span class="tok key">a</span> <span class="tok key">las</span> <span class="tok key">10am</span> <span class="tok fluff">y</span> <span class="tok fluff">lo</span> <span class="tok fluff">relacionado</span> <span class="tok fluff">a</span> <span class="tok fluff">la</span> <span class="tok fluff">reunión</span> <span class="tok fluff">de</span> <span class="tok fluff">marketing</span> <span class="tok fluff">del</span> <span class="tok fluff">jueves.</span>
      `
    },
    {
      tokens: 110,
      focus: "75%",
      caption: "⚡ <strong>Filtro medio:</strong> Solo quedan datos del cliente relevante, aunque aún arrastramos un par de líneas de antecedentes que no aportan al entregable directo.",
      html: `
        <span class="tok fluff">Detalles</span> <span class="tok fluff">del</span> <span class="tok fluff">proveedor</span> <span class="tok fluff">vigente.</span> <span class="tok key">Contrato</span> <span class="tok key">firmado</span> <span class="tok key">con</span> <span class="tok key">proveedor</span> <span class="tok key">el</span> <span class="tok key">15</span> <span class="tok key">de</span> <span class="tok key">julio</span> <span class="tok key">a</span> <span class="tok key">las</span> <span class="tok key">10am.</span>
      `
    },
    {
      tokens: 28,
      focus: "100%",
      caption: "🎯 <strong>Óptimo (Foco total):</strong> Contexto perfectamente curado. Solo la instrucción y el dato exacto de entrada. La IA responderá de inmediato, reduciendo costos y garantizando precisión.",
      html: `
        <span class="tok key">Contrato</span> <span class="tok key">firmado</span> <span class="tok key">con</span> <span class="tok key">proveedor</span> <span class="tok key">el</span> <span class="tok key">15</span> <span class="tok key">de</span> <span class="tok key">julio</span> <span class="tok key">a</span> <span class="tok key">las</span> <span class="tok key">10am.</span>
      `
    }
  ];

  function update() {
    const lvl = levels[parseInt(slider.value)];
    tokenCount.textContent = lvl.tokens;
    focus.textContent = lvl.focus;
    textDiv.innerHTML = lvl.html;
    caption.innerHTML = lvl.caption;
  }

  slider.addEventListener("input", update);
  update(); // Inicializar
}

// ============================================================================
// WIDGET 5: Markdown como contexto (Estructurador Visual)
// ============================================================================
