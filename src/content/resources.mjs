export default [
  {
    "id": "prompt",
    "title": "Plantilla de prompt estructurado",
    "moduleId": "prompt",
    "description": "Para pedir salidas claras y evaluables.",
    "markdown": "# Rol\n\nActúa como [rol esperado].\n\n# Objetivo\n\nQuiero lograr [resultado deseado].\n\n# Contexto\n\n[Información necesaria.]\n\n# Tarea\n\n[Solicitud concreta.]\n\n# Formato de salida\n\n[Tabla, lista, JSON, resumen, checklist.]\n\n# Criterios de calidad\n\n- Claro\n- Accionable\n- Sin inventar información"
  },
  {
    "id": "proceso-md",
    "title": "Plantilla de proceso .md",
    "moduleId": "markdown",
    "description": "Para documentar procesos internos como contexto reusable.",
    "markdown": "# Nombre del proceso\n\n# Objetivo\n\n# Cuándo usarlo\n\n# Entradas necesarias\n\n# Pasos\n\n1. [Paso 1]\n2. [Paso 2]\n3. [Paso 3]\n\n# Salida esperada\n\n# Criterios de calidad"
  },
  {
    "id": "brief",
    "title": "Brief para IA",
    "moduleId": "contexto",
    "description": "Para preparar contexto antes de pedir una tarea compleja.",
    "markdown": "# Proyecto o tema\n\n# Objetivo\n\n# Audiencia\n\n# Contexto relevante\n\n# Material disponible\n\n# Restricciones\n\n# Salida esperada\n\n# Criterios de éxito"
  },
  {
    "id": "context-checklist",
    "title": "Checklist de tokens y contexto",
    "moduleId": "contexto",
    "description": "Para decidir qué incluir, resumir o dividir.",
    "markdown": "# Checklist de tokens y contexto\n\n- [ ] El objetivo está claro.\n- [ ] El contexto incluido es relevante.\n- [ ] El texto innecesario fue eliminado.\n- [ ] La tarea fue dividida si era demasiado grande.\n- [ ] El formato de salida está definido.\n- [ ] Hay datos sensibles o riesgos identificados."
  },
  {
    "id": "skill",
    "title": "Plantilla de skill",
    "moduleId": "tools-skills",
    "description": "Para convertir una forma de trabajo en método reusable.",
    "markdown": "# Nombre de la skill\n\n# Cuándo usar esta skill\n\n# Objetivo\n\n# Entradas necesarias\n\n# Procedimiento\n\n1. Leer contexto.\n2. Identificar tarea.\n3. Ejecutar método.\n4. Verificar salida.\n\n# Formato de salida\n\n# Criterios de calidad"
  },
  {
    "id": "loop",
    "title": "Plantilla de agent loop",
    "moduleId": "loops",
    "description": "Para diseñar ciclos de acción y verificación.",
    "markdown": "# Nombre del loop\n\n# Objetivo\n\n# Entrada inicial\n\n# Entender\n\n# Planear\n\n# Actuar\n\n# Observar\n\n# Corregir\n\n# Verificar\n\n# Entregar"
  },
  {
    "id": "agent",
    "title": "Plantilla de agente",
    "moduleId": "agentes",
    "description": "Para diseñar un agente acotado y verificable.",
    "markdown": "# Nombre del agente\n\n# Propósito\n\n# Usuario objetivo\n\n# Tarea principal\n\n# Fuera de alcance\n\n# Contexto requerido\n\n# Herramientas necesarias\n\n# Flujo de trabajo\n\n# Verificaciones\n\n# Criterios de éxito\n\n# Riesgos\n\n# Límites operativos"
  },
  {
    "id": "rubrica-agente",
    "title": "Rúbrica para evaluar agentes",
    "moduleId": "agentes",
    "description": "Para revisar si un agente está listo para prototipo.",
    "markdown": "# Rúbrica de agente\n\n| Criterio | Puntaje | Observaciones |\n|---|---:|---|\n| Objetivo claro |  |  |\n| Alcance acotado |  |  |\n| Contexto requerido |  |  |\n| Herramientas justificadas |  |  |\n| Loop definido |  |  |\n| Verificaciones incluidas |  |  |\n| Riesgos identificados |  |  |"
  },
  {
    "id": "tabla-decision",
    "title": "Tabla de decisión: qué usar",
    "moduleId": "tools-skills",
    "description": "Chuleta rápida para elegir entre prompt, plantilla, skill, tool, MCP o agente.",
    "markdown": "# Qué usar según la necesidad\n\n| Necesidad | Recurso recomendado |\n|---|---|\n| Resolver una pregunta puntual | Prompt simple |\n| Repetir una solicitud con estructura | Plantilla |\n| Seguir un método consistente | Skill |\n| Consultar o ejecutar algo fuera del modelo | Tool |\n| Conectar la IA con sistemas externos | MCP |\n| Ejecutar una tarea con pasos y verificación | Agente |"
  }
];
