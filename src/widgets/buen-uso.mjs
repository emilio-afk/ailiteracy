export function initBuenUsoWidget(container) {
  container.innerHTML = `
    <div class="widget-box safety-widget">
      <div class="widget-title">Calculador de Índice de Riesgo de Operación</div>
      <div class="safety-toggles">
        <label class="safety-switch-label" style="display:block; margin-bottom:8px; font-size:0.9rem;">
          <input type="checkbox" id="chk-s1-anon"> Anonimizar datos de clientes (quitar mails, nombres)
        </label>
        <label class="safety-switch-label" style="display:block; margin-bottom:8px; font-size:0.9rem;">
          <input type="checkbox" id="chk-s2-verify"> Validar cifras, fechas y números a mano antes de enviar
        </label>
        <label class="safety-switch-label" style="display:block; margin-bottom:8px; font-size:0.9rem;">
          <input type="checkbox" id="chk-s3-write"> Dar permisos de escritura automáticos sin aprobación
        </label>
      </div>
      <div class="safety-gauge-panel" style="margin-top:14px; text-align:center;">
        <div style="font-size:0.75rem; text-transform:uppercase; color:var(--soft); font-family:var(--mono);">Estatus de Operación</div>
        <div id="safety-status-badge" style="display:inline-block; padding: 4px 14px; border-radius: 99px; color:#fff; font-weight:700; font-size:0.9rem; margin-top:4px;">
          Riesgo Crítico
        </div>
      </div>
      <div class="safety-feedback" id="feedback-m11" style="margin-top:10px; font-size:0.86rem; min-height:48px; border-left:3px solid #ccc; padding-left:10px;">
        Selecciona las medidas de seguridad para proteger los datos de tu empresa.
      </div>
    </div>
  `;

  const chkAnon = container.querySelector("#chk-s1-anon");
  const chkVerify = container.querySelector("#chk-s2-verify");
  const chkWrite = container.querySelector("#chk-s3-write");
  const badge = container.querySelector("#safety-status-badge");
  const feedback = container.querySelector("#feedback-m11");

  function evaluate() {
    let score = 50; // Base score
    if (chkAnon.checked) score += 25;
    if (chkVerify.checked) score += 25;
    if (chkWrite.checked) score -= 50;

    if (score >= 100) {
      badge.textContent = "OPERACIÓN SEGURA";
      badge.style.background = "#2e9e6b"; // Verde
      feedback.innerHTML = "✅ <strong>Excelente:</strong> Anonimizas la información corporativa sensible y validas los resultados del modelo. El riesgo de cometer un error público o legal es mínimo.";
    } else if (score >= 50) {
      badge.textContent = "RIESGO MODERADO";
      badge.style.background = "#f0ad4e"; // Naranja
      feedback.innerHTML = "⚠️ <strong>Cuidado:</strong> Cumples con algunas pautas, pero la falta de anonimización o la ausencia de validación a mano puede provocar filtración de datos o propagación de errores.";
    } else {
      badge.textContent = "RIESGO CRÍTICO";
      badge.style.background = "#d9534f"; // Rojo
      feedback.innerHTML = "❌ <strong>Peligroso:</strong> Estás dando acceso de escritura directa a la IA sin supervisión humana y sin filtrar datos sensibles. Altas probabilidades de alucinaciones dañinas o filtraciones.";
    }
  }

  [chkAnon, chkVerify, chkWrite].forEach(el => el.addEventListener("change", evaluate));
  evaluate(); // Inicializar
}
