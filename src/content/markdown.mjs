export default {
  "id": "markdown",
  "phase": "pedir",
  "title": "Markdown como contexto",
  "eyebrow": "Orden reutilizable",
  "enUnaFrase": "Ordenar un texto con signos simples para que la IA lo entienda mejor.",
  "objective": "Usar texto estructurado para que personas e IA entiendan lo mismo.",
  "duration": "3 min",
  "ideaPrincipal": "Un texto **ordenado** reduce la ambigüedad casi tanto como un buen prompt.",
  "concepts": [
    "encabezados",
    "listas y tablas",
    "plantilla",
    "SOP",
    "base de conocimiento"
  ],
  "spec": {
    "nivel": "Cualquiera",
    "cuando": "Cuando pegas textos largos o desordenados",
    "requiere": "Tu texto con encabezados y listas"
  },
  "whatIs": [
    "**Markdown** es la forma más simple de ordenar un texto con puros signos, sin herramientas complicadas: un *#* crea un título, un *guión* crea una lista, unas *barras* arman una tabla.",
    "Sirve a dos públicos: a las personas les facilita leer, y a la IA le ayuda a ver clarito *qué es título, qué es paso y qué es dato*.",
    "Su verdadero poder es la **reutilización**: conviertes una buena forma de trabajar en un documento que copias y pegas como contexto cada vez (briefs, procesos, checklists, plantillas)."
  ],
  "dondeVive": "Markdown **vive en cualquier archivo de texto plano** con extensión `.md` (o `.markdown`). Lo soportan nativamente herramientas como GitHub, Notion, Obsidian, VS Code, Slack y la mayoría de chats de IA. También puedes escribirlo directamente en la caja de texto de ChatGPT o Claude: los signos `#`, `-` y `|` ya organizan tu mensaje.",
  "comoOperar": "Lo **creas con cualquier editor de texto** (Bloc de Notas, VS Code, Notion, Obsidian). Usa `#` para títulos (más `#` = más pequeño), `-` para listas, `**texto**` para negritas, `|` para tablas y tres comillas invertidas para bloques de código. Una vez que dominas estos 5 signos, puedes documentar cualquier proceso en un formato que tanto personas como IA leen sin ambigüedad.",
  "receta": [
    "Escribe el título de cada parte con un # adelante: '# Objetivo', '# Pasos', '# Salida esperada'.",
    "Bajo cada título, una idea por renglón; para listas, empieza cada renglon con un guión (-).",
    "Para comparar opciones usa una tabla; para algo que se copiará tal cual (un prompt), enmárcalo entre tres comillas invertidas (```).",
    "No mezcles: arriba lo que la IA debe hacer, abajo los datos con los que trabaja.",
    "Guarda el archivo (.md o una nota) y reúsalo: la próxima vez solo lo pegas."
  ],
  "ejemplo": {
    "tipo": "documento",
    "escenario": {
      "sector": "creación de contenido",
      "texto": "Tienes notas sueltas y quieres que la IA las entienda bien."
    },
    "secciones": [
      {
        "etiqueta": "Antes",
        "tono": "mal",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "ordename esto: objetivo subir ventas pendientes llamar proveedor y diseñar promo fechas junio…"
          }
        ],
        "nota": "Sin estructura, la IA adivina qué es título y qué es dato."
      },
      {
        "etiqueta": "Después",
        "tono": "bien",
        "bloques": [
          {
            "tipo": "codigo",
            "lenguaje": "Markdown",
            "contenido": "## Objetivo\nSubir ventas en junio\n\n## Pendientes\n- Llamar al proveedor\n- Diseñar la promo\n\n## Fecha límite\n30 de junio"
          }
        ],
        "concepto": "Los ## marcan títulos y los - marcan listas: jerarquía clara."
      }
    ],
    "resultado": "La IA lee tu estructura igual que tú: títulos, listas y prioridades."
  }
};
