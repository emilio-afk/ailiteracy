export default {
  "id": "loops",
  "phase": "hacer",
  "title": "Loops",
  "eyebrow": "Acción y verificación",
  "enUnaFrase": "El ciclo de trabajo que vuelve confiable a un agente.",
  "objective": "Entender el ciclo de trabajo que vuelve confiable a un agente.",
  "duration": "3 min",
  "ideaPrincipal": "Lo importante no es que el agente *haga mucho*, sino que **verifique** antes de entregar.",
  "concepts": [
    "plan",
    "acción",
    "observación",
    "corrección",
    "verificación"
  ],
  "spec": {
    "nivel": "Con apoyo técnico",
    "cuando": "Cuando una tarea necesita varios pasos con autocorrección",
    "requiere": "Un objetivo claro y criterios de éxito"
  },
  "whatIs": [
    "Un chatbot responde una vez y ya. Un agente trabaja en **ciclos** —como una persona competente—: intenta algo, observa cómo salió y ajusta. Ese ciclo se llama **loop** (también conocido como el patrón *ReAct*: Reason + Act).",
    "Un loop típico sigue esta secuencia: *Objetivo → Plan → Acción → Observación → Corrección → Verificación → Entrega*. El agente no se queda con su primera respuesta: evalúa si cumplió el objetivo antes de dar por terminado.",
    "Sin una etapa explícita de **verificación**, un agente puede entregar algo incompleto, alucinar datos o asumir que una acción funcionó cuando en realidad falló."
  ],
  "dondeVive": "El loop **vive en el código de orquestación** que controla al agente (el programa *wrapper* que llama a la API del modelo). Se observa en los *logs* de ejecución como una secuencia repetida de llamadas: el orquestador envía un prompt, recibe la respuesta, evalúa si cumple los criterios y decide si reintenta o entrega.",
  "comoOperar": "Lo **operas definiendo criterios de éxito y reglas de parada**. En código, es un bucle `while` (Python/TypeScript) que en cada iteración: (1) llama al modelo, (2) evalúa la salida contra una rúbrica, (3) si no pasa, retroalimenta el error y reintenta, y (4) si pasa o se agotan los intentos, entrega. Sin código, lo simulas pidiendo al modelo *'revisa si tu respuesta cumple estos criterios antes de dármela'*.",
  "receta": [
    "Escribe qué debe lograr y cómo sabrás que quedó bien (ej. 'cada tarea tiene responsable y fecha').",
    "Anota los pasos en orden: qué planea, qué hace, cómo revisa lo que salió y cómo corrige.",
    "Agrega un paso explícito de revisión antes de entregar (ej. 'compara contra la lista de criterios').",
    "Marca qué acciones no puede hacer solo (mandar correos, borrar datos): ahí debe pedirte permiso.",
    "Prúbalo con un caso real y arregla el paso donde se equivoque."
  ],
  "ejemplo": {
    "tipo": "esquema",
    "forma": "ciclo",
    "escenario": {
      "sector": "creación de producto",
      "texto": "Pides el copy de un empaque que debe cumplir varias reglas."
    },
    "nodos": [
      {
        "titulo": "1 · Plan",
        "sub": "Qué escribir y sus reglas"
      },
      {
        "titulo": "2 · Acción",
        "sub": "Redacta el copy"
      },
      {
        "titulo": "3 · Observación",
        "sub": "¿Cumple? 87 caracteres > 80"
      },
      {
        "titulo": "4 · Corrección",
        "sub": "Recorta y vuelve al paso 2"
      }
    ],
    "nota": "El ciclo se repite hasta cumplir todas las reglas, sin que revises cada vuelta.",
    "resultado": "Se autocorrige antes de entregarte algo."
  }
};
