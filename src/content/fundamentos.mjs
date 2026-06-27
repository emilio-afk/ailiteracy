export default {
  "id": "fundamentos",
  "phase": "entender",
  "title": "Fundamentos de IA",
  "eyebrow": "Lenguaje común",
  "enUnaFrase": "Qué es realmente la IA, qué puede hacer y dónde se equivoca.",
  "objective": "Entender qué hace realmente un modelo, sus capacidades y sus límites.",
  "duration": "4 min",
  "ideaPrincipal": "La IA no *sabe*: **predice** la siguiente palabra más probable. Por eso puede sonar muy segura y aun así equivocarse.",
  "concepts": [
    "LLM",
    "modelo vs aplicación",
    "chatbot vs agente",
    "alucinación",
    "verificación"
  ],
  "spec": {
    "nivel": "Cualquiera",
    "cuando": "Antes de usar cualquier IA, para saber qué esperar",
    "requiere": "Nada: solo leerlo"
  },
  "whatIs": [
    "La **IA generativa** produce contenido nuevo —texto, resúmenes, comparaciones, planes— a partir de tus instrucciones y de la información que le proporcionas.",
    "Por dentro, un **modelo de lenguaje (LLM)** funciona *como un autocompletado extremadamente potente*: predice token por token (fragmentos de palabras) la secuencia más probable, basándose en los patrones estadísticos de su entrenamiento y en lo que tú le diste. No consulta una base de verdades ni busca en internet por sí solo; genera lo que suena coherente.",
    "Cuando le falta un dato, rellena el hueco con una suposición plausible pero sin fundamento real. A eso se le llama **alucinación**, y es la razón por la que siempre conviene verificar lo que entrega —especialmente cifras, nombres y fechas."
  ],
  "points": [
    {
      "term": "Modelo",
      "text": "la inteligencia base, el motor de razonamiento (ej. GPT-4o, Claude Sonnet, Gemini Pro)."
    },
    {
      "term": "Aplicación",
      "text": "el producto que empaqueta al modelo para el usuario final (ChatGPT, Claude, Gemini, un asistente interno de tu empresa)."
    },
    {
      "term": "Chatbot",
      "text": "una interfaz de conversación donde tú escribes y la IA responde, turno a turno."
    },
    {
      "term": "Agente",
      "text": "un sistema que además de conversar, planea pasos, usa herramientas externas y verifica sus propios resultados."
    }
  ],
  "dondeVive": "El modelo **vive en servidores con GPUs especializadas** del proveedor (OpenAI, Anthropic, Google). No reside en tu computadora ni en tu navegador. Lo que tú ves es la **aplicación** —ChatGPT, Claude, Gemini— que se conecta a esos servidores por internet. Si usas la API, lo que llega es un *endpoint* HTTPS al que tu código envía peticiones.",
  "comoOperar": "Lo **operas enviando mensajes en lenguaje natural** desde la aplicación o la API. Puedes elegir qué modelo usar según la tarea (ej. un modelo *rápido* como Gemini Flash para resumir, uno *potente* como Claude Opus para razonar). En la API también puedes ajustar parámetros como la **temperatura** (0 = determinista, 1 = creativo) y **top-p** (diversidad de vocabulario).",
  "receta": [
    "Antes de escribir, pregúntate: ¿le estoy dando yo la información que necesita, o espero que la sepa?",
    "Si depende de un dato que no está en tu mensaje (una cifra, algo reciente, un documento), pégaselo tú; si no lo tienes, no se lo preguntes esperando la verdad.",
    "Pídele cosas que pueda hacer con lo que le diste: resumir, comparar, redactar, ordenar. Evita pedirle datos que no le diste.",
    "Lee su respuesta como el borrador de un asistente nuevo: revisa números, nombres y fechas antes de usarla.",
    "En tu instrucción agrega esta línea: 'si te falta un dato, escríbelo como [FALTA] en vez de inventarlo'."
  ],
  "ejemplo": {
    "escenario": {
      "sector": "creación de contenido",
      "texto": "Escribes un artículo y le pides a la IA un dato para sustentarlo."
    },
    "secciones": [
      {
        "etiqueta": "Antes",
        "tono": "mal",
        "turnos": [
          {
            "de": "tu",
            "texto": "¿En qué año se fundó nuestra industria en México?"
          },
          {
            "de": "claude",
            "texto": "La industria se fundó en 1947, en la Ciudad de México.",
            "nota": "Suena segurísimo… pero el dato puede ser inventado."
          }
        ]
      },
      {
        "etiqueta": "Después",
        "tono": "bien",
        "turnos": [
          {
            "de": "tu",
            "texto": "¿En qué año se fundó?\nSi no estás seguro, dilo.\nCita la fuente.",
            "destacado": true,
            "concepto": "Le das permiso de dudar y le pides fuente."
          },
          {
            "de": "claude",
            "texto": "No tengo un dato confiable de ese año.\nTe conviene verificarlo en el sitio del gremio."
          }
        ]
      }
    ],
    "resultado": "Evitas publicar un dato falso. La IA *predice*; tú *verificas*."
  }
};
