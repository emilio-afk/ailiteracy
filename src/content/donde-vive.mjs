export default {
  "id": "donde-vive",
  "phase": "construir",
  "title": "Dónde vive un agente",
  "eyebrow": "De la idea a algo que corre",
  "enUnaFrase": "Dónde corre un agente, dónde vive su criterio y cómo se vuelve independiente.",
  "objective": "Entender dónde corre un agente, dónde vive su criterio y cómo se vuelve independiente.",
  "duration": "5 min",
  "ideaPrincipal": "El agente **no vive dentro de la IA**. Es un programa aparte que corre en *su propia oficina*.",
  "concepts": [
    "servidor / nube",
    "disparador (cron)",
    "instrucciones (criterio)",
    "memoria",
    "no-code vs código"
  ],
  "spec": {
    "nivel": "Equipo de desarrollo",
    "cuando": "Cuando un agente debe correr sin que tú lo lances",
    "requiere": "Servidor, disparador e instrucciones"
  },
  "whatIs": [
    "El modelo (Claude, GPT) es un *servicio remoto* al que se le habla. El **agente** es un programa aparte que orquesta el trabajo, y corre en algún lado: *su oficina*.",
    "Para ser **independiente** —trabajar solo sin que tú lo abras— necesita cuatro cosas, *como un empleado*:"
  ],
  "points": [
    {
      "term": "Oficina",
      "text": "un servidor o plataforma siempre encendida."
    },
    {
      "term": "Horario",
      "text": "un disparador (una hora del día, un evento, un correo entrante)."
    },
    {
      "term": "Llaves",
      "text": "acceso a herramientas vía MCP o APIs, con permisos."
    },
    {
      "term": "Libreta",
      "text": "memoria (base de datos o archivos), porque el modelo no recuerda solo."
    }
  ],
  "dondeVive": "El alojamiento del agente **vive en un servidor en la nube encendido 24/7** (ej. AWS Lambda, Google Cloud Run, Railway, Render) o en plataformas de automatización no-code (Make.com, Zapier, n8n). Se observa en los paneles de ejecución, historiales de *logs* y registros de eventos de dichas plataformas. Lo clave: si el servidor se apaga, el agente deja de existir.",
  "comoOperar": "Lo **creas registrando un escenario** en Make, n8n o Zapier (no-code) o desplegando un script en un servicio cloud (Railway, Render, AWS). Configuras el **disparador** (ej. *'ejecutar cada lunes a las 9am'*, *'cuando llegue un webhook'*, *'cuando se añada una fila al Sheet'*) y asocias tus credenciales de forma segura (variables de entorno, no en el código). Para flujos más complejos, usas n8n (open source, auto-hospedado) que permite lógica condicional y loops.",
  "receta": [
    "Para empezar sin programar, usa una plataforma como Make o Zapier: ahí 'vivirá' el agente.",
    "Conéctala a donde están tus datos (tu Google Sheet, tu CRM) dándole acceso de lectura.",
    "Escribe sus reglas en el campo de instrucciones (ej. 'lead caliente = pidió demo y +50 empleados').",
    "Pon cuándo debe activarse solo (ej. 'todos los días a las 9am').",
    "Dile dónde dejar el resultado (un correo a ti, un mensaje a un canal de Slack).",
    "Haz una prueba y confirma que se ejecutó aunque tu computadora estuviera apagada."
  ],
  "ejemplo": {
    "tipo": "esquema",
    "forma": "flujo",
    "escenario": {
      "sector": "operación",
      "texto": "El agente de leads debe correr sin que tú abras nada."
    },
    "nodos": [
      {
        "titulo": "Servidor en la nube",
        "sub": "Donde corre, siempre encendido"
      },
      {
        "titulo": "Disparador",
        "sub": "Cron: cada día a las 8:00"
      },
      {
        "titulo": "Instrucciones",
        "sub": "Su criterio, en un archivo"
      },
      {
        "titulo": "Memoria",
        "sub": "Qué leads ya revisó"
      }
    ],
    "nota": "Tú no abres nada: el agente vive en el servidor y el disparador lo despierta.",
    "resultado": "El agente vive en la nube y se dispara solo, sin ti."
  }
};
