export function getCustomizedExample(moduleId, taskText) {
  const task = taskText.trim() || "preparar reuniones con clientes usando minutas, pendientes y riesgos";
  
  const examples = {
    fundamentos: {
      title: "¿Cómo completaría la IA?",
      text: `Si le pides a un LLM que redacte un borrador para <strong>"${task}"</strong> basándose en apuntes desordenados, el modelo autocompletará las frases buscando coherencia y probabilidad. Sin embargo, si le pides datos que no están en el texto (como cifras de ventas o fechas que olvidaste registrar), inventará información que suene creíble pero falsa. <strong>Esto es una alucinación y por eso es indispensable la verificación humana.</strong>`
    },
    prompt: {
      title: "Diseñando tu instrucción perfecta",
      text: `Para automatizar con éxito la tarea <strong>"${task}"</strong>, escribe un prompt estructurado como el siguiente:<br>
      • <strong>Objetivo:</strong> Generar el entregable para "${task}".<br>
      • <strong>Contexto:</strong> Te adjunto los apuntes del cliente y los correos de esta semana.<br>
      • <strong>Tarea:</strong> Extrae acuerdos, responsables y elabora la agenda de seguimiento.<br>
      • <strong>Restricciones:</strong> No inventes datos; si falta información, escribe [FALTA].<br>
      • <strong>Formato:</strong> Tabla con columnas (Tema | Encargado | Estado).`
    },
    tecnicas: {
      title: "Encadenando el trabajo en pasos",
      text: `En lugar de pedirle todo a la IA de un solo golpe, divide la tarea de <strong>"${task}"</strong> en una cadena de prompts:<br>
      1. <strong>Paso 1 (Prompt 1):</strong> "Lee este texto y extrae únicamente los acuerdos tomados."<br>
      2. <strong>Paso 2 (Prompt 2):</strong> "Con los acuerdos anteriores, organízalos en una agenda de temas prioritarios."<br>
      3. <strong>Paso 3 (Prompt 3):</strong> "Redacta un correo cordial de seguimiento de menos de 150 palabras basándote en la agenda anterior."<br>
      <em>Esto mejora el enfoque y reduce el riesgo de omisiones críticas en el resultado.</em>`
    },
    contexto: {
      title: "Limpiando el ruido en tu contexto",
      text: `Para ejecutar la tarea de <strong>"${task}"</strong> de forma óptima, evita adjuntar 50 páginas de historial del proyecto del año pasado. Solo pega la última minuta y los pendientes activos. Al reducir los tokens de relleno, evitas confundir al modelo, ahorras tiempo de respuesta y garantizas que el dato más importante no se diluya en el ruido.`
    },
    markdown: {
      title: "Tu plantilla estructurada en Markdown",
      text: `Documenta el proceso para realizar <strong>"${task}"</strong> utilizando Markdown para que sea totalmente reusable por ti y por la IA:<br>
      <pre style="margin: 8px 0; font-size: 0.8rem; background: var(--c-code); color: #fff; padding: 10px; border-radius: 6px;"># Proceso: ${task}
## Entradas necesarias
- Notas de reunión
- Lista de pendientes activos

## Procedimiento
1. Extraer hitos clave.
2. Identificar riesgos y fechas de entrega.</pre>
      <em>El uso de títulos (#) y listas (-) elimina la ambigüedad y le da orden al modelo.</em>`
    },
    "tools-skills": {
      title: "El escalón de capacidades para esta tarea",
      text: `Dependiendo de qué tan seguido realices la tarea de <strong>"${task}"</strong>, elige el nivel correcto:<br>
      • <strong>Prompt:</strong> Si solo lo harás una vez de manera rápida.<br>
      • <strong>Plantilla:</strong> Si repites el formato pero copias y pegas a mano.<br>
      • <strong>Skill:</strong> Si creas un archivo de procedimiento .md con rúbricas y pasos que pegas junto con el contexto para que siempre se resuelva bajo el mismo método.<br>
      • <strong>Tool:</strong> Si conectas una herramienta para que la IA lea y escriba directamente tus minutas de Drive o CRM de forma automática.`
    },
    mcp: {
      title: "Conectando tu tarea con tus sistemas",
      text: `Si configuras un agente para resolver <strong>"${task}"</strong>:<br>
      El agente utilizará el <strong>Model Context Protocol (MCP)</strong> para consultar de forma autónoma el archivo de la última minuta en Google Drive, extraerá los pendientes de tu CRM y consultará tu calendario. Todo de manera integrada y controlada a través de permisos específicos de lectura.`
    },
    loops: {
      title: "El ciclo de verificación de tu agente",
      text: `Al programar un agente para <strong>"${task}"</strong>, define un ciclo automático:<br>
      El agente genera el entregable y, antes de mostrártelo, ejecuta una <strong>Observación</strong> para comparar el borrador contra tus criterios de calidad (ej. "que no falte ninguna fecha de entrega"). Si falta algo, realiza una <strong>Corrección</strong> pidiéndole al modelo que lo complete y finalmente <strong>Verifica</strong> que todo esté en orden antes de la entrega.`
    },
    agentes: {
      title: "Diseño de un Agente Especializado",
      text: `El Blueprint de un agente enfocado en <strong>"${task}"</strong> tendría:<br>
      • <strong>Objetivo único:</strong> Generar briefs de reunión de alta calidad.<br>
      • <strong>Herramientas justificadas:</strong> Solo lectura de Drive y Calendario.<br>
      • <strong>Límites operativos:</strong> Detenerse y solicitar autorización del usuario antes de guardar cualquier cambio o enviar correos.`
    },
    "donde-vive": {
      title: "Operación continua y autónoma",
      text: `Para que la tarea <strong>"${task}"</strong> se resuelva sola e independientemente, hospedas el flujo en un servidor en la nube (Make o Zapier). Así, el agente se activará de forma periódica ante un evento (por ejemplo, al recibir un correo del cliente o a una hora fija) sin necesidad de que tengas tu computadora encendida.`
    },
    "buen-uso": {
      title: "Seguridad y ética al procesar tu tarea",
      text: `Cuando utilices IA para resolver <strong>"${task}"</strong>, recuerda seguir estas pautas:<br>
      • <strong>Anonimización:</strong> Reemplaza nombres de clientes, datos financieros o credenciales reales por variables ficticias antes de enviarlas al modelo.<br>
      • <strong>Criterio de responsabilidad:</strong> Tú eres el responsable del documento final. Revisa detalladamente todas las cifras, nombres y compromisos antes de dar el visto bueno.`
    }
  };

  const moduleData = examples[moduleId];
  if (!moduleData) return "";

  return `
    <span class="callout-ico" aria-hidden="true">🎯</span>
    <div>
      <p class="callout-head">${moduleData.title} <span style="font-weight:normal; font-size:0.8rem; color:var(--soft);">— Tu caso real</span></p>
      <p style="margin: 6px 0 0; font-size: 0.94rem;">${moduleData.text}</p>
    </div>
  `;
}

/**
 * Renderiza los ejemplos personalizados en todas las secciones.
 */
export function renderCustomExamples(selectedTask = "") {
  const containers = document.querySelectorAll(".callout-custom-task");
  containers.forEach((container) => {
    const moduleId = container.id.replace("custom-ex-", "");
    container.innerHTML = getCustomizedExample(moduleId, selectedTask);
  });
}

/**
 * Inicializa todos los widgets interactivos y animados.
 */
