export default {
  id: "multi-agente",
  phase: "construir",
  title: "Varios agentes (orquestación)",
  enUnaFrase: "Dividir un trabajo grande entre agentes especializados que se coordinan.",
  ideaPrincipal:
    "Cuando una tarea es grande, en vez de un agente que hace todo, usas **varios especializados** —investiga, redacta, revisa— coordinados por un **orquestador**.",
  spec: {
    nivel: "Equipo de desarrollo",
    cuando: "Cuando la tarea es grande y tiene roles distintos",
    requiere: "Un orquestador + agentes con roles claros",
  },
  whatIs: [
    "**Multi-agente** significa repartir un trabajo entre varios agentes, cada uno con un **rol acotado** (investigar, redactar, revisar), en lugar de pedirle todo a uno solo.",
    "Un **orquestador** reparte las tareas, pasa el resultado de uno a otro y arma el entregable final. Es como un equipo con un coordinador.",
    "Conviene cuando los roles son **distintos y claros**. Si la tarea es simple, un solo agente es más barato y fácil de mantener — no lo compliques de más.",
  ],
  points: [
    { term: "Roles especializados", text: "Cada agente hace una cosa bien: investigar, escribir, verificar." },
    { term: "Orquestador", text: "Coordina: reparte tareas, pasa resultados y arma el entregable final." },
    { term: "Cuándo NO usarlo", text: "Si un solo agente resuelve, multi-agente solo agrega costo y puntos de falla." },
  ],
  receta: [
    "Confirma que la tarea **se divide** en roles distintos (si no, usa un solo agente).",
    "Define cada **agente** con un rol acotado y sus herramientas.",
    "Define el **orquestador**: en qué orden trabajan y cómo se pasan resultados.",
    "Pon **revisión** (humana o un agente verificador) antes del entregable final.",
    "Mide costo y tiempo: si no supera a un solo agente, simplifica.",
  ],
  concepts: ["multi-agente", "orquestador", "roles especializados", "coordinación"],
  note: {
    title: "Más agentes, más costo",
    body: [
      "Cada agente consume tokens y puede fallar. Multi-agente brilla en tareas grandes y divisibles; para lo simple, **menos es más**.",
    ],
  },
  ejemplo: {
    tipo: "esquema",
    forma: "flujo",
    escenario: { sector: "creación de contenido", texto: "Quieres un artículo bien investigado, redactado y revisado." },
    nodos: [
      { titulo: "Orquestador", sub: "Reparte y coordina" },
      { titulo: "Investigador", sub: "Reúne datos y fuentes" },
      { titulo: "Redactor", sub: "Escribe el borrador" },
      { titulo: "Revisor", sub: "Verifica y pule" },
    ],
    nota: "El orquestador pasa el resultado de cada agente al siguiente.",
    resultado: "Un artículo investigado, redactado y revisado, por partes especializadas.",
  },
};
