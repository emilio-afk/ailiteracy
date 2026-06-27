export default {
  "id": "mcp",
  "phase": "hacer",
  "title": "MCP",
  "eyebrow": "Conexión con sistemas",
  "enUnaFrase": "El enchufe que conecta a la IA con tus datos y herramientas reales.",
  "objective": "Entender MCP como el puente entre la IA y tus datos y herramientas reales.",
  "duration": "4 min",
  "ideaPrincipal": "MCP pasa de *dictarle todo* a darle una **llave controlada** para consultar por su cuenta.",
  "concepts": [
    "cliente MCP",
    "servidor MCP",
    "herramientas y recursos",
    "permisos",
    "trazabilidad"
  ],
  "spec": {
    "nivel": "Equipo de desarrollo",
    "cuando": "Cuando la IA necesita leer tus datos o sistemas reales",
    "requiere": "Un servidor MCP y permisos"
  },
  "whatIs": [
    "**MCP** (Model Context Protocol) es un **estándar abierto** que define cómo una aplicación de IA se conecta con tus herramientas y datos reales. Piénsalo como un *enchufe universal*: en vez de hacer una integración personalizada para cada sistema, MCP estandariza la comunicación.",
    "Sin MCP, la IA solo sabe lo que tú le pegas. Con MCP, un agente puede consultar tu Drive, calendario, CRM o base de datos —siempre dentro de los **permisos** que tú definas y con un registro de cada acción.",
    "Lo importante para ti no es la plomería técnica, sino la decisión: *qué sistema necesita tocar, con qué nivel de acceso y cómo verificar* lo que trae. **No es para todo**: si la tarea es transformar un texto que ya tienes en el chat, MCP añade complejidad innecesaria."
  ],
  "dondeVive": "MCP tiene una arquitectura **cliente-servidor**. El *cliente* vive dentro de tu aplicación de IA (ej. Claude Desktop, Cursor, Windsurf). El *servidor* es un proceso independiente (un script de Node.js o Python) que se comunica con el cliente vía **JSON-RPC** (sobre stdio local o HTTP remoto). Cada servidor expone *tools* (acciones) y *resources* (datos) al modelo.",
  "comoOperar": "Lo **configuras editando el archivo de tu cliente** (ej. `claude_desktop_config.json` o `settings.json` en tu IDE). Ahí registras servidores MCP indicando el comando para iniciarlos. Puedes instalar **servidores preconstruidos** desde GitHub (ej. `@modelcontextprotocol/server-filesystem` para leer archivos) o programar tu propio servidor usando el **SDK oficial de MCP** en TypeScript o Python.",
  "receta": [
    "Define qué sistema necesita consultar la IA y para qué (ej. 'leer los documentos del cliente en Drive').",
    "Decide si solo necesita leer o también cambiar cosas; para empezar, solo leer es más seguro.",
    "La conexión técnica (el 'servidor MCP') normalmente la instala alguien de sistemas o se activa desde la app; pide el acceso más limitado posible.",
    "En tus instrucciones, pídele que diga de qué documento o fuente sacó cada dato.",
    "Revisa el registro de qué consultó y qué trajo, para poder auditarlo si algo sale raro."
  ],
  "ejemplo": {
    "escenario": {
      "sector": "ventas",
      "texto": "Quieres el estatus de un cliente que vive en tu CRM."
    },
    "secciones": [
      {
        "etiqueta": "Antes",
        "tono": "mal",
        "turnos": [
          {
            "de": "tu",
            "texto": "¿Cómo va la cuenta de Acme?"
          },
          {
            "de": "claude",
            "texto": "No tengo acceso a tu CRM. ¿Me pegas los datos?",
            "nota": "Aislado de tus sistemas."
          }
        ]
      },
      {
        "etiqueta": "Después",
        "tono": "bien",
        "turnos": [
          {
            "de": "tu",
            "texto": "(con MCP conectado al CRM)\n¿Cómo va la cuenta de Acme?",
            "destacado": true,
            "concepto": "MCP le da una llave controlada a tu CRM."
          },
          {
            "de": "claude",
            "texto": "Acme: 2 pedidos abiertos.\nÚltimo contacto hace 9 días.\n(consultado en el CRM)"
          }
        ]
      }
    ],
    "resultado": "Responde con datos reales, sin que tú los copies."
  }
};
