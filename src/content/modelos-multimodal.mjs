export default {
  "id": "modelos-multimodal",
  "phase": "entender",
  "title": "Modelos y multimodalidad",
  "enUnaFrase": "No hay una sola IA: hay modelos distintos, y muchos ya entienden imágenes, audio y video.",
  "ideaPrincipal": "No existe *una* IA: hay **modelos rápidos** y **modelos que razonan**, y los modernos ya no solo leen texto — también **ven imágenes, oyen audio y analizan video**.",
  "spec": {
    "nivel": "Cualquiera",
    "cuando": "Al elegir con qué modelo trabajar una tarea",
    "requiere": "Acceso al selector de modelo"
  },
  "whatIs": [
    "Cuando hablas de *la IA*, en realidad eliges entre **varios modelos** de un mismo proveedor. Se diferencian sobre todo en dos cosas: **qué tan rápido responden** y **qué tan a fondo piensan**.",
    "Un **modelo rápido** contesta casi al instante y cuesta menos: ideal para tareas claras y repetitivas. Un **modelo de razonamiento** se toma un momento para *pensar* antes de responder —descompone el problema y considera opciones—, lo que lo hace mejor en problemas complejos, pero más lento y más caro.",
    "Además, los modelos modernos son **multimodales**: no solo procesan texto. Pueden recibir una **foto**, un **audio** o incluso **video** y trabajar con eso."
  ],
  "points": [
    {
      "term": "Rápido vs. razonador",
      "text": "El rápido es para volumen y tareas definidas; el razonador para problemas difíciles o ambiguos. No uses el más pesado para todo."
    },
    {
      "term": "Multimodal",
      "text": "Subir la foto de una factura, dictar una nota de voz o pedir que analice una captura de pantalla ya es posible en muchos modelos."
    },
    {
      "term": "Fecha de corte de conocimiento",
      "text": "Cada modelo *congela* lo que sabe en una fecha. No conoce nada posterior a su corte, salvo que tenga búsqueda en vivo (ver Palancas del modelo)."
    }
  ],
  "receta": [
    "Antes de empezar, define si tu tarea es **simple y de volumen** (elige modelo rápido) o **compleja y ambigua** (elige razonador).",
    "Si tu información es una imagen, un audio o un video, confirma que el modelo elegido **acepte ese tipo de entrada**.",
    "Si la tarea depende de datos recientes, recuerda la **fecha de corte**: necesitarás búsqueda web (ver Palancas del modelo).",
    "Empieza con el modelo más barato que pueda hacer el trabajo; sube de nivel solo si la calidad no alcanza."
  ],
  "concepts": [
    "modelo rápido vs. razonador",
    "multimodalidad",
    "fecha de corte",
    "costo vs. calidad"
  ],
  "note": {
    "title": "Ojo con audio y video",
    "body": [
      "No todos los modelos aceptan todas las modalidades. Hoy, por ejemplo, los modelos de Claude reciben **texto e imagen**; los de Google (Gemini) además procesan **audio y video** de entrada. Verifica las capacidades del modelo que uses."
    ]
  },
  "fuentes": [
    {
      "label": "OpenAI — Reasoning models (rápido vs. razonador)",
      "url": "https://developers.openai.com/api/docs/guides/reasoning"
    },
    {
      "label": "Google — Gemini: entradas de texto, imagen, audio y video",
      "url": "https://ai.google.dev/gemini-api/docs/models"
    },
    {
      "label": "Anthropic — Modelos y fecha de corte de conocimiento",
      "url": "https://platform.claude.com/docs/en/docs/about-claude/models/overview"
    }
  ],
  "ejemplo": {
    "escenario": {
      "sector": "operación",
      "texto": "Llega un recibo en foto y hay que registrarlo en tu hoja de gastos."
    },
    "secciones": [
      {
        "etiqueta": "Antes",
        "tono": "mal",
        "turnos": [
          {
            "de": "tu",
            "texto": "Apunta este gasto."
          },
          {
            "de": "claude",
            "texto": "¿Cuál es el monto y el proveedor?",
            "nota": "Sin la imagen, no puede ayudar."
          }
        ]
      },
      {
        "etiqueta": "Después",
        "tono": "bien",
        "turnos": [
          {
            "de": "tu",
            "texto": "[adjuntas la foto del recibo]\nExtrae fecha, proveedor y monto en una tabla.",
            "destacado": true,
            "concepto": "Usas un modelo multimodal: lee la imagen."
          },
          {
            "de": "claude",
            "texto": "| Fecha | Proveedor | Monto |\n| 12 jun | Office Depot | $1,240 |"
          }
        ]
      }
    ],
    "resultado": "El dato pasa de una foto a tu hoja, sin teclear."
  }
};
