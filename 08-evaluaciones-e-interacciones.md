# Practicas e interacciones

## Proposito

Este documento define las practicas e interacciones concretas para la landing educativa interactiva del Taller de IA.

Las practicas ayudan a la persona a construir criterio practico, no a memorizar definiciones ni a aprobar un examen. Cada practica invita a una decision observable: elegir, clasificar, ordenar, completar, corregir o justificar. Son opcionales y sirven para pensar.

## Principios de las practicas

- Las practicas son cortas, frecuentes y opcionales.
- Nada bloquea el avance: ninguna practica desbloquea ni reprueba.
- El diagnostico inicial es una bienvenida, no un examen.
- Cada practica da feedback inmediato y amable al instante de responder.
- El feedback explica la idea, nunca marca "incorrecto" con tono punitivo.
- La persona puede responder, cambiar de opinion o saltar sin penalizacion.
- El feedback sugiere que revisar, en tono de acompanamiento, no de correccion.
- Las practicas usan casos de trabajo real siempre que sea posible.
- El progreso (modulos vistos) se guarda localmente en el navegador.

## Estados globales de progreso

### Estado de usuario

La landing maneja estados simples, sin bloqueo:

- `nuevo`: persona que aun no recorre ningun modulo.
- `en_progreso`: persona con al menos un modulo visto.
- `ruta_completa`: persona que recorrio todos los modulos.

Todos los modulos estan disponibles desde el inicio para cualquier usuario.

### Estado por modulo

Cada modulo solo guarda dos estados:

- `available`: disponible (siempre, desde el inicio).
- `seen`: la persona ya lo marco como visto.

No existen estados `locked` ni `passed`. La biblioteca de recursos tambien esta disponible siempre.

### Indicadores visibles

Cada modulo muestra:

- Estado: disponible o visto.
- Tiempo estimado de lectura.
- Siguiente modulo sugerido.

No se muestran puntajes, intentos ni "aprobado/reprobado": el tono es de tutorial, no de examen.

## Diagnostico inicial

### Objetivo

Dar la bienvenida y, de forma opcional, capturar una tarea real que se reutilizara en los ejemplos de la ruta.

El diagnostico nunca bloquea ni obliga. Las preguntas son opcionales y escribir una tarea real tambien lo es: la persona puede saltar directo al Modulo 1.

### Preguntas

Usar 7 preguntas. Cada una vale de 0 a 2 puntos.

| Id | Pregunta | Opciones | Scoring |
| --- | --- | --- | --- |
| D1 | Que tanto has usado IA en tu trabajo? | Nunca o casi nunca / A veces para tareas simples / Frecuentemente para tareas de trabajo | 0 / 1 / 2 |
| D2 | Has escrito prompts con estructura clara? | No / Algunas veces / Si, usando objetivo, contexto y formato | 0 / 1 / 2 |
| D3 | Sabes que son tokens en la practica? | No / Tengo una idea general / Si, entiendo costo, limite y contexto | 0 / 1 / 2 |
| D4 | Has usado archivos `.md` para organizar instrucciones o conocimiento? | No / He visto o editado alguno / Si, los uso para procesos o prompts | 0 / 1 / 2 |
| D5 | Sabes diferenciar prompt, plantilla, skill y tool? | No / Parcialmente / Si, puedo elegir cual usar | 0 / 1 / 2 |
| D6 | Sabes que es MCP? | No / Lo he escuchado / Si, entiendo que conecta IA con herramientas o datos externos | 0 / 1 / 2 |
| D7 | Has disenado o usado un agente? | No / He usado agentes sin disenarlos / Si, he disenado un flujo con objetivo, tools y verificacion | 0 / 1 / 2 |

### Clasificacion

Puntaje maximo: 14.

- 0 a 4: `Base inicial`.
- 5 a 9: `Practica emergente`.
- 10 a 14: `Uso estructurado`.

### Mensajes de resultado

#### Base inicial

Respuesta:

```text
Tu punto de partida es base inicial. La ruta te ayudara a construir lenguaje comun y criterio practico desde fundamentos, prompts y contexto.
```

Recomendacion:

```text
Empieza en el Modulo 1 y presta especial atencion a las diferencias entre modelo, aplicacion, chatbot y agente.
```

