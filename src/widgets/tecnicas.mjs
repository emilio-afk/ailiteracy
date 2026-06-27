export function initTecnicasWidget(container) {
  container.innerHTML = `
    <div class="widget-box pipeline-widget">
      <div class="widget-title">Simulador de Encadenamiento de Prompts</div>
      <div class="widget-control-row">
        <button class="widget-btn" id="btn-m3-chain">Simular Flujo Encadenado</button>
        <button class="widget-btn" id="btn-m3-single">Simular Prompt Gigante Único</button>
      </div>
      <div class="pipeline-display">
        <div class="pipeline-flow" id="flow-m3">
          <!-- Se renderizan los nodos aquí -->
        </div>
        <div class="pipeline-status" id="status-m3">
          Selecciona una estrategia para ver la simulación en tiempo de ejecución.
        </div>
      </div>
    </div>
  `;

  const btnChain = container.querySelector("#btn-m3-chain");
  const btnSingle = container.querySelector("#btn-m3-single");
  const flow = container.querySelector("#flow-m3");
  const status = container.querySelector("#status-m3");

  btnChain.addEventListener("click", () => {
    btnChain.disabled = true;
    btnSingle.disabled = true;
    status.innerHTML = "Iniciando flujo encadenado por pasos...";
    
    flow.innerHTML = `
      <div class="flow-node active" id="node-m3-1">1. Entrada</div>
      <div class="flow-arrow" id="arrow-m3-1">➔</div>
      <div class="flow-node" id="node-m3-2">2. Extraer hitos</div>
      <div class="flow-arrow" id="arrow-m3-2">➔</div>
      <div class="flow-node" id="node-m3-3">3. Estructurar</div>
      <div class="flow-arrow" id="arrow-m3-3">➔</div>
      <div class="flow-node" id="node-m3-4">4. Redactar</div>
    `;

    setTimeout(() => {
      container.querySelector("#node-m3-1").classList.remove("active");
      container.querySelector("#node-m3-1").classList.add("done");
      container.querySelector("#arrow-m3-1").classList.add("active");
      container.querySelector("#node-m3-2").classList.add("active");
      status.innerHTML = "<strong>Paso 1:</strong> Extrayendo los puntos clave de la minuta... [Hecho]";
    }, 1200);

    setTimeout(() => {
      container.querySelector("#node-m3-2").classList.remove("active");
      container.querySelector("#node-m3-2").classList.add("done");
      container.querySelector("#arrow-m3-2").classList.add("active");
      container.querySelector("#node-m3-3").classList.add("active");
      status.innerHTML = "<strong>Paso 2:</strong> Ordenando hitos por responsable y riesgos... [Hecho]";
    }, 2400);

    setTimeout(() => {
      container.querySelector("#node-m3-3").classList.remove("active");
      container.querySelector("#node-m3-3").classList.add("done");
      container.querySelector("#arrow-m3-3").classList.add("active");
      container.querySelector("#node-m3-4").classList.add("active");
      status.innerHTML = "<strong>Paso 3:</strong> Redactando borrador final de correo con los hitos... [En ejecución]";
    }, 3600);

    setTimeout(() => {
      container.querySelector("#node-m3-4").classList.remove("active");
      container.querySelector("#node-m3-4").classList.add("done");
      status.innerHTML = "✅ <strong>Flujo Finalizado:</strong> Cada tarea intermedia se ejecutó de forma precisa y enfocada. El correo resultante es claro y sin alucinaciones.";
      btnChain.disabled = false;
      btnSingle.disabled = false;
    }, 4800);
  });

  btnSingle.addEventListener("click", () => {
    btnChain.disabled = true;
    btnSingle.disabled = true;
    status.innerHTML = "Enviando transcripción completa con 10 instrucciones en un solo prompt...";
    
    flow.innerHTML = `
      <div class="flow-node active" id="node-m3-gigante" style="width: 100%;">Prompt Gigante (Leer, extraer, estructurar, resumir, redactar, buscar)</div>
    `;

    setTimeout(() => {
      const node = container.querySelector("#node-m3-gigante");
      node.classList.remove("active");
      node.classList.add("error");
      status.innerHTML = "⚠️ <strong>Resultado deficiente:</strong> La IA se saturó con la extensión del contexto e instrucciones contradictorias. Omitió identificar el riesgo principal y mezcló los nombres de los responsables.";
      btnChain.disabled = false;
      btnSingle.disabled = false;
    }, 2000);
  });
}

// ============================================================================
// WIDGET 4: Contexto y tokens (Optimizador de Contexto)
// ============================================================================
