export default {
  "id": "contexto",
  "phase": "pedir",
  "title": "Contexto y tokens",
  "eyebrow": "Costo y foco",
  "enUnaFrase": "Qué información darle, y por qué más no siempre es mejor.",
  "objective": "Decidir qué información incluir, resumir o dejar fuera, y por qué importa.",
  "duration": "5 min",
  "ideaPrincipal": "Más contexto **no** es mejor contexto. Lo irrelevante mete *ruido* y empeora la respuesta.",
  "concepts": [
    "token",
    "ventana de contexto",
    "ruido contextual",
    "resumen",
    "dividir la tarea"
  ],
  "spec": {
    "nivel": "Cualquiera",
    "cuando": "Cuando le das mucha información y la respuesta empeora",
    "requiere": "Decidir qué incluir y qué quitar"
  },
  "whatIs": [
    "El **contexto** es todo lo que la IA tiene enfrente para responder: tus instrucciones, los documentos que pegaste, la conversación previa y los datos. Es su única fuente de verdad.",
    "Los **tokens** son las unidades mínimas en que la IA divide el texto: pedacitos de palabras (en español, 1 token ≈ 3-4 caracteres). Son *la moneda* del modelo: cada token que entra y sale tiene un costo económico y un costo de atención. Una página típica tiene ~500 tokens; un documento de 10 páginas, ~5,000.",
    "La **ventana de contexto** es el límite total de tokens que el modelo puede ver en una conversación (ej. 128K tokens en GPT-4o, 200K en Claude Sonnet). Superar ese límite hace que el modelo *olvide* lo más antiguo. Y contra la intuición, no conviene llenarla: mientras más texto irrelevante, más se diluye lo importante."
  ],
  "dondeVive": "El contexto **vive en la ventana de contexto activa** del modelo durante la llamada. Es todo lo que el modelo 've': tu system prompt, el historial de mensajes, los archivos adjuntos y tu último mensaje. Una vez que la conversación termina o se excede el límite de tokens, lo que quedó fuera **desaparece** para el modelo.",
  "comoOperar": "Lo **manipulas curando y filtrando** la información antes de enviarla: quitando saludos, firmas, datos históricos irrelevantes y texto repetido. Si un documento es muy largo, primero pídele un resumen y trabaja con ese resumen en el siguiente paso. En la API puedes contar tokens antes de enviar usando herramientas como *tiktoken* (OpenAI) o el endpoint de conteo del proveedor.",
  "receta": [
    "Antes de pegar, decide qué necesita leer para esta tarea concreta (la última minuta y los pendientes, no el proyecto entero).",
    "Borra lo repetido, lo viejo y lo que no toca el tema.",
    "Si un texto es muy largo, primero pídele un resumen y trabaja con ese resumen.",
    "Separa las dos cosas: arriba tu instrucción ('Tarea: …') y abajo los datos ('Datos: …').",
    "Si necesitas info de varios archivos que cambian seguido, consúltalos por separado; no pegues versiones viejas que quizá ya no aplican."
  ],
  "ejemplo": {
    "escenario": {
      "sector": "operación",
      "texto": "Quieres el resumen de la reunión, pero pegas todo el historial."
    },
    "secciones": [
      {
        "etiqueta": "Antes",
        "tono": "mal",
        "turnos": [
          {
            "de": "tu",
            "texto": "Resume esto.\n[pegas 60 páginas de chats viejos]"
          },
          {
            "de": "claude",
            "texto": "Resumen general… (mezcla temas de hace meses con los de hoy)",
            "nota": "Demasiado ruido: la respuesta empeora."
          }
        ]
      },
      {
        "etiqueta": "Después",
        "tono": "bien",
        "turnos": [
          {
            "de": "tu",
            "texto": "Resume solo la minuta de hoy.\n[pegas 1 página]",
            "destacado": true,
            "concepto": "Le das lo justo, no todo."
          },
          {
            "de": "claude",
            "texto": "Acuerdos de hoy:\n1. Entregar propuesta el viernes.\n2. Revisar precios con finanzas."
          }
        ]
      }
    ],
    "resultado": "Menos contexto, mejor foco, mejor resumen."
  }
};
