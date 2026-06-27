export default {
  "id": "conocimiento-memoria",
  "phase": "hacer",
  "title": "Darle tu conocimiento y memoria",
  "enUnaFrase": "Cómo lograr que la IA responda con TUS documentos y recuerde entre sesiones, sin reentrenar nada.",
  "ideaPrincipal": "Para que la IA responda con *tus* manuales y contratos **no se reentrena el modelo**: se le da una **biblioteca que consulta** al momento (eso es **RAG**). La **memoria** es lo que recuerda de ti entre conversaciones.",
  "spec": {
    "nivel": "Equipo de desarrollo",
    "cuando": "Cuando debe responder con tus propios documentos",
    "requiere": "Tus documentos + una base de conocimiento"
  },
  "whatIs": [
    "**RAG** (del inglés *recuperación + generación*) significa: cuando preguntas algo, el sistema **busca primero** los fragmentos relevantes en tu base de documentos y los **añade al prompt** antes de que la IA responda. Así contesta con tu información, citándola, sin cambiar el modelo.",
    "La diferencia con **pegar el documento en el prompt** es de escala: si tu base cabe en unas ~500 páginas, puedes pegarla entera; más allá de eso se vuelve impráctico y caro, y necesitas RAG para buscar solo lo pertinente.",
    "La **memoria** es distinta: es lo que el asistente recuerda de ti, de corto plazo (dentro de una conversación) o persistente (entre sesiones), como tus preferencias o datos que pediste guardar."
  ],
  "points": [
    {
      "term": "RAG",
      "text": "Recupera fragmentos de tus documentos y responde con ellos, idealmente con citas. El modelo no se modifica."
    },
    {
      "term": "RAG vs. fine-tuning",
      "text": "RAG es para *conocimiento* (actualizable, propietario). El fine-tuning es para *comportamiento*: tono, formato o estilo consistentes."
    },
    {
      "term": "Memoria",
      "text": "Corto plazo = la conversación actual. Persistente = recuerda entre sesiones; revisa qué guarda y poder borrarlo."
    },
    {
      "term": "Límite clave",
      "text": "Si el dato no está en lo recuperado, la IA no lo sabe, y puede alucinar. Por eso conviene pedir citas."
    }
  ],
  "receta": [
    "Reúne tus documentos fuente en un solo lugar (carpeta, repositorio).",
    "Decide: si es poco material (~500 páginas o menos), quizá baste **pegarlo en el prompt**; si es más, necesitas **RAG**.",
    "Monta la base de conocimiento con una herramienta que recupere e **incluya citas** de la fuente.",
    "Instruye al asistente a **responder solo con lo recuperado** y a decir *\"no lo sé\"* si no encuentra el dato.",
    "Si lo que necesitas es cambiar *tono o formato* (no conocimiento), considera fine-tuning en vez de RAG.",
    "Revisa periódicamente las citas: confirma que la respuesta de verdad sale del documento."
  ],
  "concepts": [
    "RAG",
    "base de conocimiento",
    "fine-tuning",
    "memoria",
    "citas",
    "alucinación"
  ],
  "note": {
    "title": "RAG no elimina las alucinaciones",
    "body": [
      "Anclar las respuestas en tus documentos las reduce mucho, pero **no las elimina**. Valida siempre la información crítica antes de actuar sobre ella."
    ]
  },
  "fuentes": [
    {
      "label": "Lewis et al. (2020) — Paper original de RAG",
      "url": "https://arxiv.org/abs/2005.11401"
    },
    {
      "label": "Anthropic — Contextual Retrieval (RAG y límite de ~500 págs.)",
      "url": "https://www.anthropic.com/news/contextual-retrieval"
    },
    {
      "label": "OpenAI — RAG vs. fine-tuning",
      "url": "https://developers.openai.com/api/docs/guides/optimizing-llm-accuracy"
    },
    {
      "label": "Anthropic — Reducir alucinaciones",
      "url": "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations"
    }
  ],
  "ejemplo": {
    "escenario": {
      "sector": "recursos humanos",
      "texto": "Un empleado pregunta por una política interna de 300 páginas."
    },
    "secciones": [
      {
        "etiqueta": "Antes",
        "tono": "mal",
        "turnos": [
          {
            "de": "tu",
            "texto": "¿Cuántos días de paternidad tengo?"
          },
          {
            "de": "claude",
            "texto": "Suele ser de 5 días, aunque varía según la empresa…",
            "nota": "Responde con lo general, no con TU política."
          }
        ]
      },
      {
        "etiqueta": "Después",
        "tono": "bien",
        "turnos": [
          {
            "de": "tu",
            "texto": "(con la base de conocimiento de RR.HH. conectada)\n¿Cuántos días de paternidad tengo? Cita el documento.",
            "destacado": true,
            "concepto": "RAG: busca en tus documentos y cita la fuente."
          },
          {
            "de": "claude",
            "texto": "Tu política otorga 10 días hábiles.\nFuente: Manual de RR.HH., sección 4.2."
          }
        ]
      }
    ],
    "resultado": "Responde con tu documento real, con cita verificable."
  }
};
