export function initAgentesWidget(container) {
  container.innerHTML = `
    <div class="widget-box agent-creator-widget">
      <div class="widget-title">Diseñador de Blueprint de Agente</div>
      <div class="agent-form">
        <div class="form-group">
          <label for="agent-role-select">Propósito del Agente:</label>
          <select id="agent-role-select">
            <option value="reuniones">Preparador de Reuniones</option>
            <option value="reportes">Auditor de Reportes Semanales</option>
            <option value="leads">Calificador de Clientes (Leads)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Conectar Herramientas:</label>
          <div class="checkbox-row" style="display:flex; gap:12px; font-size:0.9rem;">
            <label><input type="checkbox" id="tool-drive-m9" checked> Drive (MCP)</label>
            <label><input type="checkbox" id="tool-search-m9"> Google Search</label>
            <label><input type="checkbox" id="tool-email-m9"> Enviar Email</label>
          </div>
        </div>
        <div class="form-group">
          <label for="control-select-m9">Límite de Control Humano:</label>
          <select id="control-select-m9">
            <option value="high">Aprobación obligatoria antes de cualquier acción externa</option>
            <option value="none">Autónomo sin confirmación (Riesgoso)</option>
          </select>
        </div>
      </div>
      <div class="blueprint-preview-box" id="preview-m9">
        <!-- Renderizado dinámico -->
      </div>
    </div>
  `;

  const roleSel = container.querySelector("#agent-role-select");
  const chkDrive = container.querySelector("#tool-drive-m9");
  const chkSearch = container.querySelector("#tool-search-m9");
  const chkEmail = container.querySelector("#tool-email-m9");
  const ctrlSel = container.querySelector("#control-select-m9");
  const preview = container.querySelector("#preview-m9");

  function update() {
    const role = roleSel.value;
    const tools = [];
    if (chkDrive.checked) tools.push("Google Drive (Lectura de archivos)");
    if (chkSearch.checked) tools.push("Google Search API (Búsqueda web)");
    if (chkEmail.checked) tools.push("SMTP / Gmail API (Envío de correos)");

    const isHighControl = ctrlSel.value === "high";

    let roleTitle = "";
    let objective = "";
    if (role === "reuniones") {
      roleTitle = "Agente Preparador de Reuniones";
      objective = "Recopilar datos de minutas y generar agendas previas a llamadas.";
    } else if (role === "reportes") {
      roleTitle = "Agente Auditor de Reportes";
      objective = "Escanear reportes del equipo y buscar errores aritméticos.";
    } else {
      roleTitle = "Agente Calificador de Leads";
      objective = "Filtrar nuevos registros y destacar oportunidades comerciales.";
    }

    const warningHtml = !isHighControl 
      ? `<div style="margin-top:10px; background:var(--c-bad); color:#a00; padding:8px; border-radius:6px; font-size:0.8rem; font-weight:600;">⚠️ ADVERTENCIA: Dar autonomía total sin aprobación humana expone al negocio a correos automáticos erróneos o alucinaciones públicas.</div>` 
      : "";

    preview.innerHTML = `
      <div style="background:var(--sb); border:1px dashed var(--cobalto); padding:12px; border-radius:8px; font-family:var(--mono); font-size:0.8rem;">
        <div style="font-weight:700; color:var(--indigo); border-bottom:1px solid var(--line); padding-bottom:4px; margin-bottom:8px;">📄 BLUEPRINT: ${roleTitle.toUpperCase()}</div>
        <strong>Propósito:</strong> ${objective}<br>
        <strong>Herramientas:</strong> ${tools.length ? tools.join(", ") : "Ninguna"}<br>
        <strong>Límite de Control:</strong> ${isHighControl ? "🔒 APROBACIÓN MANUAL REQUERIDA (Seguro)" : "🔓 AUTÓNOMO (Riesgo Alto)"}
      </div>
      ${warningHtml}
    `;
  }

  [roleSel, chkDrive, chkSearch, chkEmail, ctrlSel].forEach(el => el.addEventListener("change", update));
  update(); // Inicializar
}

// ============================================================================
// WIDGET 10: Dónde vive un agente (Local vs Servidor)
// ============================================================================
