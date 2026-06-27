export default {
  "id": "tools-skills",
  "phase": "hacer",
  "title": "Tools y skills",
  "eyebrow": "Método repetible",
  "enUnaFrase": "Cuándo basta un prompt y cuándo necesitas método o capacidades extra.",
  "objective": "Distinguir cuándo basta un prompt y cuándo necesitas método o capacidades externas.",
  "duration": "4 min",
  "ideaPrincipal": "Elige el **escalón correcto** para cada tarea: no uses lo más sofisticado por moda.",
  "concepts": [
    "tool",
    "skill",
    "plantilla",
    "permisos",
    "verificación"
  ],
  "spec": {
    "nivel": "Con apoyo técnico",
    "cuando": "Cuando un prompt no basta y necesitas método o capacidades extra",
    "requiere": "Una plantilla o herramienta configurada"
  },
  "whatIs": [
    "Un chat de IA contesta con texto, pero muchas tareas piden algo más: buscar un dato, abrir un archivo o seguir siempre el mismo método.",
    "Hay una escalera útil, de lo simple a lo potente:"
  ],
  "points": [
    {
      "term": "Prompt",
      "text": "resuelve algo puntual, una sola vez."
    },
    {
      "term": "Plantilla",
      "text": "repite un formato probado para tareas recurrentes."
    },
    {
      "term": "Skill",
      "text": "una *receta guardada* que define cuándo usarla, qué pasos seguir y qué resultado esperar. Da **método y consistencia**, no capacidades nuevas."
    },
    {
      "term": "Tool",
      "text": "le da al modelo una *capacidad extra* para interactuar con el mundo real: leer archivos, buscar en internet, consultar un calendario o una base de datos."
    }
  ],
  "dondeVive": "Las *skills* viven como **archivos Markdown** (`.md`) en tu repositorio, base de conocimientos o directamente en las instrucciones del sistema. Las *tools* viven en **código** (funciones de Python, TypeScript o JSON Schema) que se registran ante la API del modelo mediante **function calling**. Se observan cuando el modelo decide invocar una capacidad declarada (ej. `buscar_en_crm(cliente='Acme')`).",
  "comoOperar": "Las *skills* las **creas escribiendo un instructivo paso a paso** en Markdown y pegándolo como contexto o system prompt. Las *tools* las **configuras declarando una función** con nombre, descripción y parámetros (en JSON Schema) y conectándola al código que ejecuta la acción real. Plataformas como GPTs (OpenAI), Claude Projects o LangChain simplifican el registro de tools.",
  "receta": [
    "Pregúntate qué tan seguido harás esto y si necesita datos que no tienes a la mano.",
    "Si es una sola vez, escribe un prompt normal; si lo repetirás igual, guarda ese prompt como plantilla.",
    "Si quieres que siempre siga el mismo método (mismos pasos y criterios), escribe esos pasos en un documento: esa es tu 'skill'.",
    "Si necesita abrir o consultar algo real (tu Drive, tu calendario), eso requiere conectar una herramienta, no solo texto.",
    "Al conectar una herramienta, dale el acceso mínimo (mejor solo leer) y revisa el resultado antes de usarlo."
  ],
  "ejemplo": {
    "escenario": {
      "sector": "operación",
      "texto": "Cada semana repites el mismo reporte desde cero."
    },
    "secciones": [
      {
        "etiqueta": "Antes",
        "tono": "mal",
        "turnos": [
          {
            "de": "tu",
            "texto": "Hazme el reporte semanal."
          },
          {
            "de": "claude",
            "texto": "¿Qué métricas? ¿Qué formato? ¿Para quién?",
            "nota": "Reexplicas todo cada semana."
          }
        ]
      },
      {
        "etiqueta": "Después",
        "tono": "bien",
        "turnos": [
          {
            "de": "tu",
            "texto": "Usa la plantilla de reporte semanal:\n[pegas la plantilla con sus secciones]\nRellénala con estos datos.",
            "destacado": true,
            "concepto": "Le das un método reusable (una skill/plantilla)."
          },
          {
            "de": "claude",
            "texto": "Reporte con el formato fijo de siempre, ya relleno."
          }
        ]
      }
    ],
    "resultado": "El mismo método, resultados consistentes, sin reexplicar.",
    "artefacto": {
      "tipo": "plantilla",
      "titulo": "Plantilla reusable: Reporte semanal",
      "lineas": [
        "## Resumen — 3 líneas",
        "## Métricas: ventas, leads, NPS",
        "## Riesgos y bloqueos",
        "## Plan de la próxima semana"
      ]
    }
  }
};
