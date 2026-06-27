# Mapa detallado de modulos

## Proposito del documento

Este documento baja la arquitectura de la landing a un mapa operativo de aprendizaje. Cada modulo incluye objetivo, conceptos, contenido, interaccion, ejercicio, evaluacion y criterio de desbloqueo.

La ruta completa debe llevar a la persona desde fundamentos basicos de IA hasta el diseno de un agente simple para una tarea real.

## Estructura comun de cada modulo

Cada modulo debe seguir esta secuencia:

1. Introduccion breve.
2. Conceptos clave.
3. Ejemplo aplicado.
4. Interaccion practica.
5. Mini evaluacion.
6. Desbloqueo del siguiente modulo.

La experiencia debe ser progresiva. El contenido avanzado no debe aparecer como disponible hasta que la persona complete las validaciones minimas anteriores.

---

## Modulo 0: Diagnostico inicial

### Objetivo de aprendizaje

Identificar el nivel inicial de la persona y activar una ruta guiada que mantenga una base comun para todo el equipo.

### Conceptos incluidos

- Uso previo de IA.
- Familiaridad con prompts.
- Conocimiento de tokens.
- Uso de `.md`.
- Familiaridad con tools, skills, MCP y agentes.

### Contenido principal

El diagnostico debe ser corto y no intimidante. Su funcion no es evaluar formalmente, sino ubicar a la persona y hacer visible que la ruta construye conceptos por capas.

### Interaccion

Quiz inicial de 5 a 7 preguntas.

Ejemplos:

- Que tanto has usado herramientas de IA en tu trabajo.
- Has escrito prompts con estructura clara.
- Sabes que son tokens.
- Has usado archivos `.md`.
- Sabes que es una skill.
- Sabes que es MCP.
- Has disenado o usado agentes.

### Ejercicio

La persona selecciona una tarea real que le gustaria mejorar con IA. Esa tarea se reutilizara en ejercicios posteriores.

Ejemplos:

- Preparar una reunion.
- Resumir documentos.
- Generar propuestas.
- Analizar feedback.
- Crear reportes.
- Documentar procesos.

### Evaluacion

No hay evaluacion bloqueante. El diagnostico solo clasifica el punto de partida.

### Criterio de desbloqueo

Completar el diagnostico y seleccionar una tarea real.

### Recursos asociados

- Resultado de nivel inicial.
- Tarea elegida por la persona.

---

## Modulo 1: Fundamentos de IA

### Objetivo de aprendizaje

Construir un lenguaje comun sobre IA generativa, modelos de lenguaje, capacidades y limites.

### Conceptos incluidos

- IA generativa.
- LLM.
- Modelo.
- Aplicacion.
- Chatbot.
- Agente.
- Alucinacion.
- Datos de entrenamiento.
- Contexto.
- Limites del modelo.

### Contenido principal

Explicar que un LLM genera texto prediciendo tokens con base en patrones aprendidos y el contexto disponible. Debe quedar claro que un modelo no entiende como una persona, no sabe todo, no siempre tiene datos actuales y puede equivocarse aunque la respuesta suene convincente.

Distinciones clave:

- Modelo: capacidad base.
- Aplicacion: producto que usa el modelo.
- Chatbot: interfaz conversacional.
- Agente: sistema que usa modelo, herramientas, contexto y ciclos de accion.

### Interaccion

Tarjetas comparativas:

- Modelo vs aplicacion.
- Chatbot vs agente.
- Respuesta correcta vs respuesta convincente.
- Capacidad razonable vs expectativa exagerada.

### Ejercicio

Clasificar tareas segun si son adecuadas para un LLM:

- Resumir una minuta.
- Inventar cifras financieras exactas sin datos.
- Comparar dos propuestas.
- Extraer tareas de un correo.
- Confirmar informacion actual sin acceso a fuentes.

### Evaluacion

Preguntas de opcion multiple:

1. Por que una IA puede sonar segura y estar equivocada.
2. Cual es la diferencia entre modelo y aplicacion.
3. Que tarea es razonable pedirle a un LLM.
4. Que riesgo aparece cuando el contexto es incompleto.

### Criterio de desbloqueo

Responder correctamente al menos 3 de 4 preguntas.

### Recursos asociados

- Glosario basico de IA.
- Tabla de capacidades y limites.

---

## Modulo 2: Prompt como instruccion

### Objetivo de aprendizaje

Entender que un prompt efectivo es una instruccion disenada, no solo una pregunta.

### Conceptos incluidos

- Prompt.
- Objetivo.
- Rol.
- Contexto.
- Tarea.
- Restricciones.
- Ejemplos.
- Formato de salida.
- Criterios de calidad.

