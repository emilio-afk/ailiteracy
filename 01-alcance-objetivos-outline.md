# Taller de IA: alcance, objetivos y outline

## Proposito

Crear una pagina educativa para ensenar al equipo los fundamentos practicos de la IA, con foco en entender conceptos clave, disenar mejores prompts, usar contexto de forma eficiente y avanzar hacia la programacion de agentes para tareas reales.

La pagina debe funcionar como una ruta de aprendizaje y tambien como referencia operativa para el equipo.

## Audiencia

Personas del equipo que ya han usado herramientas de IA de forma empirica, con distintos niveles de experiencia, pero que necesitan una base comun de entendimiento.

## Alcance

La pagina debe ayudar a que una persona pueda:

- Entender como funcionan los modelos de IA generativa a nivel practico.
- Distinguir entre prompt, contexto, memoria, herramientas, skills, agentes y flujos.
- Disenar prompts claros, reutilizables y evaluables.
- Usar archivos `.md` como base de conocimiento, instrucciones o contexto estructurado.
- Tomar mejores decisiones sobre uso de tokens, contexto y costo.
- Entender que es un agente y como se programa uno para tareas reales.
- Identificar cuando conviene usar IA conversacional, automatizacion, agentes o herramientas externas como MCP.

Queda fuera del primer alcance:

- Matematicas profundas de machine learning.
- Entrenamiento de modelos desde cero.
- Fine-tuning avanzado.
- Infraestructura compleja de produccion.
- Arquitecturas multiagente avanzadas, salvo como introduccion.

## Objetivos de aprendizaje

Al terminar, la gente deberia poder:

1. Explicar con sus palabras que es un modelo de lenguaje y que puede o no puede hacer.
2. Diferenciar conceptos como `prompt`, `system prompt`, `contexto`, `tokens`, `memoria`, `tool`, `skill`, `MCP` y `agent loop`.
3. Escribir prompts con objetivo, contexto, restricciones, formato de salida y criterios de calidad.
4. Usar documentos `.md` para estructurar instrucciones, conocimiento, procesos y ejemplos.
5. Decidir cuando conviene darle mas contexto al modelo y cuando conviene resumir, dividir o externalizar informacion.
6. Disenar flujos simples donde la IA razona, llama herramientas, revisa resultados y mejora la respuesta.
7. Crear un primer agente para una tarea concreta: investigacion, documentacion, analisis, soporte, ventas, reporting o automatizacion interna.
8. Evaluar la calidad de una respuesta o flujo de IA con criterios claros, no solo con intuicion.

## Enfoque recomendado

La pagina debe combinar dos enfoques:

- Ruta practica por niveles: de fundamentos a agentes, con ejemplos y ejercicios.
- Glosario de apoyo: para aclarar conceptos como `skill`, `MCP`, `loop`, `.md`, tokens, contexto, herramientas y agentes.

No debe ser una enciclopedia. Debe ser una guia practica para construir criterio y capacidad operativa.

## Outline de contenidos

### 1. Fundamentos de IA generativa

- Que es IA generativa.
- Que es un LLM.
- Diferencia entre modelo, aplicacion, chatbot, agente y automatizacion.
- Que significa predecir tokens.
- Por que la IA puede equivocarse aunque suene segura.
- Capacidades reales: resumir, clasificar, razonar, transformar, generar, comparar, planear.
- Limites reales: alucinaciones, contexto incompleto, instrucciones ambiguas, datos desactualizados.

### 2. Conceptos base para trabajar con IA

- `Prompt`: instruccion que guia la respuesta.
- `Contexto`: informacion disponible para responder.
- `Tokens`: unidad de texto que consume capacidad y costo.
- `System prompt`: reglas de comportamiento.
- `User prompt`: solicitud del usuario.
- `Output format`: forma esperada de respuesta.
- `Memory`: informacion persistente o reutilizable.
- `Tool`: capacidad externa que el modelo puede usar.
- `Skill`: instruccion empaquetada para ejecutar una tarea con metodo.
- `.md`: archivo Markdown para documentar conocimiento, procesos e instrucciones.
- `MCP`: protocolo para conectar modelos o agentes con herramientas, datos o sistemas externos.
- `Loop`: ciclo de razonamiento, accion y verificacion.
- `Agent`: sistema que usa un modelo para perseguir un objetivo usando contexto, herramientas y ciclos de decision.

### 3. Prompt engineering practico

- Anatomia de un buen prompt:
  - rol
  - objetivo
  - contexto
  - tarea
  - restricciones
  - ejemplos
  - formato de salida
  - criterios de calidad
