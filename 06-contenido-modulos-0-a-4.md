# Contenido curricular: modulos 0 a 4

> **Formato vigente:** en la guia ya implementada, cada tema se muestra con la estructura **¿Que es? → Ejemplo → Caso de uso negativo → Caso de uso positivo**, precedida por una **ficha tecnica** (¿Que se requiere? · Tiempo de implementacion · Formato). El contenido de abajo es la fuente narrativa; la version corta y estructurada vive en `src/app-data.mjs`. La ruta actual tiene 13 modulos (00–12) e incluye temas nuevos: **03 Tecnicas para producir mas**, **10 Donde vive un agente** y **11 Buen uso y riesgos** (ver doc 07).

## Proposito

Este documento contiene el contenido curricular listo para una landing educativa interactiva sobre fundamentos practicos de IA. Cubre los modulos 0 a 4 de la ruta: diagnostico inicial, fundamentos de IA, prompt como instruccion, contexto/tokens y Markdown como sistema de contexto.

El contenido esta pensado para mostrarse en pantalla, alimentar tarjetas interactivas, ejercicios guiados, evaluaciones simples y estados de desbloqueo.

---

## Modulo 0: Diagnostico inicial

### Titulo visible

Diagnostico inicial: ubica tu punto de partida

### Objetivo breve

Identificar el nivel actual de familiaridad con IA y elegir una tarea real que se usara durante la ruta de aprendizaje.

### Explicacion principal

Antes de aprender tecnicas o conceptos, conviene saber desde donde empieza cada persona. Este diagnostico no busca calificar ni comparar al equipo. Su funcion es reconocer experiencia previa, detectar conceptos que pueden estar poco claros y preparar una ruta comun.

La IA se aprende mejor cuando se conecta con trabajo real. Por eso, ademas de responder algunas preguntas, cada persona elegira una tarea cotidiana que le gustaria mejorar con IA. Esa tarea se reutilizara en los siguientes modulos para construir prompts, decidir contexto, estructurar informacion y preparar mejores instrucciones.

El resultado del diagnostico debe ayudar a la persona a ubicarse en uno de estos puntos:

- Explorador: ha usado IA de forma ocasional y necesita bases claras.
- Practico: ya usa IA en tareas simples y quiere mejorar consistencia.
- Estructurado: ya usa prompts, contexto o documentos y quiere volverlo repetible.
- Avanzado inicial: entiende varios conceptos y puede avanzar rapido hacia tools, skills y agentes.

### Conceptos clave

- Uso previo de IA: experiencia acumulada usando herramientas como chatbots, asistentes o generadores de contenido.
- Prompt: instruccion que se le da a la IA para guiar una respuesta.
- Contexto: informacion disponible para que la IA pueda responder mejor.
- Tokens: unidades de texto que afectan limite, costo y velocidad.
- Markdown: formato de texto estructurado que ayuda a organizar instrucciones y conocimiento.

### Ejemplo aplicado

Una persona del equipo quiere usar IA para preparar reuniones con clientes. En el diagnostico indica que ha usado chatbots para redactar correos, pero no sabe que son tokens ni ha usado archivos `.md`.

Su tarea elegida queda asi:

```text
Preparar una reunion con cliente usando notas previas, objetivo de la reunion y pendientes abiertos.
```

Durante los siguientes modulos, esa misma tarea servira para crear un prompt estructurado, decidir que contexto incluir y convertir la preparacion en una plantilla Markdown.

### Actividad interactiva

Mostrar un quiz breve de 5 a 7 preguntas con respuestas tipo escala o seleccion multiple.

Preguntas sugeridas:

1. Que tanto has usado herramientas de IA en tu trabajo.
2. Que tan comodo te sientes escribiendo prompts.
3. Has usado prompts con objetivo, contexto y formato esperado.
4. Sabes que son tokens.
5. Has usado archivos `.md` para documentar informacion.
6. Sabes diferenciar chatbot, agente, tool y skill.
7. Que tarea real te gustaria mejorar con IA.

Al final, la interfaz debe pedir que la persona seleccione o escriba una tarea real.

Opciones sugeridas:

- Preparar una reunion.
- Resumir documentos.
- Generar una propuesta.
- Analizar feedback.
- Crear reportes.
- Documentar un proceso.
- Revisar o mejorar textos.

### Feedback esperado

El feedback debe ser breve, no intimidante y orientado a accion.

Ejemplo de feedback:

```text
Tu punto de partida es Practico. Ya has usado IA para tareas concretas, pero todavia puedes mejorar resultados estructurando mejor tus prompts y el contexto. Usaremos tu tarea seleccionada para practicar durante la ruta.
```

Si la persona muestra poca experiencia:

```text
Tu punto de partida es Explorador. La ruta empezara con conceptos base y ejemplos simples. No necesitas conocimiento tecnico previo.
```

Si la persona muestra mayor experiencia:

```text
Tu punto de partida es Estructurado. Puedes avanzar con rapidez, pero valida los fundamentos: seran la base para disenar mejores flujos y agentes.
```

### Criterio de desbloqueo

El siguiente modulo se desbloquea cuando la persona:

- Completa el quiz inicial.
- Selecciona o escribe una tarea real para mejorar con IA.

No hay respuestas correctas o incorrectas en este modulo.

### Copy de boton/CTA

Comenzar diagnostico

CTA secundario:

```text
Guardar mi tarea y continuar
```

---

## Modulo 1: Fundamentos de IA

### Titulo visible

Fundamentos de IA: que hace realmente un modelo

### Objetivo breve

Construir una base comun sobre IA generativa, modelos de lenguaje, capacidades utiles y limites reales.

### Explicacion principal

Piensa en la IA generativa como alguien que arma respuestas a partir de lo que le pides y lo que le das. Puede escribir, resumir, comparar, clasificar, cambiar de formato, proponer planes y ayudarte a pensar.

Por dentro, un modelo de lenguaje (LLM) funciona como un autocompletado muy potente: va escribiendo palabra por palabra lo que le parece mas probable, segun todo lo que ha visto antes y la informacion que tu le diste. No "sabe" las cosas como una persona: las completa.

Por eso a veces suena muy seguro y aun asi se equivoca, o llena huecos con suposiciones cuando le falta informacion. La clave para trabajar bien con IA es darle contexto claro y revisar lo que entrega.

Tambien es importante distinguir entre conceptos que suelen mezclarse:

- Modelo: capacidad base que procesa y genera informacion.
- Aplicacion de IA: producto que usa uno o varios modelos.
- Chatbot: interfaz conversacional para pedir y recibir respuestas.
- Agente: sistema que usa un modelo con instrucciones, contexto, herramientas y ciclos de accion.
- Automatizacion: flujo definido que ejecuta pasos repetibles, con o sin IA.

La meta de este modulo es que la persona deje de ver la IA como magia y empiece a verla como una herramienta potente, pero limitada, que funciona mejor cuando la tarea esta bien definida.

### Conceptos clave

- IA generativa: tecnologia que crea contenido a partir de instrucciones y contexto.
- LLM: modelo de lenguaje que procesa y genera texto.
- Modelo vs aplicacion: el modelo es la capacidad; la aplicacion es la experiencia que la usa.
- Alucinacion: respuesta incorrecta o inventada que puede sonar convincente.
- Verificacion: practica de revisar datos, supuestos y calidad antes de usar una salida.

### Ejemplo aplicado

Tarea real:

```text
Resumir tres documentos internos para preparar una propuesta comercial.
```

Uso razonable de IA:

- Extraer temas principales.
- Identificar requisitos del cliente.
- Comparar diferencias entre documentos.
- Proponer una estructura de propuesta.
- Separar dudas o informacion faltante.

Uso riesgoso de IA:

- Inventar precios que no estan en los documentos.
- Confirmar datos actuales sin acceso a fuentes.
- Asumir compromisos comerciales no aprobados.
- Presentar conclusiones sin indicar incertidumbre.

La diferencia no esta en si se usa IA o no, sino en que se le pide, con que contexto y bajo que criterios de revision.

### Actividad interactiva

Mostrar tarjetas comparativas para que la persona clasifique conceptos y situaciones.

Bloques sugeridos:

- Modelo o aplicacion.
- Chatbot o agente.
- Tarea razonable o tarea riesgosa.
- Respuesta util o respuesta convincente pero no verificable.

Ejemplos para clasificar:

- "ChatGPT como producto donde escribo mensajes": aplicacion.
- "Sistema que genera texto a partir de instrucciones": modelo.
- "Extraer tareas de una minuta": tarea razonable.
- "Confirmar una noticia actual sin acceso a internet": tarea riesgosa.
- "Planear, consultar documentos, corregir y entregar": comportamiento de agente.

### Feedback esperado

El feedback debe reforzar la distincion entre capacidad y limite.

Ejemplo:

```text
Correcto. Resumir una minuta es una tarea adecuada porque la IA trabaja con informacion disponible en el contexto. En cambio, confirmar datos actuales requiere una fuente o herramienta externa.
```

Si la persona clasifica mal:

```text
Revisa la fuente de informacion. Si la IA no tiene acceso al dato, puede producir una respuesta plausible pero incorrecta. En esos casos necesitas aportar contexto, usar una herramienta o verificar manualmente.
```

### Criterio de desbloqueo

El siguiente modulo se desbloquea cuando la persona responde correctamente al menos 3 de 4 preguntas de evaluacion.

Preguntas sugeridas:

1. Por que una IA puede sonar segura y estar equivocada.
2. Cual es la diferencia entre modelo y aplicacion.
3. Que tarea es razonable pedirle a un LLM.
4. Que riesgo aparece cuando el contexto es incompleto.

### Copy de boton/CTA

Aprender a escribir mejores prompts

CTA secundario:

```text
Revisar conceptos antes de continuar
```

---

## Modulo 2: Prompt como instruccion

### Titulo visible

Prompt como instruccion: pedir con claridad

### Objetivo breve

Entender que un prompt efectivo es una instruccion disenada, no solo una pregunta escrita en lenguaje natural.

### Explicacion principal

Un prompt es la instruccion que guia la respuesta de una IA. Cuando el prompt es vago, la IA tiene que adivinar objetivo, alcance, tono, formato y criterios de calidad. Eso aumenta la probabilidad de recibir una respuesta generica, incompleta o dificil de usar.

Un buen prompt reduce ambiguedad. Debe explicar que se quiere lograr, que informacion debe considerar la IA, que tarea debe ejecutar, que restricciones debe respetar y como debe entregar la salida.

Una estructura practica es:

```md
# Rol

# Objetivo

# Contexto

# Tarea

# Restricciones

# Formato de salida

# Criterios de calidad
```

No todos los prompts necesitan todas las secciones. Para tareas simples, una version compacta puede ser suficiente. Para tareas importantes o repetibles, conviene usar una estructura mas completa.

La clave es separar la intencion de la informacion. El objetivo dice que se busca. El contexto da los datos necesarios. La tarea define lo que la IA debe hacer. El formato evita respuestas dificiles de reutilizar. Los criterios de calidad permiten evaluar si la salida sirve.

### Conceptos clave

- Objetivo: resultado que se quiere lograr.
- Contexto: informacion que la IA debe considerar.
- Tarea: accion concreta que se solicita.
- Restricciones: limites de tono, alcance, datos, longitud o estilo.
- Formato de salida: estructura esperada de la respuesta.

### Ejemplo aplicado

Prompt debil:

```text
Ayudame a preparar una reunion con cliente.
```

Problema:

- No dice quien es el cliente.
- No indica el objetivo de la reunion.
- No define que materiales existen.
- No pide una salida concreta.
- No establece criterios de calidad.

Prompt mejorado:

```md
# Objetivo

Preparar una reunion de seguimiento con un cliente actual.

# Contexto

El cliente quiere revisar avances, pendientes y riesgos del proyecto. Tengo notas de la ultima reunion y una lista de tareas abiertas.

# Tarea

Genera una guia de preparacion para la reunion.

# Restricciones

- No inventes acuerdos, fechas ni responsables.
- Separa hechos de dudas.
- Indica que informacion falta.

# Formato de salida

Entrega:

1. Resumen ejecutivo.
2. Temas a revisar.
3. Preguntas para el cliente.
4. Riesgos o pendientes.
5. Proximos pasos sugeridos.

# Criterios de calidad

La guia debe ser clara, accionable y util para una reunion de 30 minutos.
```