### Contenido principal

Un buen prompt reduce ambiguedad. Debe decir que se quiere lograr, con que informacion, bajo que restricciones y en que formato debe entregarse la respuesta.

Anatomia recomendada:

```md
# Rol

# Objetivo

# Contexto

# Tarea

# Restricciones

# Formato de salida

# Criterios de calidad
```

### Interaccion

Editor comparativo:

- Columna izquierda: prompt debil.
- Columna derecha: prompt mejorado.
- Resaltado por componentes: objetivo, contexto, formato, restricciones.

### Ejercicio

La persona toma la tarea real seleccionada en el diagnostico y escribe un primer prompt estructurado.

### Evaluacion

Checklist automatico:

- Tiene objetivo claro.
- Incluye contexto.
- Define la tarea.
- Incluye formato esperado.
- Define por lo menos un criterio de calidad.

### Criterio de desbloqueo

El prompt debe cumplir al menos 4 de los 5 criterios.

### Recursos asociados

- Plantilla de prompt.
- Ejemplos de prompts malos, buenos y excelentes.

---

## Modulo 3: Contexto, tokens y decisiones

### Objetivo de aprendizaje

Entender que el contexto tiene limite, costo e impacto en la calidad de la respuesta.

### Conceptos incluidos

- Token.
- Ventana de contexto.
- Costo.
- Latencia.
- Informacion relevante.
- Ruido contextual.
- Resumen.
- Chunking.
- Priorizacion.

### Contenido principal

Los tokens son la unidad practica que consume el modelo al leer y generar texto. Mas contexto no siempre significa mejor respuesta. El buen uso de IA requiere decidir que informacion incluir, que resumir, que dividir y que dejar fuera.

Decisiones clave:

- Agregar contexto completo.
- Resumir antes de pedir una salida.
- Dividir una tarea en pasos.
- Convertir informacion en `.md`.
- Usar una herramienta o fuente externa.

### Interaccion

Simulador de presupuesto de contexto:

- La persona ve varios documentos o bloques de informacion.
- Debe elegir que incluir.
- La interfaz muestra impacto estimado en claridad, costo y riesgo de ruido.

### Ejercicio

Resolver tres escenarios:

1. Documento largo con muchas secciones irrelevantes.
2. Historial de conversacion demasiado extenso.
3. Tarea que requiere informacion de varias fuentes.

### Evaluacion

Preguntas de decision:

- Cuando conviene resumir.
- Cuando conviene dividir.
- Cuando conviene pegar el texto completo.
- Cuando conviene crear un archivo `.md`.

### Criterio de desbloqueo

Elegir una estrategia razonable en al menos 2 de 3 escenarios.

### Recursos asociados

- Checklist de optimizacion de contexto.
- Guia rapida de tokens.

---

## Modulo 4: Markdown como sistema de contexto

### Objetivo de aprendizaje

Usar archivos `.md` para estructurar conocimiento, instrucciones, procesos y plantillas reutilizables.

### Conceptos incluidos

- Markdown.
- Encabezados.
- Listas.
- Tablas.
- Bloques de codigo.
- Plantillas.
- Documentacion viva.
- Base de conocimiento.
- Instrucciones reutilizables.

### Contenido principal

Markdown permite organizar contexto para que sea legible para personas y util para modelos. Un archivo `.md` bien estructurado puede convertir informacion desordenada en instrucciones claras y reutilizables.

Usos recomendados:

- Brief de proyecto.
- Guia de estilo.
- SOP.
- Checklist.
- Plantilla de prompt.
- Instrucciones de agente.
- Base de conocimiento.

### Interaccion

Transformador de texto:

- Se muestra un proceso desordenado.
- La persona debe ordenarlo en secciones Markdown.
- La interfaz muestra por que esa estructura mejora el uso del contexto.

### Ejercicio

Convertir un proceso simple del equipo en un archivo `.md`.

Plantilla minima:

```md
# Objetivo

# Contexto

# Pasos

# Entradas necesarias

# Salida esperada

# Criterios de calidad
```

### Evaluacion

Checklist:

- Usa encabezados claros.
- Separa contexto de instrucciones.
- Define entradas.
- Define salida esperada.
- Incluye criterios de calidad.

### Criterio de desbloqueo

La plantilla debe cumplir al menos 4 de los 5 criterios.

### Recursos asociados

- Plantilla `.md` para procesos.
- Plantilla `.md` para prompts.
- Ejemplo de SOP en Markdown.

---

## Modulo 5: Tools y skills