- Prompts malos vs buenos.
- Como pedir razonamiento sin pedir ruido innecesario.
- Como usar ejemplos.
- Como pedir formatos: tablas, JSON, checklist, correo, plan, codigo, resumen ejecutivo.
- Como iterar un prompt.
- Como convertir prompts repetidos en plantillas reutilizables.

### 4. Markdown como herramienta de trabajo

- Que es `.md` y por que importa.
- Como estructurar conocimiento en Markdown.
- Uso de encabezados, listas, tablas y bloques de codigo.
- Documentos utiles:
  - brief de proyecto
  - guia de estilo
  - instrucciones de agente
  - checklist operativo
  - base de conocimiento
  - plantilla de prompt
  - SOP o proceso interno
- Como usar `.md` para reducir ambiguedad y mejorar respuestas.
- Diferencia entre dar mucho texto y dar contexto bien organizado.

### 5. Tokens, contexto y optimizacion

- Que son los tokens en la practica.
- Por que el contexto no es infinito.
- Costo, latencia y calidad.
- Cuando agregar mas contexto.
- Cuando resumir.
- Cuando dividir una tarea en pasos.
- Cuando usar archivos o recuperacion de informacion.
- Como evitar prompts gigantes e ineficientes.
- Buenas practicas:
  - separar instrucciones de datos
  - usar plantillas
  - reutilizar documentos base
  - resumir historial
  - pedir salidas compactas
  - definir criterios antes de generar

### 6. Herramientas, skills y MCP

- Que es una herramienta para un modelo.
- Ejemplos: buscar en web, leer archivos, consultar calendario, ejecutar codigo, consultar CRM.
- Que es una skill.
- Diferencia entre skill y prompt suelto.
- Que es MCP explicado simple: un estandar para conectar IA con sistemas externos.
- Casos donde MCP aporta valor:
  - conectar Google Drive
  - consultar bases de datos
  - leer documentacion interna
  - operar herramientas de diseno
  - automatizar flujos de negocio
- Riesgos:
  - permisos
  - datos sensibles
  - acciones destructivas
  - trazabilidad

### 7. Agentes y agent loops

- Que es un agente.
- Diferencia entre chatbot y agente.
- Componentes de un agente:
  - objetivo
  - instrucciones
  - contexto
  - herramientas
  - memoria
  - loop
  - verificacion
- Ciclo basico:
  - entender objetivo
  - planear
  - actuar
  - observar resultado
  - corregir
  - entregar
- Cuando usar agentes y cuando no.
- Como disenar agentes pequenos y confiables.
- Errores comunes:
  - objetivos vagos
  - demasiadas herramientas
  - falta de verificacion
  - no limitar permisos
  - no definir salida esperada

### 8. Casos de uso recomendados

- Agente que resume documentos internos.
- Agente que convierte notas en planes de accion.
- Agente que genera propuestas comerciales.
- Agente que prepara reuniones.
- Agente que analiza feedback de clientes.
- Agente que crea documentacion tecnica.
- Agente que revisa prompts.
- Agente que transforma SOPs en checklists.
- Agente que ayuda a programar tareas repetitivas.
- Agente que genera reportes semanales.

### 9. Practicas y ejercicios

- Reescribir un prompt debil.
- Crear una plantilla de prompt reutilizable.
- Convertir un proceso del equipo en `.md`.
- Reducir tokens de un prompt largo sin perder calidad.
- Disenar un agente en papel.
- Crear instrucciones para un agente simple.
- Evaluar una respuesta de IA con una rubrica.
- Comparar chatbot vs agente para el mismo problema.

### 10. Mentalidad de trabajo con IA

- IA como colaborador, no como magia.
- Claridad antes de automatizacion.
- Mejor contexto produce mejores resultados.
- Los agentes deben ser pequenos, verificables y orientados a tareas.
- La calidad depende tanto del diseno del sistema como del modelo.

## Estructura sugerida para la pagina

1. Inicio: que vas a aprender y por que importa.
2. Mapa de conceptos: glosario visual de prompt, token, contexto, skill, MCP, loop y agente.
3. Ruta de aprendizaje: modulos progresivos con objetivos y ejercicios.
4. Prompt Lab: ejemplos de prompts malos, buenos y excelentes.
5. Token & Context Lab: casos para decidir cuando resumir, dividir o usar `.md`.
6. Agent Builder: plantilla para disenar un agente paso a paso.
7. Casos de uso: ejemplos aplicados al trabajo real del equipo.
8. Recursos: plantillas `.md`, checklists, glosario y ejemplos descargables.

## Decision pendiente

Definir si la pagina sera:

1. Curso interno.
2. Landing educativa interactiva.
3. Manual operativo vivo con ejercicios.

Recomendacion actual: manual operativo vivo con ejercicios, porque sirve para aprender y tambien como referencia diaria.
