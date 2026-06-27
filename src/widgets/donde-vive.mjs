export function initDondeViveWidget(container) {
  container.innerHTML = `
    <div class="widget-box host-widget">
      <div class="widget-title">Simulador de Entornos de Ejecución</div>
      <div class="widget-control-row">
        <button class="widget-btn active" id="btn-m10-laptop">Corriendo en Laptop</button>
        <button class="widget-btn" id="btn-m10-cloud">Corriendo en Servidor Nube</button>
      </div>
      <div class="host-simulation-display">
        <div class="host-visual" id="visual-m10" style="font-size: 3.5rem; text-align:center; padding: 12px 0;">
          💻
        </div>
        <div style="text-align:center; margin-bottom:10px;" id="action-row-m10">
          <button class="widget-btn" id="btn-laptop-lid" style="font-size:0.84rem; padding: 4px 10px;">Cerrar pantalla de laptop</button>
        </div>
        <div class="host-status-log" id="log-m10" style="background:#000; color:#0f0; font-family:var(--mono); font-size:0.82rem; padding:10px; border-radius:6px; min-height:80px;">
          > Agente activo en localhost. Listo para disparador de las 9:00 AM...
        </div>
      </div>
    </div>
  `;

  const btnLaptop = container.querySelector("#btn-m10-laptop");
  const btnCloud = container.querySelector("#btn-m10-cloud");
  const visual = container.querySelector("#visual-m10");
  const actionRow = container.querySelector("#action-row-m10");
  const log = container.querySelector("#log-m10");

  let isLaptopClosed = false;

  function renderLaptop() {
    isLaptopClosed = false;
    btnLaptop.classList.add("active");
    btnCloud.classList.remove("active");
    visual.textContent = "💻";
    actionRow.innerHTML = `<button class="widget-btn" id="btn-laptop-lid" style="font-size:0.84rem; padding: 4px 10px;">Cerrar pantalla (Suspender)</button>`;
    log.innerHTML = `> Agente activo en localhost.<br>> Esperando disparador diario a las 9:00 AM...`;

    container.querySelector("#btn-laptop-lid").addEventListener("click", () => {
      isLaptopClosed = !isLaptopClosed;
      if (isLaptopClosed) {
        visual.textContent = "😴";
        container.querySelector("#btn-laptop-lid").textContent = "Abrir pantalla (Encender)";
        log.innerHTML = `<span style="color:#f55;">> [ERROR] Laptop en estado suspendido.<br>> [FALLA] Disparador de las 9:00 AM no pudo ejecutarse.<br>> Causa: Sin conexión a internet y CPU apagada.</span>`;
      } else {
        visual.textContent = "💻";
        container.querySelector("#btn-laptop-lid").textContent = "Cerrar pantalla (Suspender)";
        log.innerHTML = `> Laptop encendida nuevamente.<br>> Agente activo en localhost.`;
      }
    });
  }

  function renderCloud() {
    btnCloud.classList.add("active");
    btnLaptop.classList.remove("active");
    visual.textContent = "🖧";
    actionRow.innerHTML = `<button class="widget-btn" id="btn-trigger-cloud" style="font-size:0.84rem; padding: 4px 10px;">Simular Disparador (9:00 AM)</button>`;
    log.innerHTML = `> Agente alojado en servidor cloud (Make.com).<br>> Estatus: Activo y en espera 24/7.`;

    container.querySelector("#btn-trigger-cloud").addEventListener("click", () => {
      log.innerHTML = `> [EVENTO] Disparador de las 9:00 AM activado.<br>> [PROCESO] Ejecutando lectura de base de datos...<br>> [ACCIÓN] Generando y enviando resumen a Slack...<br><span style="color:#0f0;">> [EXITO] Proceso terminado con éxito de forma autónoma.</span>`;
    });
  }

  btnLaptop.addEventListener("click", renderLaptop);
  btnCloud.addEventListener("click", renderCloud);

  // Inicializar
  renderLaptop();
}

// ============================================================================
// WIDGET 11: Buen uso y riesgos (Evaluador de Seguridad)
// ============================================================================