### Actividad interactiva

Mostrar un editor comparativo con dos columnas:

- Columna izquierda: prompt debil.
- Columna derecha: prompt mejorado.

La persona debe identificar o completar los componentes faltantes:

- Objetivo.
- Contexto.
- Tarea.
- Restricciones.
- Formato de salida.
- Criterios de calidad.

Despues, la persona toma la tarea seleccionada en el modulo 0 y escribe su primer prompt estructurado.

### Feedback esperado

El feedback debe evaluar componentes, no estilo personal.

Ejemplo de feedback automatico:

```text
Tu prompt ya tiene objetivo, tarea y formato. Para hacerlo mas confiable, agrega contexto relevante y al menos un criterio de calidad.
```

Si el prompt esta completo:

```text
Buen prompt estructurado. La IA ya tiene una meta clara, informacion de referencia, una tarea concreta y una forma esperada de responder.
```

Si falta formato:

```text
La instruccion puede producir una respuesta util, pero dificil de reutilizar. Agrega un formato de salida: tabla, checklist, resumen ejecutivo, lista de acciones o estructura por secciones.
```

### Criterio de desbloqueo

El siguiente modulo se desbloquea cuando el prompt cumple al menos 4 de estos 5 criterios:

- Tiene objetivo claro.
- Incluye contexto relevante.
- Define una tarea concreta.
- Incluye formato esperado.
- Define al menos un criterio de calidad.

### Copy de boton/CTA

Construir mi primer prompt estructurado

CTA secundario:

```text
Validar prompt y continuar
```

---

## Modulo 3: Contexto y tokens

### Titulo visible

Contexto y tokens: decidir que informacion si importa

### Objetivo breve

Entender que el contexto tiene limite, costo e impacto en la calidad, y aprender a decidir que informacion incluir, resumir o separar.

### Explicacion principal

El contexto es todo lo que la IA tiene enfrente para responder: tus instrucciones, los documentos que pegaste, la conversacion previa, ejemplos y datos. Si le falta algo importante, responde incompleto. Si le sobra ruido, se distrae.

Los tokens son la forma en que la IA "cuenta" el texto: pedacitos de palabras que lee y escribe. Piensa en ellos como la cuenta del taxi: mientras mas texto entra y sale, mas caro, mas lento y, a veces, peor el resultado. En concreto, los tokens afectan tres cosas:

- Cuanta informacion cabe de una vez.
- Cuanto cuesta cada respuesta.
- Que tan rapido responde.

Mas contexto no siempre es mejor. Un bloque largo y desordenado mete ruido y le quita foco a la IA. Trabajar bien con IA implica decidir:

- Que informacion es necesaria.
- Que informacion es secundaria.
- Que debe resumirse.
- Que debe dividirse en pasos.
- Que debe convertirse en documento reutilizable.
- Que requiere una fuente o herramienta externa.

La pregunta practica no es "cuanto contexto puedo pegar", sino "que contexto necesita el modelo para resolver esta tarea con calidad".

### Conceptos clave

- Contexto: informacion disponible para responder.
- Token: unidad de texto procesada por el modelo.
- Ventana de contexto: limite de informacion que el modelo puede considerar.
- Ruido contextual: informacion que no ayuda y puede distraer.
- Chunking: dividir informacion en bloques manejables y relevantes.

### Ejemplo aplicado

Escenario:

```text
Necesitas que la IA prepare un resumen ejecutivo de un proyecto a partir de 6 documentos, 2 minutas, 1 propuesta vieja y una cadena larga de correos.
```

Estrategia debil:

```text
Pegar todo en el chat y pedir "hazme un resumen".
```

Riesgos:

- Se consume mucho contexto.
- Entra informacion repetida o contradictoria.
- El modelo puede priorizar detalles secundarios.
- La respuesta puede ser larga pero poco accionable.

Estrategia mejor:

1. Definir el objetivo del resumen.
2. Identificar documentos realmente relevantes.
3. Separar instrucciones de datos.
4. Resumir minutas largas antes de usarlas.
5. Pedir una salida con formato y criterios.
6. Indicar dudas o informacion faltante.

Prompt ejemplo:

```md
# Objetivo

Preparar un resumen ejecutivo del estado del proyecto para direccion.

# Contexto disponible

Incluyo solo las secciones relevantes de la propuesta actual, la ultima minuta y la lista de pendientes abiertos.

# Tarea

Resume estado, avances, riesgos, decisiones necesarias y proximos pasos.

# Restricciones

- No uses informacion de propuestas anteriores salvo que este marcada como vigente.
- Si hay contradicciones, senalalas.
- No inventes fechas ni responsables.

# Formato

Tabla con columnas: tema, estado, evidencia, riesgo, accion sugerida.
```

### Actividad interactiva

Crear un simulador de presupuesto de contexto.

La persona ve varios bloques de informacion:

- Notas recientes.
- Documento principal.
- Correos antiguos.
- Tabla de pendientes.
- Comentarios informales.
- Politica interna.
- Ejemplo de salida deseada.

La tarea es elegir que incluir para resolver un caso concreto. La interfaz muestra impacto estimado en:

- Claridad.
- Costo.
- Riesgo de ruido.
- Probabilidad de respuesta accionable.

Tambien puede pedir a la persona elegir una estrategia:

- Pegar contexto completo.
- Resumir primero.
- Dividir la tarea.
- Convertir informacion en `.md`.
- Usar una fuente externa.

### Feedback esperado

El feedback debe explicar la decision, no solo marcar correcto o incorrecto.

Ejemplo:

```text
Buena seleccion. Incluiste el documento principal, la minuta reciente y la tabla de pendientes. Dejaste fuera correos antiguos que podian agregar ruido. Esta combinacion mejora claridad y reduce tokens.
```

Si la persona incluye demasiado:

```text
La seleccion contiene informacion util, pero tambien bloques secundarios. Antes de pedir una respuesta final, resume o elimina el material que no afecta la decision.
```

Si la persona incluye muy poco:

```text
La instruccion esta clara, pero falta evidencia. Agrega los datos necesarios para que la IA no tenga que asumir avances, responsables o riesgos.
```

### Criterio de desbloqueo

El siguiente modulo se desbloquea cuando la persona elige una estrategia razonable en al menos 2 de 3 escenarios.

Escenarios sugeridos:

1. Documento largo con secciones irrelevantes.
2. Historial de conversacion demasiado extenso.
3. Tarea que requiere informacion de varias fuentes.

Una estrategia razonable debe justificar al menos una de estas decisiones:

- Incluir contexto completo porque todo es relevante.
- Resumir antes de responder.
- Dividir la tarea en pasos.
- Separar instrucciones y datos.
- Crear un archivo `.md` para contexto reutilizable.

### Copy de boton/CTA

Optimizar mi contexto

CTA secundario:

```text
Resolver escenarios y continuar
```

---

## Modulo 4: Markdown como sistema de contexto

### Titulo visible

Markdown como sistema de contexto: ordenar para reutilizar

### Objetivo breve

Usar archivos `.md` para estructurar conocimiento, instrucciones, procesos y plantillas que mejoren la calidad de las respuestas de IA.

### Explicacion principal

Markdown es la forma mas simple de darle orden a un texto usando solo signos: un `#` hace un titulo, un guion hace una lista. Nada de herramientas complicadas. A las personas les resulta facil de leer y a la IA le ayuda muchisimo, porque ve clarito que es titulo, que es paso y que es dato.

Un archivo `.md` bien organizado puede convertir informacion desordenada en contexto claro. En lugar de pegar instrucciones distintas cada vez, el equipo puede crear documentos reutilizables para briefs, procesos, guias de estilo, plantillas de prompt, checklists, bases de conocimiento o instrucciones de agente.

La ventaja no esta solo en el formato. Esta en el orden:

- Encabezados para separar temas.
- Listas para pasos o criterios.
- Tablas para comparar informacion.
- Bloques de codigo para plantillas copiables.
- Secciones fijas para reducir ambiguedad.