#### Practica emergente

Respuesta:

```text
Ya has usado IA de forma practica. La ruta te ayudara a ordenar conceptos, mejorar prompts y convertir trabajo repetible en plantillas, skills o agentes simples.
```

Recomendacion:

```text
Completa la ruta desde el Modulo 1 para asegurar una base comun, aunque podras avanzar rapido en los temas conocidos.
```

#### Uso estructurado

Respuesta:

```text
Ya tienes familiaridad con varios conceptos de IA. La ruta te servira para estandarizar lenguaje, detectar riesgos y disenar agentes mas confiables.
```

Recomendacion:

```text
Completa las microevaluaciones para desbloquear la ruta y usa los ejercicios para aplicar cada tema a una tarea real del equipo.
```

### Tarea real

Despues del quiz, la persona debe elegir una tarea real:

- Preparar una reunion.
- Resumir documentos.
- Generar propuestas.
- Analizar feedback.
- Crear reportes.
- Documentar procesos.
- Revisar prompts.
- Otra tarea escrita por la persona.

Regla:

- Si elige "Otra", debe escribir minimo 10 caracteres.
- Esta tarea se guarda como `selectedTask`.
- Los ejercicios de modulos 2, 5, 7 y 8 deben reutilizarla.

## Reglas generales de feedback

### Feedback para opcion correcta

Debe incluir:

- Confirmacion breve.
- Criterio que hizo correcta la respuesta.
- Conexion con el modulo.

Ejemplo:

```text
Correcto. Esta opcion usa contexto relevante y define una salida observable, por eso reduce ambiguedad.
```

### Feedback para opcion incorrecta

Debe incluir:

- Explicacion sin tono punitivo.
- Por que la opcion falla.
- Que concepto revisar.
- Invitacion a reintentar.

Ejemplo:

```text
No del todo. Esta opcion agrega mucha informacion, pero no separa datos relevantes de ruido. Revisa la seccion de contexto y tokens antes de reintentar.
```

### Feedback para respuestas parcialmente correctas

Debe usarse cuando una respuesta libre o checklist cumple algunos criterios.

Ejemplo:

```text
Vas bien: el objetivo esta claro y el formato esta definido. Falta agregar contexto suficiente y un criterio de calidad para evaluar la salida.
```

### Feedback por intento

- Primer intento fallido: explicar el criterio y permitir reintento inmediato.
- Segundo intento fallido: mostrar pista mas concreta.
- Tercer intento fallido: recomendar repasar una seccion especifica y permitir continuar solo cuando alcance el criterio minimo.

## Reglas de avance (sin bloqueo)

### Ruta base

La ruta sugiere este orden de lectura, pero todos los modulos estan abiertos:

```text
Bienvenida -> Fundamentos -> Prompt -> Contexto/Tokens -> Markdown -> Tools/Skills -> MCP -> Loops -> Agentes -> Biblioteca
```

### Regla general

- Todos los modulos (incluida la biblioteca) estan disponibles desde el primer momento.
- "Marcar como visto" solo actualiza el progreso; no condiciona ningun otro modulo.
- La persona puede recorrer en orden, saltar o regresar libremente.

### Practicas

- Las practicas son opcionales e ilimitadas.
- No se guardan puntajes ni intentos.
- Responder mal nunca penaliza ni cierra nada: solo aparece un comentario que ayuda a pensar.

### Saltos

Los saltos estan permitidos. Sugerimos el orden propuesto para mantener un lenguaje comun, pero la persona decide su ritmo.

## Practicas por modulo

## Modulo 0: Diagnostico inicial

### Interaccion

Quiz de autoevaluacion mas seleccion de tarea real.

### Criterio de aprobacion

- Responder las 7 preguntas.
- Seleccionar o escribir una tarea real.

### No hay respuestas incorrectas

El diagnostico mide familiaridad, no conocimiento correcto.

## Modulo 1: Fundamentos de IA

### Tipo de evaluacion

Opcion multiple y clasificacion de tareas.

### Idea que refuerza esta practica (opcional, no bloquea)

Responder correctamente al menos 3 de 4 preguntas.

### Preguntas

#### F1

Pregunta:

```text
Por que una IA puede sonar segura y estar equivocada?
```

Opciones:

