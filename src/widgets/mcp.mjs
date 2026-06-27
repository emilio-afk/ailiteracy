export function initMcpWidget(container) {
  container.innerHTML = `
    <div class="widget-box mcp-widget">
      <div class="widget-title">Visualizador del Flujo MCP (Model Context Protocol)</div>
      <div class="mcp-diagram-container">
        <div class="mcp-node mcp-agent" id="node-agent">Agente (Cliente)</div>
        <div class="mcp-bridge">
          <div class="bridge-line"></div>
          <div class="bridge-pulse" id="mcp-pulse"></div>
          <div class="bridge-label">Estándar MCP</div>
        </div>
        <div class="mcp-node mcp-server" id="node-server">Servidor MCP</div>
      </div>
      <div class="external-selector-row">
        <span>Elegir Recurso:</span>
        <button class="sys-btn active" data-sys="drive">Google Drive</button>
        <button class="sys-btn" data-sys="calendar">Calendario</button>
        <button class="sys-btn" data-sys="crm">HubSpot CRM</button>
      </div>
      <div class="mcp-actions-row">
        <button class="widget-btn" id="btn-m7-connect" style="width:100%;">Conectar y Consultar mediante MCP</button>
      </div>
      <div class="mcp-console" id="console-m7">
        Elige un recurso y haz clic en "Conectar y Consultar" para ver los datos viajar.
      </div>
    </div>
  `;

  const btns = container.querySelectorAll(".sys-btn");
  const btnConnect = container.querySelector("#btn-m7-connect");
  const pulse = container.querySelector("#mcp-pulse");
  const consoleLog = container.querySelector("#console-m7");
  const agentNode = container.querySelector("#node-agent");
  const serverNode = container.querySelector("#node-server");

  let activeSys = "drive";

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeSys = btn.dataset.sys;
      consoleLog.textContent = `Recurso cambiado a ${btn.textContent}. Listo para conectar.`;
    });
  });

  btnConnect.addEventListener("click", () => {
    btnConnect.disabled = true;
    consoleLog.innerHTML = `🤖 <strong>Agente:</strong> Generando consulta para ${activeSys}...`;
    pulse.className = "bridge-pulse pulse-forward";

    // Fase 1: Viaje hacia el servidor MCP
    setTimeout(() => {
      serverNode.classList.add("active");
      consoleLog.innerHTML = `🔌 <strong>Servidor MCP:</strong> Petición recibida. Traduciendo comando a la API de ${activeSys}...`;
    }, 1200);

    // Fase 2: Regreso del pulso de datos
    setTimeout(() => {
      pulse.className = "bridge-pulse pulse-backward";
      agentNode.classList.add("active");
      
      let dataText = "";
      if (activeSys === "drive") {
        dataText = "📄 <strong>Google Drive:</strong> Minuta encontrada: 'Acuerdos_Cliente_A.txt'. Contenido: 'Acordado entrega 15 Julio'.";
      } else if (activeSys === "calendar") {
        dataText = "📅 <strong>Calendario:</strong> Evento encontrado: 'Reunión de seguimiento - 10:00 AM'.";
      } else {
        dataText = "👤 <strong>HubSpot CRM:</strong> Lead: 'Juan Gómez', estatus: 'Caliente', empresa: 'Tech Corp'.";
      }
      
      consoleLog.innerHTML = `${dataText}<br>🤖 <strong>Agente:</strong> Contexto integrado. Respuesta generada con datos actualizados en tiempo real y citando la fuente.`;
    }, 2400);

    // Finalizar animación
    setTimeout(() => {
      pulse.className = "bridge-pulse";
      agentNode.classList.remove("active");
      serverNode.classList.remove("active");
      btnConnect.disabled = false;
    }, 4000);
  });
}

// ============================================================================
// WIDGET 8: Loops (Ciclo del Agente)
// ============================================================================