### Objetivo de aprendizaje

Entender como una IA puede pasar de responder texto a ejecutar trabajo con herramientas o instrucciones reutilizables.

### Conceptos incluidos

- Tool.
- Skill.
- Instruccion reutilizable.
- Entrada.
- Salida.
- Permisos.
- Verificacion.
- Prompt reusable.
- Procedimiento.

### Contenido principal

Una tool permite que el modelo interactue con una capacidad externa. Una skill empaqueta instrucciones, criterios y metodos para realizar una tarea de forma consistente.

Diferencias clave:

- Prompt suelto: instruccion puntual.
- Plantilla: prompt reutilizable.
- Skill: metodo documentado para ejecutar una tarea.
- Tool: capacidad externa que el sistema puede usar.

### Interaccion

Selector de estrategia:

La persona ve distintos casos y decide si conviene:

- Prompt simple.
- Plantilla.
- Skill.
- Tool.

### Ejercicio

Disenar una skill simple para la tarea elegida en el diagnostico.

Plantilla:

```md
# Nombre de la skill

# Cuando usarla

# Entradas necesarias

# Pasos

# Criterios de calidad

# Salida esperada
```

### Evaluacion

La persona debe clasificar correctamente casos como:

- Responder una duda puntual.
- Generar un reporte semanal repetible.
- Consultar un calendario.
- Revisar prompts con criterios consistentes.
- Buscar archivos en Drive.

### Criterio de desbloqueo

Clasificar correctamente al menos 4 de 5 casos.

### Recursos asociados

- Plantilla de skill.
- Tabla comparativa: prompt, plantilla, skill y tool.

---

## Modulo 6: MCP

### Objetivo de aprendizaje

Entender MCP como un estandar para conectar modelos o agentes con herramientas, datos y sistemas externos.

### Conceptos incluidos

- MCP.
- Cliente MCP.
- Servidor MCP.
- Herramientas expuestas.
- Recursos.
- Permisos.
- Datos externos.
- Trazabilidad.
- Riesgos.

### Contenido principal

MCP permite que una aplicacion de IA se conecte con capacidades externas de forma estructurada. En lugar de que el modelo solo responda con texto, puede acceder a herramientas o datos disponibles a traves de servidores MCP.

Mapa mental:

```text
Usuario -> Agente -> Cliente MCP -> Servidor MCP -> Herramienta externa -> Resultado -> Agente
```

Casos donde MCP tiene sentido:

- Consultar archivos.
- Leer calendarios.
- Buscar en CRM.
- Operar Figma.
- Consultar bases de datos.
- Leer documentacion interna.

Casos donde MCP puede ser innecesario:

- Preguntas simples.
- Redaccion breve.
- Lluvia de ideas sin datos externos.
- Transformaciones de texto pequenas.

### Interaccion

Mapa de conexion:

La persona selecciona un caso de uso y arma el flujo:

- Quien pide.
- Que agente actua.
- Que herramienta necesita.
- Que dato externo requiere.
- Que resultado vuelve al agente.

### Ejercicio

Elegir un caso donde MCP aporte valor para el equipo y explicar por que.

### Evaluacion

Preguntas de decision:

- Este caso requiere datos externos o no.
- Que riesgo de permisos existe.
- Que herramienta externa seria necesaria.
- Cuando MCP seria excesivo.

### Criterio de desbloqueo

Explicar correctamente un caso con MCP y un caso donde MCP no es necesario.

### Recursos asociados

- Diagrama MCP simplificado.
- Checklist de riesgos: permisos, datos sensibles, acciones destructivas y trazabilidad.

---

## Modulo 7: Loops

### Objetivo de aprendizaje

Entender el ciclo minimo de trabajo que permite a un agente planear, actuar, observar y corregir.

### Conceptos incluidos

- Loop.
- Plan.
- Accion.
- Observacion.
- Correccion.
- Verificacion.
- Resultado.
- Criterio de exito.

### Contenido principal

Un agente no solo responde. Trabaja en ciclos. Define un plan, ejecuta acciones, observa resultados, corrige si hace falta y verifica antes de entregar.

Loop basico:

```text
Objetivo -> Plan -> Accion -> Observacion -> Correccion -> Verificacion -> Entrega
```

La verificacion es clave para evitar respuestas incompletas, errores operativos o acciones mal ejecutadas.

### Interaccion

Ordenador de flujo:

La persona recibe pasos desordenados y debe construir el loop correcto.

Tambien puede detectar que parte falta en un flujo incompleto:

- Falta observacion.
- Falta verificacion.
- Falta criterio de exito.
- Falta limite de accion.

