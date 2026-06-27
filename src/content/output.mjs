export default {
  "id": "output",
  "phase": "pedir",
  "title": "Formatos de salida",
  "enUnaFrase": "Cómo decirle en qué forma entregarte la respuesta: tabla, lista, longitud y, cuando conecta con sistemas, JSON.",
  "ideaPrincipal": "No basta con *qué* pides; también importa **en qué forma lo entrega**. Pedir el formato exacto —una tabla, una lista, cierto largo— te da una respuesta lista para usar, en vez de un bloque de texto que toca reordenar.",
  "spec": {
    "nivel": "Cualquiera",
    "cuando": "Cuando la respuesta llega en un formato que toca reordenar",
    "requiere": "Una frase que describa la forma deseada"
  },
  "whatIs": [
    "El **formato de salida** es la forma en que quieres que la IA te entregue la respuesta. Si no la especificas, la elige ella, y casi nunca coincide con lo que necesitabas.",
    "Pedirlo es tan simple como describirlo: *\"en una tabla\"*, *\"como lista de pasos\"*, *\"en máximo 5 viñetas\"*, *\"en tono formal\"*.",
    "Para casos donde la respuesta va a **alimentar otro programa** (una hoja de cálculo, un sistema), existe un formato especial llamado **JSON** (lo explicamos abajo, sin tecnicismos)."
  ],
  "points": [
    {
      "term": "Estructura",
      "text": "Tabla, lista numerada, viñetas o párrafos. Di cuál quieres y con qué columnas o secciones."
    },
    {
      "term": "Longitud y tono",
      "text": "*\"Máximo 100 palabras\"*, *\"tono formal\"*, *\"explícalo como a alguien sin experiencia técnica\"*."
    },
    {
      "term": "JSON (para conectar con sistemas)",
      "text": "Un formato de texto muy ordenado que los programas leen sin equivocarse. Solo lo necesitas cuando otra app va a leer la respuesta (ver la nota)."
    }
  ],
  "receta": [
    "Antes de enviar, decide la **forma** que quieres: ¿tabla, lista o párrafo?",
    "Si es tabla o lista, **nombra las columnas o secciones**: *\"columnas: cliente, monto, fecha\"*.",
    "Pon **límites de longitud y tono**: *\"máx 100 palabras\"*, *\"tono formal\"*.",
    "Si la respuesta va a **otro programa** (hoja de cálculo, app), pide **JSON** y nombra cada campo.",
    "Si el formato no salió bien, repítelo más explícito; no hace falta reescribir toda la instrucción."
  ],
  "concepts": [
    "formato de salida",
    "tabla / lista",
    "longitud y tono",
    "JSON",
    "salida estructurada"
  ],
  "note": {
    "title": "¿Qué es JSON, en cristiano?",
    "body": [
      "**JSON** es simplemente una forma de escribir datos muy ordenada, con **etiquetas y valores**, para que un *programa* (no una persona) la lea sin confundirse. Piensa en las casillas de un formulario: cada dato tiene su etiqueta y siempre va en el mismo lugar.",
      "Se ve más o menos así: *{ \"nombre\": \"Ana\", \"puesto\": \"gerente\", \"antigüedad\": 3 }* — puras etiquetas y sus valores. Un humano lee un párrafo; un sistema necesita esta forma para no equivocarse.",
      "**No tienes que escribirlo tú.** Solo le pides a la IA que responda *\"en formato JSON\"* cuando otro programa vaya a leer la respuesta. Para el día a día —correos, resúmenes, tablas para ti— casi nunca lo necesitas."
    ]
  },
  "fuentes": [
    {
      "label": "OpenAI — Structured Outputs (qué es y para qué)",
      "url": "https://developers.openai.com/api/docs/guides/structured-outputs"
    },
    {
      "label": "Google — Estrategias de prompting (formato de respuesta)",
      "url": "https://ai.google.dev/gemini-api/docs/prompting-strategies"
    }
  ],
  "ejemplo": {
    "tipo": "documento",
    "escenario": {
      "sector": "creación de contenido",
      "texto": "Necesitas ideas de campaña listas para tu presentación."
    },
    "secciones": [
      {
        "etiqueta": "Antes",
        "tono": "mal",
        "bloques": [
          {
            "tipo": "texto",
            "contenido": "Podrías hacer un sorteo, también email marketing, y quizá unos videos cortos…"
          }
        ],
        "nota": "Párrafo corrido. Toca reordenarlo a mano."
      },
      {
        "etiqueta": "Después",
        "tono": "bien",
        "bloques": [
          {
            "tipo": "tabla",
            "headers": [
              "Nombre",
              "Mensaje",
              "Canal"
            ],
            "filas": [
              [
                "Vuelta a clases",
                "Ahorra en lo esencial",
                "Instagram"
              ],
              [
                "Combo familiar",
                "Más por menos",
                "Facebook"
              ],
              [
                "Reseñas reales",
                "Lo que dicen los clientes",
                "Email"
              ]
            ]
          },
          {
            "tipo": "json",
            "lenguaje": "JSON (para un sistema)",
            "contenido": "[\n  { \"nombre\": \"Vuelta a clases\", \"mensaje\": \"Ahorra en lo esencial\", \"canal\": \"Instagram\" }\n]"
          }
        ],
        "concepto": "Pides la forma exacta: una tabla para ti, JSON para otro sistema."
      }
    ],
    "resultado": "La tabla va directo a tu slide; el JSON, directo a un sistema."
  }
};
