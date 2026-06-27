export default {
  "id": "prompt",
  "phase": "pedir",
  "title": "Prompt como instrucción",
  "eyebrow": "Claridad operacional",
  "enUnaFrase": "Cómo pedir las cosas para obtener una buena respuesta a la primera.",
  "objective": "Escribir instrucciones claras para obtener respuestas útiles a la primera.",
  "duration": "4 min",
  "ideaPrincipal": "Mientras **menos tenga que adivinar** la IA, mejor responde. Un buen prompt baja la ambigüedad.",
  "concepts": [
    "objetivo",
    "contexto",
    "tarea",
    "restricciones",
    "formato de salida",
    "rol / persona"
  ],
  "spec": {
    "nivel": "Cualquiera",
    "cuando": "Cuando la respuesta sale genérica o incompleta",
    "requiere": "Tu instrucción escrita"
  },
  "whatIs": [
    "Un **prompt** es la instrucción que le das a la IA. La diferencia entre un resultado mediocre y uno excelente casi nunca es *el modelo*: es qué tan clara fue la instrucción.",
    "Un prompt débil como *'hazme un resumen'* obliga a la IA a inventar el objetivo, el tono y el formato. Un buen prompt responde cinco preguntas:"
  ],
  "points": [
    {
      "term": "Objetivo",
      "text": "qué quieres lograr."
    },
    {
      "term": "Contexto",
      "text": "con qué información."
    },
    {
      "term": "Tarea",
      "text": "qué debe hacer exactamente."
    },
    {
      "term": "Restricciones",
      "text": "bajo qué límites."
    },
    {
      "term": "Formato",
      "text": "cómo debe entregarlo."
    }
  ],
  "dondeVive": "El prompt **vive en la caja de texto del chat** (lo que escribes antes de dar *Enter*). En sistemas más avanzados, también existe el **System Prompt**: instrucciones que el desarrollador coloca *antes* del mensaje del usuario y que este no ve. En ChatGPT lo encuentras en *'Custom instructions'*; en la API, es el campo `system` del request.",
  "comoOperar": "Lo **creas redactando texto plano** con estructura clara. Lo mejoras usando etiquetas visibles (Objetivo:, Contexto:, Tarea:, Formato:) y delimitadores como triples comillas invertidas (```) para separar datos de instrucciones. Si usas una API, puedes guardar prompts como plantillas en archivos `.md` y reutilizarlos con variables.",
  "receta": [
    "Empieza por el resultado que quieres, en una frase: *'quiero un correo que…'*.",
    "Pega solo lo que hace falta para lograrlo (la minuta de hoy, no todo el historial).",
    "Escribe la acción con un verbo: *resume*, *redacta*, *compara*. Evita *'ayúdame con'*.",
    "Ponle límites concretos: tono ('cercano'), largo ('máx 120 palabras') y qué evitar ('sin tecnicismos').",
    "Dile exactamente cómo lo quieres: una tabla, una lista de pasos, 3 viñetas…",
    "Si la primera respuesta no da, cambia **una sola cosa** y pídela otra vez ('hazlo más corto').",
    "Cuando un mensaje te funcione bien, guárdalo en un documento para copiarlo y pegarlo la próxima vez."
  ],
  "note": {
    "title": "Bonus: dale un rol",
    "body": [
      "Además de las cinco preguntas, decirle **quién es** afina el tono: *\"eres analista de cobranza, con tono firme pero cordial\"*. Una sola frase orienta toda la respuesta. Según Anthropic, asignar un rol **enfoca el comportamiento y el tono** del modelo (no garantiza que los datos sean correctos: eso siempre se verifica)."
    ]
  },
  "fuentes": [
    {
      "label": "Anthropic — Prompting best practices (dar un rol)",
      "url": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    }
  ],
  "ejemplo": {
    "escenario": {
      "sector": "ventas",
      "texto": "Un cliente está molesto: su pedido llegó 5 días tarde. Hay que responderle hoy."
    },
    "secciones": [
      {
        "etiqueta": "Antes",
        "tono": "mal",
        "turnos": [
          {
            "de": "tu",
            "texto": "Escríbeme un correo para un cliente molesto."
          },
          {
            "de": "claude",
            "texto": "Estimado cliente:\nLamentamos los inconvenientes ocasionados.\nQuedamos atentos.",
            "nota": "Genérico. Sin datos, sin disculpa concreta, sin solución."
          }
        ]
      },
      {
        "etiqueta": "Después",
        "tono": "bien",
        "turnos": [
          {
            "de": "tu",
            "texto": "Eres ejecutivo de atención, tono empático.\nCaso: pedido #4821, llegó 5 días tarde.\nRedacta un correo que reconozca el error, ofrezca 15% de descuento y proponga una llamada.\nMáximo 130 palabras.",
            "destacado": true,
            "concepto": "El concepto: rol + contexto + tarea + restricciones + formato."
          },
          {
            "de": "claude",
            "texto": "Asunto: Una disculpa y una solución\nEstimado Sr. Pérez:\nSu pedido #4821 llegó 5 días tarde. El error fue nuestro.\nPara compensarlo, 15% en su próxima compra.\n¿Le llamo mañana a las 11:00?"
          },
          {
            "de": "tu",
            "texto": "Hazlo más corto. Máximo 90 palabras.",
            "nota": "Cambias una sola cosa."
          },
          {
            "de": "claude",
            "texto": "Misma estructura, ahora en 88 palabras: disculpa, número de pedido, descuento y llamada."
          }
        ]
      }
    ],
    "resultado": "Correo listo para enviar en 2 ajustes. Cero página en blanco."
  }
};
