export function initLoopsWidget(container) {
  container.innerHTML = `
    <div class="widget-box loop-widget">
      <div class="widget-title">Simulador de Loop de Agente con Autocorrección</div>
      <div class="loop-diagram-grid">
        <div class="loop-grid-node" id="n-loop-plan">1. Planificar</div>
        <div class="loop-grid-arrow">➔</div>
        <div class="loop-grid-node" id="n-loop-act">2. Actuar</div>
        <div class="loop-grid-arrow">➔</div>
        <div class="loop-grid-node" id="n-loop-observe">3. Observar</div>
        
        <div class="loop-grid-node" id="n-loop-deliver" style="grid-row:3; grid-column:1;">6. Entregar</div>
        <div class="loop-grid-arrow" style="grid-row:3; grid-column:2; transform:rotate(180deg);">➔</div>
        <div class="loop-grid-node" id="n-loop-verify" style="grid-row:3; grid-column:3;">5. Verificar</div>
        <div class="loop-grid-arrow" style="grid-row:2; grid-column:3; transform:rotate(90deg); justify-self:center;">➔</div>
        <div class="loop-grid-node" id="n-loop-correct" style="grid-row:2; grid-column:5;">4. Corregir</div>
      </div>
      <div style="text-align:center; margin-top:16px;">
        <button class="widget-btn" id="btn-m8-run" style="width:100%;">Ejecutar Loop del Agente</button>
      </div>
      <div class="loop-console" id="console-m8">
        Haz clic en "Ejecutar Loop" para ver al agente planificar, ejecutar y corregir errores de forma autónoma.
      </div>
    </div>
  `;

  const btn = container.querySelector("#btn-m8-run");
  const consoleLog = container.querySelector("#console-m8");

  const nodes = {
    plan: container.querySelector("#n-loop-plan"),
    act: container.querySelector("#n-loop-act"),
    observe: container.querySelector("#n-loop-observe"),
    correct: container.querySelector("#n-loop-correct"),
    verify: container.querySelector("#n-loop-verify"),
    deliver: container.querySelector("#n-loop-deliver")
  };

  btn.addEventListener("click", () => {
    btn.disabled = true;
    Object.values(nodes).forEach(n => n.className = "loop-grid-node");
    
    // Paso 1: Plan
    nodes.plan.classList.add("active");
    consoleLog.innerHTML = "📝 <strong>[Planificación]</strong> El agente define el orden de trabajo: leer entrada ➔ generar borrador ➔ validar formato.";

    // Paso 2: Act
    setTimeout(() => {
      nodes.plan.className = "loop-grid-node done";
      nodes.act.classList.add("active");
      consoleLog.innerHTML = "⚙️ <strong>[Acción]</strong> Invocando al modelo de lenguaje para redactar la propuesta comercial...";
    }, 1500);

    // Paso 3: Observe
    setTimeout(() => {
      nodes.act.className = "loop-grid-node done";
      nodes.observe.classList.add("warning");
      consoleLog.innerHTML = "👁️ <strong>[Observación]</strong> Leyendo el borrador generado... ¡Alerta! No se incluyó el precio de lista obligatorio.";
    }, 3000);

    // Paso 4: Correct
    setTimeout(() => {
      nodes.observe.className = "loop-grid-node done";
      nodes.correct.classList.add("active");
      consoleLog.innerHTML = "🔧 <strong>[Corrección]</strong> Solicitando corrección automática al modelo: 'Agrega el precio de lista que omitiste en el primer borrador'.";
    }, 4500);

    // Paso 5: Verify
    setTimeout(() => {
      nodes.correct.className = "loop-grid-node done";
      nodes.verify.classList.add("success");
      consoleLog.innerHTML = "✅ <strong>[Verificación]</strong> Validando nuevamente... Borrador completo. Estructura y datos críticos correctos. Aprobado.";
    }, 6000);

    // Paso 6: Deliver
    setTimeout(() => {
      nodes.verify.className = "loop-grid-node done";
      nodes.deliver.classList.add("success");
      consoleLog.innerHTML = "🎉 <strong>[Entrega]</strong> Documento final enviado con éxito al usuario. Loop cerrado de forma confiable.";
      btn.disabled = false;
    }, 7500);
  });
}

// ============================================================================
// WIDGET 9: Agentes (Creador de Planos)
// ============================================================================
