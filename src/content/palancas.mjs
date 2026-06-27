export default {
  "id": "palancas",
  "phase": "hacer",
  "title": "Palancas del modelo",
  "enUnaFrase": "Más allá del prompt hay perillas: cuánta creatividad, si puede buscar en la web y si puede ejecutar código.",
  "ideaPrincipal": "El prompt no es lo único que controlas. Hay **palancas**: la **temperatura** (preciso vs. creativo), la **búsqueda web** (para superar su fecha de corte) y la **ejecución de código** (para analizar tus archivos de verdad).",
  "spec": {
    "nivel": "Con apoyo técnico",
    "cuando": "Cuando necesitas precisión, datos recientes o analizar archivos",
    "requiere": "Activar la opción en la plataforma"
  },
  "whatIs": [
    "La **temperatura** regula cuánta variación permite el modelo al responder. Baja = respuestas más conservadoras y predecibles (mejor para datos y cifras). Alta = más creatividad y variedad (mejor para lluvia de ideas).",
    "La **búsqueda web** le da acceso a información actual de internet, con citas de las fuentes. Resuelve el problema de la fecha de corte: úsala cuando la respuesta dependa de algo reciente o cambiante (precios, noticias, tasas).",
    "La **ejecución de código** permite que la IA escriba y corra código en un entorno aislado para **analizar archivos que subes** (Excel, CSV), hacer cálculos y generar gráficas."
  ],
  "points": [
    {
      "term": "Temperatura",
      "text": "Para cifras exactas, contratos o clasificación, baja la temperatura. Para nombres de campaña o ideas, súbela."
    },
    {
      "term": "Búsqueda web",
      "text": "Actívala cuando preguntes por algo posterior a la fecha de corte del modelo. Trae citas verificables."
    },
    {
      "term": "Ejecutar código",
      "text": "Sube tu CSV de ventas y pide un análisis o una gráfica: la IA procesa el archivo, no lo adivina."
    }
  ],
  "receta": [
    "Pregúntate: ¿la tarea necesita **precisión** (baja temperatura) o **creatividad** (alta)?",
    "Si la respuesta depende de información **reciente**, activa **búsqueda web** y pide que cite fuentes.",
    "Si tienes un **archivo de datos**, súbelo y activa **ejecución de código** en vez de pegar los números en el prompt.",
    "Verifica: en datos, revisa que las cifras coincidan con tu fuente; en web, abre las citas."
  ],
  "concepts": [
    "temperatura",
    "búsqueda web",
    "ejecución de código",
    "análisis de datos"
  ],
  "note": {
    "title": "La temperatura no está en todos lados",
    "body": [
      "La temperatura es un concepto general disponible en muchas plataformas, pero **algunos modelos recientes la deshabilitan** (por ejemplo, los Claude más nuevos ya no la aceptan y el comportamiento se guía solo con el prompt). Si no ves la opción, controla el estilo desde tus instrucciones."
    ]
  },
  "fuentes": [
    {
      "label": "Anthropic — Glosario (temperatura)",
      "url": "https://docs.anthropic.com/en/docs/about-claude/glossary"
    },
    {
      "label": "Anthropic — Web search tool",
      "url": "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/web-search-tool"
    },
    {
      "label": "Anthropic — Code execution tool",
      "url": "https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/code-execution-tool"
    },
    {
      "label": "OpenAI — Code Interpreter",
      "url": "https://developers.openai.com/api/docs/guides/tools-code-interpreter"
    }
  ],
  "ejemplo": {
    "escenario": {
      "sector": "operación",
      "texto": "Tienes ventas en un CSV y necesitas cifras exactas y una gráfica."
    },
    "secciones": [
      {
        "etiqueta": "Antes",
        "tono": "mal",
        "turnos": [
          {
            "de": "tu",
            "texto": "¿Cuánto vendimos por mes?\n[escribes los números a mano en el chat]"
          },
          {
            "de": "claude",
            "texto": "Calculo aproximado… (redondea o se equivoca en algún mes)",
            "nota": "Temperatura alta + datos tecleados = riesgo de error."
          }
        ]
      },
      {
        "etiqueta": "Después",
        "tono": "bien",
        "turnos": [
          {
            "de": "tu",
            "texto": "[subes ventas.csv]\nCon temperatura baja, suma por mes y grafícalo.",
            "destacado": true,
            "concepto": "Bajas la temperatura y activas ejecución de código."
          },
          {
            "de": "claude",
            "texto": "[corre código sobre el archivo]\nTotales exactos por mes + gráfica de barras."
          }
        ]
      }
    ],
    "resultado": "Cifras reproducibles desde tu archivo, no inventadas.",
    "artefacto": {
      "tipo": "grafica",
      "titulo": "Ventas por mes (gráfica generada por la IA desde tu CSV)",
      "barras": [
        {
          "label": "Ene",
          "valor": 42
        },
        {
          "label": "Feb",
          "valor": 55
        },
        {
          "label": "Mar",
          "valor": 48
        },
        {
          "label": "Abr",
          "valor": 70
        },
        {
          "label": "May",
          "valor": 63
        },
        {
          "label": "Jun",
          "valor": 88
        }
      ]
    }
  }
};
