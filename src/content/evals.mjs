export default {
  "id": "evals",
  "phase": "construir",
  "title": "Evaluar si funciona",
  "enUnaFrase": "Cómo medir si tu IA o agente realmente sirve, en vez de confiar en que se ve bien.",
  "ideaPrincipal": "Un agente sin medición es **fe, no ingeniería**. Un **eval** es un conjunto de casos de prueba con su respuesta esperada que corres en **cada cambio** para saber si mejoraste o empeoraste.",
  "spec": {
    "nivel": "Con apoyo técnico",
    "cuando": "Antes de confiar en un agente o de cambiar su prompt",
    "requiere": "Casos reales con su respuesta correcta"
  },
  "whatIs": [
    "Un **eval** (evaluación) es una prueba para un sistema de IA: le das una **entrada**, comparas su **salida** contra un criterio y mides si acertó. En su forma más común, cada caso tiene una entrada y una respuesta ideal (la *correcta*).",
    "Importa porque la IA es **variable**: el mismo prompt puede dar respuestas distintas, así que probar *a ojo* no escala ni es confiable —OpenAI lo llama explícitamente un anti-patrón—. Sin evals, los errores se descubren en producción.",
    "Se mide más de una cosa: si la tarea se **resolvió**, si respetó una **restricción** y si el **tono** fue adecuado. La invención de datos se detecta viendo si la respuesta está **fundamentada** en la fuente."
  ],
  "points": [
    {
      "term": "Casos dorados",
      "text": "Junta entradas reales con su respuesta correcta. Empieza con 15 a 20 casos representativos."
    },
    {
      "term": "Correr en cada cambio",
      "text": "Antes de dar por bueno un cambio de prompt, pásalo por el set y compara el porcentaje de aciertos."
    },
    {
      "term": "Revisión humana",
      "text": "Lee una muestra de las respuestas y sus calificaciones: es la única forma de saber si tu propia medición funciona."
    },
    {
      "term": "LLM como juez",
      "text": "Para criterios difíciles de medir con reglas, otro modelo puede calificar; útil, pero verifícalo con humanos."
    }
  ],
  "receta": [
    "Junta de 15 a 20 **casos reales** con su respuesta correcta o criterio de éxito.",
    "Define qué cuenta como acierto: ¿resolvió la tarea?, ¿respetó las restricciones?, ¿no inventó datos?",
    "Corre el set **antes y después** de cada cambio y compara resultados.",
    "**Lee una muestra** de respuestas y calificaciones para confirmar que la medición tiene sentido.",
    "Para criterios subjetivos, usa otro modelo como juez, pero **valida su criterio con humanos**.",
    "Cuando aparezca un error nuevo, **conviértelo en un caso** y agrégalo a la suite."
  ],
  "concepts": [
    "eval",
    "casos dorados",
    "fundamentación",
    "LLM como juez",
    "revisión humana"
  ],
  "note": {
    "title": "Empieza pequeño",
    "body": [
      "No necesitas una plataforma sofisticada para arrancar: una **hoja de cálculo** con entrada, respuesta esperada y una marca de acierto ya es un eval válido."
    ]
  },
  "fuentes": [
    {
      "label": "Anthropic — Demystifying evals for AI agents",
      "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
    },
    {
      "label": "OpenAI — Evaluation best practices",
      "url": "https://developers.openai.com/api/docs/guides/evaluation-best-practices"
    },
    {
      "label": "Anthropic — Herramienta de evals (Consola)",
      "url": "https://platform.claude.com/docs/en/docs/test-and-evaluate/eval-tool"
    }
  ],
  "ejemplo": {
    "tipo": "resultados",
    "escenario": {
      "sector": "creación de producto",
      "texto": "Cambiaste el prompt de tu asistente y quieres saber si mejoró."
    },
    "marcador": {
      "antes": "14/20 aciertos",
      "despues": "18/20 aciertos"
    },
    "tabla": {
      "headers": [
        "Caso (pregunta del cliente)",
        "Respuesta esperada",
        "Antes",
        "Después"
      ],
      "filas": [
        [
          "¿Hacen envíos a Tijuana?",
          "Sí, 2-3 días",
          "ok",
          "ok"
        ],
        [
          "¿Puedo pagar a meses?",
          "Sí, 3 y 6 meses",
          "fail",
          "ok"
        ],
        [
          "¿Tienen tienda física?",
          "No, solo en línea",
          "ok",
          "ok"
        ],
        [
          "¿Cuál es la garantía?",
          "12 meses",
          "fail",
          "ok"
        ]
      ]
    },
    "resultado": "Sabes con números que el cambio ayudó: subió de 14 a 18 de 20."
  }
};