- A. Porque genera texto probable con base en patrones y contexto disponible.
- B. Porque siempre tiene acceso a informacion actualizada.
- C. Porque solo responde cuando esta completamente segura.
- D. Porque entiende la verdad igual que una persona.

Respuesta correcta: A.

Feedback correcto:

```text
Correcto. Un LLM puede producir texto convincente aunque el contexto sea incompleto o la informacion no este verificada.
```

Feedback incorrecto:

```text
No del todo. La seguridad del tono no garantiza verdad. Revisa la diferencia entre respuesta convincente y respuesta verificada.
```

#### F2

Pregunta:

```text
Cual es la mejor diferencia entre modelo y aplicacion?
```

Opciones:

- A. El modelo es la capacidad base; la aplicacion es el producto que la usa.
- B. La aplicacion siempre es mas inteligente que el modelo.
- C. Modelo y aplicacion son lo mismo.
- D. El modelo es solo la interfaz visual.

Respuesta correcta: A.

#### F3

Pregunta:

```text
Que tarea es razonable pedirle a un LLM con buen contexto?
```

Opciones:

- A. Inventar ventas exactas sin datos.
- B. Resumir una minuta y extraer acuerdos.
- C. Confirmar hechos actuales sin acceso a fuentes.
- D. Ejecutar una transferencia bancaria sin permisos ni verificacion.

Respuesta correcta: B.

#### F4

Pregunta:

```text
Que riesgo aparece cuando el contexto es incompleto?
```

Opciones:

- A. La IA puede asumir informacion faltante.
- B. La IA deja de generar texto.
- C. El prompt se vuelve automaticamente perfecto.
- D. La respuesta siempre es mas corta y correcta.

Respuesta correcta: A.

## Modulo 2: Prompt como instruccion

### Tipo de evaluacion

Checklist sobre prompt escrito por la persona.

### Idea que refuerza esta practica (opcional, no bloquea)

Cumplir al menos 4 de 5 criterios.

### Interaccion

La persona escribe un prompt para la tarea real elegida en el diagnostico.

### Criterios

| Criterio | Aprobado si... | Incorrecto si... |
| --- | --- | --- |
| Objetivo | Dice que resultado quiere lograr | Solo dice "ayudame" o "haz esto" sin resultado |
| Contexto | Incluye informacion relevante para resolver | No da datos o da informacion irrelevante |
| Tarea | Indica acciones concretas | La accion es ambigua |
| Formato | Define como debe entregarse la salida | No especifica formato |
| Calidad | Incluye minimo un criterio de evaluacion | No dice como saber si la respuesta es buena |

### Feedback por criterio

Correcto:

```text
Este criterio esta cubierto. La instruccion reduce ambiguedad y ayuda a evaluar la respuesta.
```

Incorrecto:

```text
Este criterio falta o esta ambiguo. Agrega una frase concreta para que la IA sepa que debe producir y como se evaluara.
```

### Ejemplo de respuesta incorrecta

```text
Hazme un reporte de ventas.
```

Motivo:

```text
Tiene una tarea general, pero no define contexto, formato, periodo, audiencia ni criterios de calidad.
```

### Ejemplo de respuesta correcta

```text
Objetivo: crear un reporte semanal de ventas para direccion.
Contexto: usa los datos de esta semana y compara contra la semana anterior.
Tarea: resume avances, riesgos y proximos pasos.
Formato: tabla con metricas y lista de acciones.
Criterios: separa hechos de supuestos y marca datos faltantes.
```

## Modulo 3: Contexto, tokens y decisiones

### Tipo de evaluacion

Tres escenarios de decision.

### Idea que refuerza esta practica (opcional, no bloquea)

Elegir una estrategia razonable en al menos 2 de 3 escenarios.

### Escenario C1

Caso:

```text
Tienes un documento de 60 paginas, pero solo necesitas preparar un resumen de riesgos de las secciones legales.
```

Respuesta correcta:

```text
Extraer o resumir solo las secciones legales relevantes antes de pedir el resumen de riesgos.
```

Respuesta incorrecta:

```text
Pegar todo el documento sin indicar que partes importan.
```

Feedback:

```text
La estrategia correcta reduce ruido contextual y costo. Mas texto no siempre mejora la respuesta.
```

