export function initToolsSkillsWidget(container) {
  container.innerHTML = `
    <div class="widget-box stairs-widget">
      <div class="widget-title">Escalera de Capacidades y Complejidad</div>
      <div class="stairs-container">
        <div class="stair-step active" data-step="1">
          <span class="stair-num">1</span>
          <span class="stair-name">Prompt</span>
        </div>
        <div class="stair-step" data-step="2">
          <span class="stair-num">2</span>
          <span class="stair-name">Plantilla</span>
        </div>
        <div class="stair-step" data-step="3">
          <span class="stair-num">3</span>
          <span class="stair-name">Skill</span>
        </div>
        <div class="stair-step" data-step="4">
          <span class="stair-num">4</span>
          <span class="stair-name">Tool</span>
        </div>
      </div>
      <div class="step-details-card" id="step-details-m6">
        <!-- Contenido dinámico -->
      </div>
    </div>
  `;

  const steps = container.querySelectorAll(".stair-step");
  const details = container.querySelector("#step-details-m6");

  const stepInfos = {
    1: {
      title: "Escalón 1: Prompt Simple",
      desc: "Una instrucción directa para resolver una necesidad única e inmediata.",
      example: "<em>'Resúmeme este correo en tres puntos clave.'</em>",
      complexity: "Inmediato (Segundos)",
      reusable: "No"
    },
    2: {
      title: "Escalón 2: Plantilla (Template)",
      desc: "Un prompt estructurado con marcadores que copias, rellenas y pegas a mano.",
      example: "<em>'Genera el reporte semanal para el cliente [CLIENTE] del departamento de [ÁREA]...'</em>",
      complexity: "Bajo (Minutos)",
      reusable: "Manual"
    },
    3: {
      title: "Escalón 3: Skill (Receta Guardada)",
      desc: "Un archivo de procedimiento estructurado (.md) con rúbricas y pasos predefinidos que fuerza al modelo a seguir siempre un mismo método.",
      example: "<em>Procedimiento de auditoría de contratos que incluye criterios de evaluación paso a paso.</em>",
      complexity: "Medio (Horas)",
      reusable: "Excelente para Agentes"
    },
    4: {
      title: "Escalón 4: Tool (Capacidad Externa)",
      desc: "Una extensión de código o API que permite a la IA interactuar con el mundo exterior: bases de datos, Drive, calendario o ejecutar comandos.",
      example: "<em>Integración del agente de IA con la API de Google Docs para abrir y escribir archivos.</em>",
      complexity: "Alto (Requiere desarrollo técnico)",
      reusable: "Totalmente Automatizado"
    }
  };

  function showStep(stepNum) {
    steps.forEach(s => {
      if (s.dataset.step === String(stepNum)) s.classList.add("active");
      else s.classList.remove("active");
    });

    const info = stepInfos[stepNum];
    details.innerHTML = `
      <h4 style="margin:0 0 6px; color:var(--indigo);">${info.title}</h4>
      <p style="margin:0 0 6px; font-size:0.92rem;">${info.desc}</p>
      <p style="margin:0 0 6px; font-size:0.9rem;"><strong>Ejemplo:</strong> ${info.example}</p>
      <div style="display:flex; gap:14px; font-size:0.8rem; margin-top:8px; border-top:1px solid var(--line-soft); padding-top:6px; color:var(--soft);">
        <span>⏱️ Esfuerzo: ${info.complexity}</span>
        <span>🔄 Reusable: ${info.reusable}</span>
      </div>
    `;
  }

  steps.forEach(step => {
    step.addEventListener("click", () => {
      showStep(parseInt(step.dataset.step));
    });
  });

  // Mostrar el primero al cargar
  showStep(1);
}

// ============================================================================
// WIDGET 7: MCP (Model Context Protocol)
// ============================================================================
