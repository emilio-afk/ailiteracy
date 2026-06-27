export default {
  "id": "seguridad",
  "phase": "construir",
  "title": "Seguridad: inyección de prompt y guardrails",
  "enUnaFrase": "Un agente con acceso a datos reales es atacable; cómo reconocer el riesgo y ponerle límites.",
  "ideaPrincipal": "Un agente que lee correos, webs o documentos puede ser **secuestrado** por instrucciones maliciosas escondidas en ese contenido. Se llama **inyección de prompt** y es el **riesgo #1** en aplicaciones de IA según OWASP.",
  "spec": {
    "nivel": "Con apoyo técnico",
    "cuando": "Cuando un agente accede a datos o acciones reales",
    "requiere": "Revisión de permisos y aprobaciones"
  },
  "whatIs": [
    "La **inyección de prompt** ocurre cuando un texto que la IA procesa contiene instrucciones que **alteran su comportamiento**. La *directa* viene del propio usuario; la **indirecta** —la más peligrosa para agentes— viene de **fuentes externas** (un correo, un PDF, una página web) que el agente lee y obedece sin saber que es una trampa.",
    "OWASP la cataloga como **LLM01:2025**, el riesgo de mayor rango en su Top 10 para aplicaciones de IA. Es difícil de eliminar porque el modelo recibe *instrucciones* y *datos* por el mismo canal, sin separación clara.",
    "Los **guardrails** son las barreras que limitan el daño: dar a la IA **los mínimos permisos** necesarios, **validar** sus salidas antes de actuar, y poner a un **humano a aprobar** las acciones sensibles o irreversibles."
  ],
  "points": [
    {
      "term": "Inyección directa vs. indirecta",
      "text": "Directa: el usuario es el atacante. Indirecta: el usuario confía, pero el contenido de terceros que la IA lee trae la trampa."
    },
    {
      "term": "Mínimo privilegio",
      "text": "No le des al agente acceso a secretos o acciones que no necesita. Así, una inyección exitosa hace el mínimo daño."
    },
    {
      "term": "Validar antes de actuar",
      "text": "Revisa la salida de cada herramienta antes de que el agente la ejecute, sobre todo si viene de fuera."
    },
    {
      "term": "Humano en el bucle",
      "text": "Para enviar, pagar, borrar o publicar: que una persona apruebe. OWASP lo recomienda para operaciones con privilegios."
    }
  ],
  "receta": [
    "Lista qué fuentes externas leerá tu agente (correos, webs, documentos): todas son entrada **no confiable**.",
    "Dale **solo los permisos** que necesita para su tarea; nada de accesos *por si acaso*.",
    "Marca las acciones **irreversibles o sensibles** (enviar, pagar, borrar, publicar).",
    "Pon un **punto de aprobación humana** antes de cada una de esas acciones.",
    "Haz que el agente **muestre la fuente** de lo que va a hacer, para detectar instrucciones sospechosas.",
    "Nunca le des acceso a **datos sensibles** que su tarea no requiera."
  ],
  "concepts": [
    "inyección de prompt",
    "directa vs. indirecta",
    "OWASP LLM Top 10",
    "mínimo privilegio",
    "guardrails",
    "humano en el bucle"
  ],
  "note": {
    "title": "Defensa en capas, no bala de plata",
    "body": [
      "Ni OWASP ni los proveedores creen que la inyección se *resuelva* del todo: el modelo mezcla instrucciones y datos por el mismo canal. Por eso la protección es **en capas** (permisos + validación + aprobación humana), no una sola barrera."
    ]
  },
  "fuentes": [
    {
      "label": "OWASP — LLM01:2025 Prompt Injection",
      "url": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
    },
    {
      "label": "Anthropic — Mitigar jailbreaks e inyección de prompt",
      "url": "https://platform.claude.com/docs/en/docs/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks"
    },
    {
      "label": "NIST AI 100-2e2025 — Adversarial Machine Learning",
      "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2025.pdf"
    }
  ],
  "ejemplo": {
    "escenario": {
      "sector": "operación",
      "texto": "Un agente lee tu correo para resumir pendientes."
    },
    "secciones": [
      {
        "etiqueta": "Antes",
        "tono": "mal",
        "turnos": [
          {
            "de": "tu",
            "texto": "Resume mi bandeja y actúa sobre lo urgente."
          },
          {
            "de": "claude",
            "texto": "Hecho. Reenvié un contrato a la dirección que pedía un correo.",
            "nota": "Inyección indirecta: un correo con texto oculto lo secuestró."
          }
        ]
      },
      {
        "etiqueta": "Después",
        "tono": "bien",
        "turnos": [
          {
            "de": "tu",
            "texto": "Resume, pero no envíes ni borres nada sin mi visto bueno.\nMuéstrame la fuente de cada acción.",
            "destacado": true,
            "concepto": "Mínimo privilegio + aprobación humana."
          },
          {
            "de": "claude",
            "texto": "Pendientes listos.\nUn correo pide reenviar un contrato. ¿Lo apruebas?"
          }
        ]
      }
    ],
    "resultado": "La trampa queda detenida: tú apruebas lo irreversible."
  }
};