### Escenario C2

Caso:

```text
La conversacion con la IA ya es muy larga y necesitas continuar con una decision puntual.
```

Respuesta correcta:

```text
Resumir el historial relevante, declarar la decision pendiente y continuar desde ese resumen.
```

Respuesta incorrecta:

```text
Seguir agregando mensajes sin ordenar el contexto.
```

### Escenario C3

Caso:

```text
La tarea requiere informacion de varios archivos que cambian con frecuencia.
```

Respuesta correcta:

```text
Usar archivos organizados o una herramienta externa para consultar la informacion actualizada.
```

Respuesta incorrecta:

```text
Copiar versiones viejas de los archivos en el prompt y asumir que siguen vigentes.
```

## Modulo 4: Markdown como sistema de contexto

### Tipo de evaluacion

Transformar un proceso desordenado en una mini plantilla `.md`.

### Idea que refuerza esta practica (opcional, no bloquea)

Cumplir al menos 4 de 5 criterios.

### Criterios

| Criterio | Correcto | Incorrecto |
| --- | --- | --- |
| Encabezados | Usa encabezados claros con `#` o `##` | Todo queda como parrafo continuo |
| Separacion | Separa contexto, pasos y salida | Mezcla instrucciones con datos |
| Entradas | Lista informacion necesaria | No dice que se necesita para ejecutar |
| Salida | Define resultado esperado | No queda claro que debe producirse |
| Calidad | Incluye criterios de calidad | No hay forma de evaluar si funciono |

### Ejemplo incorrecto

```md
Tenemos que revisar propuestas, ver si estan bien, pedir cambios y mandar algo al cliente.
```

### Ejemplo correcto

```md
# Objetivo
Revisar una propuesta antes de enviarla al cliente.

# Entradas necesarias
- Propuesta actual.
- Brief del cliente.
- Fecha limite.

# Pasos
1. Revisar alcance.
2. Detectar riesgos.
3. Proponer cambios.

# Salida esperada
Lista de ajustes priorizados.

# Criterios de calidad
- Los riesgos estan separados de las sugerencias.
- No se inventa informacion del cliente.
```

## Modulo 5: Tools y skills

### Tipo de evaluacion

Clasificacion de casos.

### Idea que refuerza esta practica (opcional, no bloquea)

Clasificar correctamente al menos 4 de 5 casos.

### Opciones de clasificacion

- `prompt simple`
- `plantilla`
- `skill`
- `tool`

### Casos

| Caso | Respuesta correcta | Respuesta incorrecta comun | Feedback |
| --- | --- | --- | --- |
| Responder una duda puntual sobre un texto corto | prompt simple | skill | No necesitas un metodo reusable para una pregunta unica. |
| Generar cada viernes un reporte con la misma estructura | plantilla | prompt simple | La repeticion justifica una plantilla para mantener consistencia. |
| Revisar prompts usando criterios estables | skill | prompt simple | La skill empaqueta metodo, criterios y salida esperada. |
| Consultar eventos del calendario | tool | plantilla | Se necesita una capacidad externa, no solo texto. |
| Buscar archivos en Drive | tool | prompt simple | La IA necesita acceso a un sistema externo para buscar archivos reales. |

### Feedback general

Correcto:

```text
Correcto. Elegiste el nivel adecuado de estructura para la tarea.
```

Incorrecto:

```text
No del todo. Pregunta si la tarea es unica, repetible, metodologica o requiere acceso externo.
```

## Modulo 6: MCP

### Tipo de evaluacion

Decision guiada: cuando MCP aporta valor y cuando es excesivo.

### Idea que refuerza esta practica (opcional, no bloquea)

Explicar correctamente un caso con MCP y un caso donde MCP no es necesario.

### Preguntas

#### M1

Caso:

```text
Un agente necesita buscar documentos actualizados en Google Drive y resumirlos.
```

Respuesta correcta:

```text
MCP puede aportar valor porque conecta al agente con una fuente externa de documentos.
```

Respuesta incorrecta:

```text
No hace falta ninguna conexion; el modelo ya sabe que documentos existen.
```

#### M2

Caso:

```text
Una persona quiere reescribir un parrafo corto para hacerlo mas claro.
```

Respuesta correcta:

```text
MCP probablemente es innecesario porque no se requieren datos externos ni acciones en otro sistema.
```

Respuesta incorrecta:

```text
Siempre conviene usar MCP para cualquier prompt.
```

#### M3

Pregunta:

```text
Que riesgo debe revisarse antes de conectar un agente a una herramienta externa?
```

Respuesta correcta:

```text
Permisos, datos sensibles, acciones destructivas y trazabilidad.
```

Respuesta incorrecta:

```text
Solo el estilo visual de la respuesta.
```

### Feedback

```text
MCP tiene sentido cuando el agente necesita datos o acciones externas. Si la tarea es solo transformar texto ya disponible, MCP puede ser complejidad innecesaria.
```

## Modulo 7: Loops

### Tipo de evaluacion

Ordenar pasos e identificar fallas en un loop.

### Idea que refuerza esta practica (opcional, no bloquea)

Completar el loop y definir al menos una verificacion util.

### Orden correcto

```text
Objetivo -> Plan -> Accion -> Observacion -> Correccion -> Verificacion -> Entrega
```

### Interaccion 1: ordenar pasos

La persona recibe pasos mezclados:

- Entrega.
- Observacion.
- Plan.
- Objetivo.
- Verificacion.
- Accion.
- Correccion.

Respuesta correcta:

```text
Objetivo, Plan, Accion, Observacion, Correccion, Verificacion, Entrega.
```

### Interaccion 2: detectar falla

Caso:

```text
El agente planea, ejecuta una accion y entrega el resultado sin revisar si cumplio el criterio de exito.
```

Respuesta correcta:

```text
Falta verificacion.
```

Respuesta incorrecta:

```text
Falta hacerlo mas largo.
```

### Interaccion 3: agregar verificacion

Respuesta correcta esperada:

```text
Antes de entregar, comparar la salida contra los criterios de calidad y marcar datos faltantes.
```

Respuesta incorrecta:

```text
Revisar que se vea bien.
```

Motivo:

```text
La verificacion debe ser observable y relacionada con el objetivo, no solo estetica o vaga.
```

## Modulo 8: Agentes

### Tipo de evaluacion

Rubrica sobre blueprint de agente.

### Idea que refuerza esta practica (opcional, no bloquea)

Cumplir al menos 5 de 7 criterios.

### Criterios

| Criterio | Correcto | Incorrecto |
| --- | --- | --- |
| Objetivo | Define resultado observable | Dice "ayudar con todo" |
| Alcance | Una tarea principal | Muchas tareas no relacionadas |
| Entradas | Lista informacion necesaria | No especifica datos de entrada |
| Herramientas | Justifica cada tool | Agrega herramientas por si acaso |
| Loop | Incluye plan, accion, observacion y verificacion | Solo describe una respuesta unica |
| Riesgos | Identifica permisos, datos o errores posibles | No menciona riesgos |
| Salida | Define formato y criterios de exito | No define que se entrega |

### Ejemplo incorrecto

```md
# Agente
Ayuda al equipo con ventas, operaciones, reportes, clientes y cualquier otra cosa.
```

Motivo:

```text
El alcance es demasiado amplio, no hay entradas, herramientas justificadas, loop ni criterios de exito.
```

### Ejemplo correcto

```md
# Nombre
Agente de resumen de reuniones comerciales.

# Objetivo
Convertir notas de reunion en acuerdos, tareas, responsables y riesgos.

# Entradas
- Notas de reunion.
- Lista de participantes.
- Fecha de la reunion.

# Herramientas necesarias
- Lectura de archivos si las notas estan en documentos internos.

# Loop
1. Leer entradas.
2. Extraer acuerdos.
3. Identificar tareas y responsables.
4. Marcar informacion faltante.
5. Verificar contra criterios de calidad.

# Salida esperada
Tabla con acuerdo, responsable, fecha, riesgo y siguiente paso.

# Riesgos
- Inventar responsables.
- Confundir acuerdos con ideas.
- Omitir dudas abiertas.
```

## Modulo 9: Biblioteca de recursos

### Tipo de interaccion

Modulo no bloqueante de consolidacion.

### Criterio de disponibilidad

Se desbloquea al aprobar el Modulo 8.

### Interacciones

