export function initFundamentosWidget(container) {
  container.innerHTML = `
    <div class="widget-box auto-complete-widget">
      <div class="widget-title">Simulador de Autocompletado y Probabilidad</div>
      <div class="widget-control-row">
        <button class="widget-btn" id="btn-m1-simulate">Simular Autocompletado</button>
        <label class="widget-toggle-label">
          <input type="checkbox" id="toggle-m1-hallucinate">
          Provocar Alucinación
        </label>
      </div>
      <div class="autocomplete-display" id="display-m1">
        <span class="prompt-text" id="prompt-m1">Prompt: "La capital de Francia es..."</span>
        <div class="completion-output" id="output-m1"></div>
      </div>
      <div class="widget-caption" id="caption-m1">
        Haz clic en "Simular Autocompletado" para ver cómo la IA completa la respuesta palabra por palabra.
      </div>
    </div>
  `;

  const btn = container.querySelector("#btn-m1-simulate");
  const toggle = container.querySelector("#toggle-m1-hallucinate");
  const promptText = container.querySelector("#prompt-m1");
  const output = container.querySelector("#output-m1");
  const caption = container.querySelector("#caption-m1");

  let typingTimer = null;

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      promptText.innerHTML = 'Prompt: "El teléfono privado de Napoleón en 1812 era..."';
      caption.textContent = "Al activar Alucinación, verás cómo la IA inventa un dato ficticio con coherencia sintáctica.";
    } else {
      promptText.innerHTML = 'Prompt: "La capital de Francia es..."';
      caption.textContent = "Verás cómo la IA completa con datos altamente probables que coinciden con su entrenamiento.";
    }
    output.innerHTML = "";
    btn.disabled = false;
  });

  btn.addEventListener("click", () => {
    btn.disabled = true;
    output.innerHTML = "";
    clearInterval(typingTimer);

    const normalTokens = [
      { text: " París,", prob: "99.8%" },
      { text: " una", prob: "95.2%" },
      { text: " de", prob: "99.1%" },
      { text: " las", prob: "98.7%" },
      { text: " ciudades", prob: "96.4%" },
      { text: " más", prob: "99.5%" },
      { text: " importantes", prob: "92.0%" },
      { text: " de", prob: "98.9%" },
      { text: " Europa.", prob: "97.5%" }
    ];

    const hallucinateTokens = [
      { text: " el", prob: "88.2%" },
      { text: " número", prob: "85.4%" },
      { text: " +33", prob: "91.0%" },
      { text: " 6", prob: "92.3%" },
      { text: " 1812", prob: "89.1%" },
      { text: " 45", prob: "78.4%" },
      { text: " 99,", prob: "82.5%" },
      { text: " según", prob: "75.0%" },
      { text: " archivos", prob: "72.4%" },
      { text: " supuestos.", prob: "84.1%" }
    ];

    const tokens = toggle.checked ? hallucinateTokens : normalTokens;
    let idx = 0;

    typingTimer = setInterval(() => {
      if (idx < tokens.length) {
        const token = tokens[idx];
        const span = document.createElement("span");
        span.className = "token-word";
        span.innerHTML = `${token.text}<span class="token-prob">${token.prob}</span>`;
        output.appendChild(span);
        idx++;
      } else {
        clearInterval(typingTimer);
        btn.disabled = false;
        if (toggle.checked) {
          caption.innerHTML = "💡 <strong>Análisis:</strong> El número es completamente inventado. Como no tiene ese dato real, la IA autocompletó la secuencia usando formatos plausibles (código +33, año 1812) con total confianza visual.";
        } else {
          caption.innerHTML = "💡 <strong>Análisis:</strong> Autocompletado exitoso. La asociación lógica de 'capital de Francia' con 'París' es extremadamente fuerte en sus pesos de entrenamiento.";
        }
      }
    }, 350);
  });
}

// ============================================================================
// WIDGET 2: Prompt como instrucción (Anatomía del Prompt)
// ============================================================================
