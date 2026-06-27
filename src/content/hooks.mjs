export default {
  id: "hooks",
  phase: "construir",
  title: "Hooks y disparadores",
  enUnaFrase: "Automatizar con reglas fijas: cuando pasa X, haz Y, sin que la IA lo decida.",
  ideaPrincipal:
    "Un **hook** es una regla **determinista**: *cuando pasa X, haz siempre Y*. A diferencia del criterio de un agente, no improvisa — y por eso es confiable para lo que no debe fallar.",
  spec: {
    nivel: "Con apoyo técnico",
    cuando: "Cuando algo debe pasar siempre igual ante un evento",
    requiere: "Un evento disparador + una acción definida",
  },
  whatIs: [
    "Un **hook** (o disparador) conecta un **evento** con una **acción** mediante una regla fija. *Cuando llega un formulario → guarda el lead y manda un correo.* Siempre igual.",
    "La diferencia con un **agente** es clave: el agente usa *criterio* (decide qué hacer, puede variar); el hook es *mecánico* (no decide, ejecuta la regla). Por eso el hook es predecible y el agente flexible.",
    "En la práctica se combinan: un hook **dispara** al agente en el momento correcto, y dentro el agente aplica su criterio.",
  ],
  points: [
    { term: "Evento → acción", text: "El disparador es un hecho concreto: llega un correo, se crea un registro, dan las 8:00." },
    { term: "Determinista", text: "Mismo evento, misma acción. No interpreta ni improvisa: por eso es confiable." },
    { term: "Hook vs. criterio de IA", text: "Usa hook para lo que no debe fallar; deja a la IA lo que requiere juicio." },
    { term: "Se combinan", text: "Un hook puede ser justo lo que dispara a un agente (ver Dónde vive un agente)." },
  ],
  receta: [
    "Define el **evento** exacto que dispara todo: *llega un lead*, *se aprueba un pago*, *son las 8:00*.",
    "Define la **acción fija** que debe ocurrir siempre: *guardar*, *notificar*, *etiquetar*.",
    "Decide qué parte es **regla fija** (hook) y qué parte necesita **criterio** (agente).",
    "Conecta el evento con la acción en tu herramienta (automatización no-code o código).",
    "Prueba con un caso real y confirma que se dispara siempre igual.",
  ],
  concepts: ["hook / disparador", "evento → acción", "determinista", "hook vs. agente"],
  note: {
    title: "Determinista, no inteligente",
    body: [
      "Un hook no entiende el contexto: hace exactamente lo que dice su regla. Si el evento o la acción cambian, **tú** actualizas la regla. Esa rigidez es su ventaja para tareas críticas.",
    ],
  },
  ejemplo: {
    tipo: "esquema",
    forma: "flujo",
    escenario: { sector: "operación", texto: "Quieres que cada lead nuevo se registre y notifique, sin falta." },
    nodos: [
      { titulo: "Evento", sub: "Llega un lead nuevo" },
      { titulo: "Hook (regla fija)", sub: "Siempre que llegue → ejecuta" },
      { titulo: "Acción", sub: "Guarda en la hoja + avisa a ventas" },
    ],
    nota: "No hay criterio: pase lo que pase, el lead se registra y se notifica.",
    resultado: "Cero leads perdidos: la regla se dispara siempre, sin depender de nadie.",
  },
};