- Descargar o copiar plantillas.
- Marcar recursos como favoritos.
- Filtrar por caso de uso: prompt, contexto, Markdown, skill, MCP, loop, agente.
- Volver a ejercicios aprobados.

### Evaluacion

No requiere quiz. Puede incluir una autoevaluacion final opcional:

```text
Que recurso vas a usar primero en tu trabajo esta semana?
```

La respuesta se guarda como compromiso de aplicacion, pero no bloquea.

## Persistencia local sugerida

La primera version puede usar `localStorage`.

### Clave sugerida

```text
tallerIA.progress.v1
```

### Estructura sugerida

```json
{
  "version": 1,
  "createdAt": "ISO_DATE",
  "updatedAt": "ISO_DATE",
  "diagnostic": {
    "completed": true,
    "score": 8,
    "level": "Practica emergente",
    "answers": {
      "D1": 2,
      "D2": 1,
      "D3": 1,
      "D4": 0,
      "D5": 1,
      "D6": 1,
      "D7": 2
    },
    "selectedTask": "Preparar una reunion"
  },
  "modules": {
    "0": {
      "status": "passed",
      "bestScore": 14,
      "lastScore": 14,
      "attempts": 1,
      "completedAt": "ISO_DATE"
    },
    "1": {
      "status": "available",
      "bestScore": 0,
      "lastScore": 0,
      "attempts": 0,
      "completedAt": null
    }
  },
  "artifacts": {
    "promptDraft": "",
    "markdownTemplate": "",
    "skillDraft": "",
    "loopDraft": "",
    "agentBlueprint": ""
  },
  "favorites": [],
  "lastVisitedModule": 1
}
```

### Reglas de persistencia

- Guardar despues de cada respuesta.
- Guardar borradores de ejercicios escritos.
- Guardar `bestScore` y `lastScore`.
- No borrar progreso aprobado por fallar un reintento.
- Permitir reiniciar progreso con confirmacion explicita.
- Mantener version de schema para migraciones futuras.

### Datos que no deben guardarse en primera version

- Datos sensibles de clientes.
- Documentos internos completos.
- Credenciales.
- Tokens de API.
- Informacion personal no necesaria.

## Accesibilidad basica para quizzes e interacciones

### Teclado

- Todas las preguntas, opciones, botones y controles deben ser navegables con teclado.
- El foco visible debe ser claro.
- El orden de tabulacion debe seguir la lectura natural.
- Enter o Espacio deben activar opciones seleccionables cuando aplique.

### Lectores de pantalla

- Cada pregunta debe tener etiqueta clara.
- Las opciones deben estar agrupadas por pregunta.
- El feedback debe anunciarse despues de responder.
- Los estados bloqueado, disponible, aprobado y en progreso deben tener texto accesible, no solo color.

### Color y contraste

- No depender solo de verde y rojo para correcto o incorrecto.
- Usar texto, icono o etiqueta junto con color.
- Mantener contraste suficiente en botones, tarjetas, feedback y estados.

### Errores y feedback

- El error debe aparecer cerca de la pregunta.
- El feedback debe ser especifico y accionable.
- No ocultar la respuesta anterior al reintentar.
- Permitir revisar respuestas correctas despues de aprobar.

### Movimiento e interaccion

- Evitar animaciones indispensables para entender el resultado.
- Si hay drag and drop, ofrecer alternativa con botones para mover arriba, abajo o seleccionar orden.
- Si hay sliders o simuladores, permitir entrada alternativa con controles discretos o seleccion.

### Formularios y respuestas libres

- Indicar campos requeridos.
- Mostrar longitud minima cuando exista.
- Conservar texto escrito si la evaluacion falla.
- Evitar limites de tiempo.

## Criterios de aceptacion del documento

La implementacion de la landing se considera alineada con este documento si:

- El diagnostico inicial es una bienvenida opcional, sin scoring que bloquee.
- Cada modulo tiene una practica concreta y opcional.
- Ninguna practica bloquea ni reprueba el avance.
- El feedback explica la idea en tono de acompanamiento, no de correccion.
- Todos los modulos estan disponibles desde el inicio.
- El progreso (modulos vistos) se conserva localmente.
- Las interacciones principales son usables con teclado y lector de pantalla.
