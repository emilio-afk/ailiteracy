export default {
  id: "costos",
  phase: "construir",
  title: "Costos y monitoreo",
  enUnaFrase: "Cuánto cuesta operar IA y cómo vigilar el gasto y los errores en producción.",
  ideaPrincipal:
    "La IA se paga **por uso** (tokens). Lo que en pruebas cuesta centavos, en producción se multiplica — por eso eliges el modelo por tarea y **vigilas** gasto y errores.",
  spec: {
    nivel: "Con apoyo técnico",
    cuando: "Antes de escalar de pruebas a producción",
    requiere: "Estimación de uso + un panel de monitoreo",
  },
  whatIs: [
    "Casi toda la IA cobra **por tokens** (trozos de texto que entran y salen). Más texto y más llamadas = más costo. Un modelo razonador cuesta más que uno rápido.",
    "El salto de **pruebas a producción** dispara el costo: 100 pruebas son centavos; 100,000 usuarios al mes, no. Por eso *enrutas*: modelo barato para lo simple, caro solo para lo difícil.",
    "**Monitorear** es ver, en un panel, cuánto gastas, qué tan rápido responde y cuántos errores ocurren — para detectar fugas antes de que duelan.",
  ],
  points: [
    { term: "Pago por tokens", text: "Pagas por el texto que entra y sale. Prompts largos y muchas llamadas suben la cuenta." },
    { term: "Enrutar por tarea", text: "Modelo rápido y barato para volumen; razonador y caro solo donde aporta." },
    { term: "Monitoreo", text: "Vigila gasto, velocidad y errores en un panel. Pon una alerta de gasto." },
    { term: "Caché", text: "Reusar las partes repetidas del prompt (caché) baja costo y tiempo de respuesta." },
  ],
  receta: [
    "Estima el **volumen**: ¿cuántas llamadas al mes? Multiplica por el costo por llamada.",
    "**Enruta por tarea**: define qué usa modelo barato y qué justifica uno caro.",
    "Acorta los prompts y usa **caché** para lo que se repite.",
    "Monta un **panel** que muestre gasto, velocidad y errores.",
    "Pon una **alerta de gasto** (un tope mensual) para que nada se dispare en silencio.",
    "Revisa el panel cada semana y ajusta.",
  ],
  concepts: ["pago por tokens", "costo por tarea", "monitoreo", "alertas de gasto", "caché"],
  note: {
    title: "Lo barato en pruebas engaña",
    body: [
      "Un prototipo que cuesta $2 puede costar miles al escalar. Estima el costo a **volumen real** antes de lanzar, no con tus pruebas.",
    ],
  },
  ejemplo: {
    tipo: "documento",
    escenario: { sector: "operación", texto: "Vas a clasificar 50,000 correos al mes y quieres controlar el costo." },
    secciones: [
      {
        etiqueta: "Antes",
        tono: "mal",
        bloques: [
          { tipo: "texto", contenido: "Uso el modelo más potente (y caro) para todo, incluso para clasificar correos simples." },
        ],
        nota: "Pagas de más por tareas que no lo necesitan.",
      },
      {
        etiqueta: "Después",
        tono: "bien",
        bloques: [
          {
            tipo: "tabla",
            headers: ["Tarea", "Modelo", "Costo relativo"],
            filas: [
              ["Clasificar correo simple", "Rápido / barato", "$"],
              ["Redactar respuesta compleja", "Razonador", "$$$"],
            ],
          },
        ],
        concepto: "Enrutas cada tarea al modelo que le corresponde.",
      },
    ],
    resultado: "Pagas el modelo caro solo donde aporta; el volumen barato se queda barato.",
  },
};
