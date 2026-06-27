export default {
  "id": "tecnicas",
  "phase": "pedir",
  "title": "Técnicas para producir más",
  "eyebrow": "Trucos del oficio",
  "enUnaFrase": "Combinar prompts y dividir el trabajo para lograr más, más rápido.",
  "objective": "Combinar prompts y dividir el trabajo para obtener mejores resultados, más rápido.",
  "duration": "5 min",
  "ideaPrincipal": "No exijas todo perfecto de un tiro: **trabaja por etapas** y la IA rinde mucho más.",
  "concepts": [
    "encadenar prompts",
    "few-shot (ejemplos)",
    "iterar y refinar",
    "descomponer",
    "pensar paso a paso"
  ],
  "spec": {
    "nivel": "Cualquiera",
    "cuando": "Cuando una sola petición se queda corta para la tarea",
    "requiere": "Dividir el trabajo en pasos"
  },
  "whatIs": [
    "Saber escribir un buen prompt es la base. El siguiente salto de productividad viene de *combinar* varios prompts en lugar de pedir todo de golpe. Cuatro técnicas que más rinden:"
  ],
  "points": [
    {
      "term": "Encadenar prompts",
      "text": "partir el trabajo en pasos donde la salida de uno alimenta al siguiente. Similar a una cadena de montaje."
    },
    {
      "term": "Dar ejemplos (few-shot)",
      "text": "mostrar 1-3 ejemplos del resultado deseado para fijar el formato y el tono, en lugar de explicarlos con palabras."
    },
    {
      "term": "Iterar y refinar",
      "text": "tratar la primera respuesta como borrador; pedir cambios puntuales como 'más corto', 'critícate' o 'piensa paso a paso'."
    },
    {
      "term": "Descomponer y reutilizar",
      "text": "dividir tareas grandes en subtareas manejables y guardar lo que funcione como plantilla para la próxima vez."
    }
  ],
  "dondeVive": "Estas técnicas **viven en la secuencia de mensajes** de tu sesión de chat (el historial que se acumula turno a turno). En implementaciones avanzadas, viven en el código de un **orquestador** (un script que encadena llamadas a la API automáticamente). Se observan como una conversación ordenada donde cada respuesta alimenta al siguiente prompt.",
  "comoOperar": "Lo **operas dividiendo tu tarea** en pasos y mandándolos uno a uno: primero *'extrae los temas clave'*, revisas, y luego *'con esos temas, redacta el correo'*. Para *few-shot*, pegas 1-3 ejemplos reales antes de la instrucción. Para *chain-of-thought*, agregas *'razona paso a paso antes de responder'*. En código, lo automatizas encadenando llamadas a la API con la salida de una como entrada de la siguiente.",
  "receta": [
    "Si la tarea es grande, escríbela como 2-4 pasos y manda un mensaje por paso (primero 'saca los puntos clave', luego 'ahora redacta el correo con esos puntos').",
    "Si quieres un formato específico, pégale primero un ejemplo ya hecho y di *'sigue este mismo estilo'*.",
    "En tareas que requieren pensar (analizar, decidir), agrega *'explica tu razonamiento paso a paso antes de darme la respuesta'*.",
    "Toma su primera respuesta como borrador: pide un cambio puntual ('más corto', 'tono más directo') en vez de reescribir todo.",
    "Cuando un mensaje te funcione bien, guárdalo en un documento para copiarlo y pegarlo la próxima vez."
  ],
  "ejemplo": {
    "escenario": {
      "sector": "creación de producto",
      "texto": "Vas a lanzar un producto y la tarea completa abruma a la IA."
    },
    "secciones": [
      {
        "etiqueta": "Antes",
        "tono": "mal",
        "turnos": [
          {
            "de": "tu",
            "texto": "Planéame todo el lanzamiento del producto."
          },
          {
            "de": "claude",
            "texto": "Aquí tienes un plan general con marketing, precio, fechas y redes…",
            "nota": "Una sola petición gigante → respuesta superficial."
          }
        ]
      },
      {
        "etiqueta": "Después",
        "tono": "bien",
        "turnos": [
          {
            "de": "tu",
            "texto": "Vamos por partes.\nPaso 1: lista los públicos objetivo.\nLuego seguimos con el resto.",
            "destacado": true,
            "concepto": "Descompones y encadenas pasos."
          },
          {
            "de": "claude",
            "texto": "Paso 1 — Públicos objetivo:\n1. Pymes\n2. Freelancers\n3. Equipos de RR.HH."
          },
          {
            "de": "tu",
            "texto": "Bien. Paso 2: un mensaje clave para cada público."
          },
          {
            "de": "claude",
            "texto": "Pymes: ahorra horas de administración…\n(uno por público)"
          }
        ]
      }
    ],
    "resultado": "Cada paso sale afinado y se apoya en el anterior."
  }
};
