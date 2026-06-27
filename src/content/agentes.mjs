export default {
  "id": "agentes",
  "phase": "construir",
  "title": "Agentes",
  "eyebrow": "Diseño",
  "enUnaFrase": "Diseñar un sistema pequeño y útil que persigue un objetivo solo.",
  "objective": "Diseñar un agente pequeño, útil y verificable para una tarea real.",
  "duration": "5 min",
  "ideaPrincipal": "La regla de oro: un buen agente es **pequeño**. Una cosa bien hecha, con límites claros.",
  "concepts": [
    "objetivo acotado",
    "alcance",
    "herramientas justificadas",
    "human-in-the-loop",
    "criterios de éxito"
  ],
  "spec": {
    "nivel": "Equipo de desarrollo",
    "cuando": "Cuando quieres que algo persiga un objetivo por sí solo",
    "requiere": "Objetivo acotado y herramientas justificadas"
  },
  "whatIs": [
    "Un **agente** combina un modelo con instrucciones (system prompt), contexto, herramientas, memoria y un *loop* para perseguir un objetivo de forma semi-autónoma. A diferencia de un chatbot que responde turno a turno, un agente tiene una **tarea definida**, ejecuta pasos intermedios, usa herramientas y verifica antes de entregar.",
    "Si intentas que resuelva demasiado, se vuelve impredecible y difícil de depurar. La regla de oro: *suficiente autonomía para ahorrarte trabajo real, suficientes límites para evitar errores costosos*."
  ],
  "dondeVive": "El agente **vive como la suma de sus partes**: un system prompt que define su personalidad y reglas, tools registradas que le dan capacidades, memoria (base de datos o archivos de sesión) y un loop de orquestación que lo mantiene iterando. Se observa en la práctica como un bot, un flujo automatizado o un script que recibe una tarea y entrega un resultado sin intervención humana constante.",
  "comoOperar": "Lo **operas diseñando primero un Blueprint** en Markdown que defina su objetivo, alcance, herramientas permitidas y criterios de éxito. Luego lo implementas en una plataforma de agentes (ej. OpenAI Assistants API, Claude con tools, LangGraph, CrewAI, Dify) o mediante código de orquestación propio. El Blueprint es tu 'contrato' con el agente: si no está escrito, no lo cumplirá.",
  "receta": [
    "Escribe en una frase qué entrega el agente (ej. 'convierte notas de reunión en una tabla de acuerdos').",
    "Anota qué necesita para empezar (las notas, la fecha) y qué NO debe hacer (ej. 'no manda correos').",
    "Por cada herramienta que le des, pregúntate si de verdad la necesita; si no, quítala.",
    "Define sus pasos e incluye una revisión antes de entregar.",
    "Pon un freno: antes de cualquier acción que afecte algo real, que te pida confirmación.",
    "Prúbalo, mide si cumple el objetivo y quítale todo lo que sobre hasta que sea simple."
  ],
  "note": {
    "title": "Agente de IA vs IA agéntica",
    "body": [
      "Un **agente de IA** es una pieza concreta que hace una tarea acotada (como el preparador de reuniones). La **IA agéntica** es un enfoque, normalmente *multi-agente*, donde varios agentes se coordinan para metas mayores.",
      "Regla práctica: **empieza pequeño**. Lo multi-agente resuelve cosas grandes, pero multiplica los puntos de falla y es más difícil de controlar."
    ]
  },
  "ejemplo": {
    "escenario": {
      "sector": "ventas",
      "texto": "Quieres revisar los leads de tu landing cada mañana."
    },
    "secciones": [
      {
        "etiqueta": "Antes",
        "tono": "mal",
        "turnos": [
          {
            "de": "tu",
            "texto": "Revisa los leads de hoy."
          },
          {
            "de": "claude",
            "texto": "Pásame la lista y la reviso.",
            "nota": "Depende de que tú lo pidas y le des los datos, cada vez."
          }
        ]
      },
      {
        "etiqueta": "Después",
        "tono": "bien",
        "turnos": [
          {
            "de": "tu",
            "texto": "Objetivo: cada día, clasifica los leads nuevos y avísame los urgentes.\nHerramientas: hoja de leads + correo.",
            "destacado": true,
            "concepto": "Defines objetivo acotado + herramientas justificadas."
          },
          {
            "de": "claude",
            "texto": "Entendido. Revisaré los leads cada mañana y te enviaré los 3 más urgentes."
          }
        ]
      }
    ],
    "resultado": "Un sistema chico que persigue un objetivo, no un chat puntual."
  }
};