Markdown ayuda a que la IA reciba contexto con estructura. Eso mejora la consistencia, facilita la revision y permite convertir conocimiento del equipo en material operativo.

### Conceptos clave

- Markdown: formato de texto estructurado y legible.
- Encabezados: titulos que organizan secciones y jerarquia.
- Plantilla: estructura reutilizable para repetir una tarea con calidad.
- Base de conocimiento: documento o conjunto de documentos con informacion de referencia.
- Criterios de calidad: condiciones que permiten evaluar si una salida sirve.

### Ejemplo aplicado

Texto desordenado:

```text
Cuando preparemos reuniones con clientes hay que revisar pendientes, buscar la ultima minuta, ver si hay riesgos, preparar preguntas y llevar un resumen. Tambien conviene revisar fechas y no prometer cosas que no esten aprobadas. El resultado deberia servir para una reunion de 30 minutos.
```

Version Markdown:

```md
# Preparacion de reunion con cliente

## Objetivo

Preparar una guia clara para una reunion de seguimiento de 30 minutos.

## Entradas necesarias

- Ultima minuta.
- Lista de pendientes abiertos.
- Riesgos conocidos.
- Objetivo de la reunion.

## Pasos

1. Revisar acuerdos previos.
2. Identificar pendientes y responsables.
3. Detectar riesgos o bloqueos.
4. Preparar preguntas para el cliente.
5. Proponer proximos pasos.

## Restricciones

- No inventar fechas, acuerdos ni responsables.
- No prometer acciones no aprobadas.
- Separar hechos de dudas.

## Salida esperada

- Resumen ejecutivo.
- Temas a revisar.
- Preguntas clave.
- Riesgos.
- Proximos pasos.

## Criterios de calidad

- Debe ser accionable.
- Debe caber en una reunion de 30 minutos.
- Debe indicar informacion faltante.
```

La segunda version funciona mejor como contexto porque separa objetivo, entradas, pasos, restricciones y salida esperada.

### Actividad interactiva

Mostrar un transformador de texto a Markdown.

La interfaz presenta un proceso desordenado y pide a la persona organizarlo en secciones:

- Objetivo.
- Contexto.
- Entradas necesarias.
- Pasos.
- Restricciones.
- Salida esperada.
- Criterios de calidad.

Despues, la persona convierte la tarea seleccionada en el modulo 0 en una plantilla `.md` minima.

Plantilla sugerida:

```md
# Nombre de la tarea

## Objetivo

## Contexto

## Entradas necesarias

## Pasos

## Restricciones

## Salida esperada

## Criterios de calidad
```

### Feedback esperado

El feedback debe enfocarse en claridad estructural y reutilizacion.

Ejemplo:

```text
Buena estructura. Separaste objetivo, entradas, pasos y salida esperada. Esto ayuda a que otra persona o una IA puedan ejecutar la tarea con menos ambiguedad.
```

Si falta salida esperada:

```text
El proceso ya tiene pasos, pero falta definir que debe producir. Agrega una seccion de salida esperada para que la IA sepa como entregar el resultado.
```

Si todo esta en una sola seccion:

```text
El contenido es util, pero todavia esta mezclado. Divide instrucciones, datos y criterios en encabezados separados para que el contexto sea mas facil de usar.
```

### Criterio de desbloqueo

El siguiente modulo se desbloquea cuando la plantilla Markdown cumple al menos 4 de estos 5 criterios:

- Usa encabezados claros.
- Separa contexto de instrucciones.
- Define entradas necesarias.
- Define salida esperada.
- Incluye criterios de calidad.

### Copy de boton/CTA

Crear mi plantilla Markdown

CTA secundario:

```text
Validar plantilla y desbloquear tools y skills
```

---

## Nota para integracion en landing

Cada modulo puede renderizarse como una pantalla o seccion independiente con:

- Bloque de objetivo.
- Explicacion principal.
- Tarjetas de conceptos clave.
- Ejemplo aplicado.
- Actividad interactiva.
- Estado de feedback.
- Validacion de desbloqueo.
- CTA principal.

La tarea real elegida en el modulo 0 debe persistir durante los modulos 1 a 4 para que la experiencia se sienta continua y aplicada.