### Ejercicio

Disenar el loop de trabajo para la tarea elegida en el diagnostico.

### Evaluacion

La persona debe:

- Ordenar correctamente los pasos.
- Identificar una falla en un loop incompleto.
- Agregar una verificacion concreta.

### Criterio de desbloqueo

Completar el loop y definir al menos una verificacion util.

### Recursos asociados

- Plantilla de agent loop.
- Ejemplos de loops buenos y debiles.

---

## Modulo 8: Agentes

### Objetivo de aprendizaje

Disenar un agente simple, acotado y util para una tarea real del equipo.

### Conceptos incluidos

- Agente.
- Objetivo.
- Usuario objetivo.
- Instrucciones.
- Contexto.
- Herramientas.
- Memoria.
- Loop.
- Criterios de exito.
- Limites operativos.
- Riesgos.

### Contenido principal

Un agente combina objetivo, instrucciones, contexto, herramientas y loop para ejecutar una tarea con mayor autonomia que un chatbot. Un buen agente debe tener alcance claro, limites, entradas definidas y verificaciones.

Reglas para disenar agentes pequenos:

- Una tarea principal por agente.
- Objetivo observable.
- Herramientas necesarias, no excesivas.
- Entradas claras.
- Criterios de exito.
- Verificacion antes de entregar.
- Limites de accion.

### Interaccion

Agent Builder:

Formulario guiado que construye un blueprint de agente:

```md
# Nombre del agente

# Objetivo

# Usuario objetivo

# Tarea principal

# Contexto requerido

# Herramientas necesarias

# Flujo de trabajo

# Verificaciones

# Criterios de exito

# Riesgos

# Limites operativos

# Ejemplo de uso
```

### Ejercicio

Crear el blueprint de un agente basado en la tarea seleccionada en el diagnostico.

### Evaluacion

Rubrica:

- El objetivo es claro.
- El alcance esta acotado.
- Las entradas necesarias estan definidas.
- Las herramientas tienen justificacion.
- El loop incluye verificacion.
- Los riesgos estan identificados.
- La salida esperada esta definida.

### Criterio de desbloqueo

Cumplir al menos 5 de los 7 criterios de la rubrica.

### Recursos asociados

- Plantilla de agente.
- Rubrica de evaluacion.
- Ejemplos de agentes internos.

---

## Modulo 9: Biblioteca de recursos

### Objetivo de aprendizaje

Consolidar materiales reutilizables para que el aprendizaje se convierta en practica diaria.

### Conceptos incluidos

- Plantillas.
- Checklists.
- Glosario.
- Rubricas.
- Ejemplos.
- Casos de uso.

### Contenido principal

La biblioteca se desbloquea al completar la ruta. Debe servir como referencia para trabajo real.

Recursos incluidos:

- Glosario completo.
- Plantilla de prompt.
- Plantilla de proceso `.md`.
- Plantilla de skill.
- Plantilla de agent loop.
- Plantilla de agente.
- Checklist de tokens y contexto.
- Rubrica para evaluar respuestas de IA.
- Tabla de decision: prompt, plantilla, skill, tool, MCP o agente.
- Casos de uso por area.

### Interaccion

Recursos copiables:

- Boton para copiar plantilla.
- Boton para descargar `.md`.
- Filtros por tipo de recurso.
- Buscador de conceptos.

### Ejercicio

No requiere ejercicio. Es una zona de consulta y reutilizacion.

### Evaluacion

No requiere evaluacion.

### Criterio de desbloqueo

Completar el modulo de agentes.

### Recursos asociados

Todos los recursos finales de la experiencia.

---

## Reglas globales de progreso

### Estados

Cada modulo puede tener uno de estos estados:

- Bloqueado.
- Disponible.
- En progreso.
- Completado.

### Progreso minimo

Para completar un modulo, la persona debe:

1. Ver la explicacion.
2. Revisar el ejemplo.
3. Completar la actividad.
4. Pasar la evaluacion.

### Persistencia

La pagina debe guardar el avance localmente, al menos en el navegador. En una version futura podria guardar avance por usuario.

### Reintentos

Las evaluaciones deben permitir reintentos. El objetivo no es castigar, sino reforzar comprension.

### Feedback

Cada evaluacion debe explicar por que una respuesta es correcta o incorrecta.

## Pendiente para el siguiente documento

Definir:

- Glosario completo de conceptos.
- Copys principales de cada modulo.
- Ejemplos de prompts.
- Plantillas `.md`.
- Rubricas de evaluacion.
- Requisitos funcionales para construir la landing.
