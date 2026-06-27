export default {
  "id": "buen-uso",
  "phase": "construir",
  "title": "Buen uso y riesgos",
  "eyebrow": "Trabajar con criterio",
  "enUnaFrase": "Usar IA de forma segura, confiable y consciente de sus límites.",
  "objective": "Usar IA de forma segura, confiable y consciente de sus límites.",
  "duration": "5 min",
  "ideaPrincipal": "La IA potencia tu trabajo, pero **la responsabilidad de lo que entregas sigue siendo tuya**.",
  "concepts": [
    "verificación",
    "alucinaciones",
    "datos sensibles",
    "cuándo no usar IA",
    "elegir modelo"
  ],
  "spec": {
    "nivel": "Cualquiera",
    "cuando": "Siempre que uses IA con información que importa",
    "requiere": "Criterio para verificar y decidir"
  },
  "whatIs": [
    "Cuatro frentes para usar IA con criterio:"
  ],
  "points": [
    {
      "term": "Verificar y citar",
      "text": "pide de dónde sale cada dato, marca lo no confirmable y revisa cifras, nombres y fechas."
    },
    {
      "term": "Datos sensibles",
      "text": "no pegues credenciales ni datos de clientes; anonimiza o resume cuando dudes."
    },
    {
      "term": "Cuándo NO usar IA",
      "text": "decisiones legales/médicas/financieras sin revisión experta, o si no vas a verificar."
    },
    {
      "term": "Elegir herramienta",
      "text": "no toda tarea necesita el modelo más potente; a veces lo correcto es una persona."
    }
  ],
  "dondeVive": "La seguridad **vive en las políticas operacionales** de tu equipo, en el checklist de revisión previo a enviar y en los filtros de redacción corporativos. También vive en las **políticas de datos del proveedor**: revisa si tu plan permite que tus datos se usen para entrenar (los planes empresariales de OpenAI y Anthropic típicamente no lo hacen, pero los planes gratuitos sí pueden). Se observa en la ausencia de fugas de datos y en la calidad verificada de cada entregable.",
  "comoOperar": "Lo **operas creando un checklist de 4 pasos** antes de compartir cualquier salida de IA: (1) anonimizar datos sensibles antes de enviar al chat (reemplaza nombres por variables como *'Cliente A'*), (2) pedir al modelo que cite sus fuentes y marque lo incierto, (3) verificar cifras, nombres y fechas contra el documento original, y (4) evaluar qué pasa si un dato es incorrecto antes de publicar.",
  "receta": [
    "Antes de mandar o publicar la respuesta, pregúntate qué pasa si un dato está mal.",
    "Pídele que ponga de dónde sacó cada afirmación y que marque lo que no esté seguro.",
    "No peges nombres, correos ni datos de clientes; cambia nombres reales o usa solo totales.",
    "Verifica a mano los números, nombres y fechas importantes contra el documento original.",
    "Si una tarea es delicada y no vas a revisar la salida, no la dejes en automático todavía."
  ],
  "ejemplo": {
    "escenario": {
      "sector": "operación",
      "texto": "La IA te da una cifra para una decisión importante."
    },
    "secciones": [
      {
        "etiqueta": "Antes",
        "tono": "mal",
        "turnos": [
          {
            "de": "tu",
            "texto": "¿Cuánto presupuesto asigno a la campaña?"
          },
          {
            "de": "claude",
            "texto": "Asigna $250,000.",
            "nota": "Aceptarlo sin verificar es el riesgo."
          }
        ]
      },
      {
        "etiqueta": "Después",
        "tono": "bien",
        "turnos": [
          {
            "de": "tu",
            "texto": "Dame el cálculo y de dónde sale cada número.\nMarca lo que no estés seguro.",
            "destacado": true,
            "concepto": "Verificas y pides el porqué antes de decidir."
          },
          {
            "de": "claude",
            "texto": "Cálculo: …\nSupuesto incierto: la demanda de Q3.\nConviene que verifiques ese dato."
          }
        ]
      }
    ],
    "resultado": "Usas la IA como apoyo, no como oráculo."
  }
};
