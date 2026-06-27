# Contenido curricular: modulos 5 a 9

## Proposito

Este documento contiene el copy curricular listo para una landing educativa interactiva sobre fundamentos practicos de IA. Cubre los modulos avanzados de la ruta: Tools y Skills, MCP, Loops, Agentes y Biblioteca de recursos.

Cada modulo esta escrito para convertirse en secciones, tarjetas, actividades, evaluaciones y llamadas a la accion dentro de la landing.

---

## Modulo 5: Tools y Skills

### Titulo visible

Tools y Skills: de pedir respuestas a ejecutar trabajo

### Objetivo breve

Entender cuando una IA necesita una herramienta externa y cuando conviene convertir una forma de trabajo en una skill reutilizable.

### Explicacion principal

Un chat de IA contesta con texto, pero muchas tareas reales piden algo mas: buscar un dato, abrir un archivo, hacer una accion o seguir siempre el mismo metodo.

Una `tool` (herramienta) le da a la IA una mano extra para hacer algo que ella sola no puede: buscar en internet, leer un archivo, ver tu calendario, consultar una base de datos. Es como darle acceso a una app.

Una `skill` (habilidad) es como una receta guardada: dice cuando usarla, que necesita, que pasos seguir y como debe quedar el resultado. Sirve para que una buena forma de trabajar se repita igual de bien cada vez.

La diferencia practica es esta:

- Un prompt simple resuelve una solicitud puntual.
- Una plantilla ayuda a repetir un tipo de prompt.
- Una skill documenta un metodo completo.
- Una tool conecta la IA con una capacidad externa.

El objetivo no es usar tools o skills por moda. El objetivo es elegir el nivel correcto de estructura para cada tarea.

### Conceptos clave

- `Tool`: capacidad externa que la IA puede invocar para obtener datos o ejecutar acciones.
- `Skill`: metodo documentado para resolver una tarea con consistencia.
- `Permisos`: limites sobre lo que una herramienta puede leer, modificar o ejecutar.
- `Entrada y salida`: informacion que la skill necesita y resultado que debe producir.
- `Verificacion`: revision final para confirmar que la salida cumple criterios de calidad.

### Ejemplo aplicado

Caso: el equipo necesita preparar un resumen semanal de reuniones con acuerdos, responsables y riesgos.

- Si es una sola reunion, basta un prompt estructurado.
- Si se repite cada semana, conviene crear una plantilla.
- Si debe seguir siempre el mismo metodo de revision, conviene crear una skill.
- Si ademas debe leer calendarios, abrir minutas en Drive o actualizar un tablero, necesita tools.

Resultado recomendado: una skill de "Resumen semanal de reuniones" que indique que archivos revisar, como extraer acuerdos, como detectar riesgos y que formato entregar. Si el sistema puede conectarse a Drive o Calendar, esas conexiones serian tools.

### Actividad interactiva

Selector de estrategia.

La landing muestra cinco escenarios y la persona debe elegir la opcion mas adecuada:

- Prompt simple.
- Plantilla.
- Skill.
- Tool.

Escenarios sugeridos:

1. Responder una duda puntual sobre un concepto.
2. Generar un reporte semanal con la misma estructura.
3. Consultar eventos en un calendario.
4. Revisar prompts con una rubrica consistente.
5. Buscar archivos internos relacionados con un cliente.

### Feedback esperado

El feedback debe explicar por que la opcion elegida es adecuada o limitada.

Ejemplos:

- "Correcto: consultar un calendario requiere una tool porque la IA necesita acceso a un sistema externo."
- "Casi: una plantilla ayuda a repetir el formato, pero si tambien hay pasos, criterios y revision, una skill es mas adecuada."
- "Revisa el alcance: una duda puntual no necesita una tool si no requiere datos externos."

### Criterio de desbloqueo

Clasificar correctamente al menos 4 de 5 escenarios y completar una mini plantilla de skill con nombre, objetivo, entradas, pasos y salida esperada.

### Copy de boton/CTA

Crear mi primera skill

---

## Modulo 6: MCP

### Titulo visible

MCP: conectar IA con herramientas, datos y sistemas

### Objetivo breve

Comprender MCP como un estandar para que aplicaciones de IA y agentes usen herramientas o datos externos de forma estructurada.

### Explicacion principal

MCP (Model Context Protocol) es, en palabras simples, un "enchufe estandar" que deja que la IA se conecte con tus herramientas y datos reales.

Sin MCP, la IA solo sabe lo que tu le pegas en el chat. Con MCP, un agente puede asomarse a tu Drive, tu calendario o tu CRM y usar lo que encuentra, siempre con los permisos que tu le des. Es como pasar de dictarle todo a darle una llave (controlada) para que consulte por su cuenta.

Un flujo simple se puede entender asi:

```text
Usuario -> Aplicacion de IA -> Cliente MCP -> Servidor MCP -> Sistema externo -> Resultado -> IA
```

El servidor MCP puede exponer herramientas, recursos o datos. Por ejemplo: archivos de Drive, eventos de calendario, documentos internos, tickets de soporte, bases de datos, CRM o herramientas de diseno.

MCP es util cuando la tarea requiere informacion o acciones que no estan dentro del prompt. No es necesario para redactar una idea breve, resumir un texto pegado por el usuario o hacer una lluvia de ideas sin datos externos.

La decision importante no es "usar MCP o no usar MCP". La decision importante es: que sistema externo necesita la IA, con que permisos, para que objetivo y con que verificacion.

### Conceptos clave

- `Cliente MCP`: parte de la aplicacion de IA que se conecta con servidores MCP.
- `Servidor MCP`: componente que expone herramientas, recursos o datos.
- `Herramientas expuestas`: acciones disponibles para el agente, como buscar, leer, crear o actualizar.
- `Recursos`: informacion disponible para consultar, como archivos, documentos o registros.
- `Trazabilidad`: capacidad de saber que herramienta se uso, con que entrada y que resultado devolvio.

### Ejemplo aplicado

Caso: un agente de preparacion de reuniones.

El usuario pide: "Preparame para mi reunion con el cliente de manana".

Sin MCP, el usuario tendria que pegar manualmente la agenda, notas previas, documentos del cliente y contexto comercial.

Con MCP, el agente podria:

1. Consultar el calendario.
2. Identificar la reunion correcta.
3. Buscar documentos asociados en Drive.
4. Revisar notas internas.
5. Entregar un brief con objetivos, contexto, riesgos y preguntas recomendadas.

El valor de MCP esta en conectar la IA con informacion real y actualizada, no en hacer mas complejo el flujo.

### Actividad interactiva

Mapa de conexion.

La persona elige un caso de uso y arma el flujo MCP seleccionando:

- Quien hace la solicitud.
- Que agente o aplicacion actua.
- Que sistema externo se necesita.
- Que herramienta debe exponerse.
- Que datos vuelven al agente.
- Que riesgo de permisos existe.
- Que verificacion debe ocurrir antes de entregar.

### Feedback esperado

El feedback debe reforzar decisiones de arquitectura y permisos.

Ejemplos:

- "Correcto: este caso requiere MCP porque la IA necesita leer informacion que vive fuera del chat."
- "Atencion: si la herramienta puede modificar datos, debe existir aprobacion humana o un limite claro."
- "MCP seria excesivo aqui: el usuario ya proporciono todo el texto necesario y no hay sistema externo que consultar."

### Criterio de desbloqueo

Explicar correctamente un caso donde MCP aporta valor y un caso donde MCP no es necesario. La respuesta debe mencionar sistema externo, herramienta requerida, permiso principal y verificacion.

### Copy de boton/CTA

Armar mi flujo MCP

---

## Modulo 7: Loops

### Titulo visible

Loops: el ciclo de trabajo de un agente confiable

### Objetivo breve

Entender como un agente avanza por ciclos de plan, accion, observacion, correccion y verificacion antes de entregar un resultado.

### Explicacion principal

Un chatbot responde una vez y ya. Un agente trabaja en ciclos, parecido a como trabaja una persona: intenta algo, ve como salio y ajusta.

Ese ciclo se llama `loop` (bucle). Gracias a el, el agente no se queda con su primera respuesta: entiende el objetivo, planea, actua, revisa que paso, corrige si algo fallo y verifica antes de entregar.

Un loop basico se ve asi:

```text
Objetivo -> Plan -> Accion -> Observacion -> Correccion -> Verificacion -> Entrega
```

La parte mas importante no es que el agente "haga muchas cosas". La parte importante es que tenga criterios para decidir si va bien, si debe corregir y cuando debe detenerse.

Sin verificacion, un agente puede entregar informacion incompleta, usar mal una herramienta o asumir que una accion funciono cuando en realidad fallo. Por eso un buen loop incluye criterios de exito, limites de accion y revision final.

### Conceptos clave

- `Plan`: pasos que el agente propone antes de actuar.
- `Accion`: ejecucion de una tarea, con o sin herramienta.
- `Observacion`: revision del resultado de la accion.
- `Correccion`: ajuste del plan cuando hay errores, datos faltantes o resultados pobres.
- `Criterio de exito`: condicion que indica si el trabajo esta listo para entregarse.

### Ejemplo aplicado

Caso: agente que convierte feedback de clientes en temas prioritarios.

Loop recomendado:

1. Entender el objetivo: identificar patrones accionables.
2. Planear: revisar comentarios, agrupar temas, contar frecuencia y detectar severidad.
3. Actuar: procesar los comentarios disponibles.
4. Observar: revisar si hay comentarios duplicados, ambiguos o fuera de tema.
5. Corregir: separar supuestos de hallazgos y pedir mas datos si la muestra es insuficiente.
6. Verificar: confirmar que cada tema tiene evidencia.
7. Entregar: tabla con tema, evidencia, impacto, recomendacion y nivel de confianza.

### Actividad interactiva

Ordenador de loop.

La landing muestra pasos desordenados de un flujo de agente. La persona debe ordenarlos y detectar que elemento falta.

Variantes:

- Falta verificacion.
- Falta criterio de exito.
- Falta observacion del resultado.
- Falta limite antes de ejecutar una accion sensible.

### Feedback esperado

El feedback debe explicar la consecuencia de cada parte faltante.

Ejemplos:

- "Correcto: observar el resultado va despues de actuar. Sin observacion, el agente no sabe si la accion funciono."
- "Falta verificacion: el agente podria entregar una salida que no cumple el objetivo."
- "Buen limite: si una accion afecta datos reales, debe pedir confirmacion antes de ejecutarla."

### Criterio de desbloqueo

Ordenar correctamente el loop, identificar una falla en un flujo incompleto y definir al menos una verificacion concreta para la tarea elegida por la persona.

### Copy de boton/CTA

Disenar mi loop

---

## Modulo 8: Agentes

### Titulo visible

Agentes: disenar sistemas pequenos, utiles y verificables

### Objetivo breve

Disenar un agente simple para una tarea real, con objetivo claro, herramientas justificadas, loop definido, limites y criterios de exito.

### Explicacion principal

Un agente es un sistema que usa un modelo para perseguir un objetivo. Puede usar instrucciones, contexto, herramientas, memoria y loops de trabajo.

La diferencia con un chatbot no es solo que el agente "hace mas". La diferencia es que el agente tiene una tarea definida, puede tomar pasos intermedios, usar herramientas si aplica, observar resultados y verificar antes de entregar.

Un buen agente debe ser pequeno. Si intenta resolver demasiadas cosas, se vuelve dificil de controlar, evaluar y mejorar.

Para disenar un agente confiable, hay que definir:

- Que objetivo persigue.
- Para quien trabaja.
- Que entradas necesita.
- Que herramientas puede usar.
- Que pasos sigue.
- Que no debe hacer.
- Como verifica calidad.
- Cuando debe pedir aprobacion humana.

La regla practica: un agente debe tener suficiente autonomia para ahorrar trabajo, pero suficientes limites para evitar errores costosos.

### Conceptos clave

- `Objetivo`: resultado concreto que el agente debe lograr.
- `Alcance`: frontera entre lo que el agente hace y lo que no hace.
- `Herramientas justificadas`: tools necesarias para cumplir la tarea, no herramientas agregadas por conveniencia.
- `Human-in-the-loop`: punto donde una persona debe revisar o aprobar.
- `Criterios de exito`: condiciones observables para considerar que el agente hizo bien su trabajo.

### Ejemplo aplicado

Agente: Preparador de reuniones comerciales.

Objetivo: generar un brief accionable antes de una reunion con un prospecto o cliente.

Entradas:

- Nombre del cliente.
- Fecha de la reunion.
- Objetivo comercial.
- Notas previas o documentos disponibles.

Herramientas posibles:

- Calendario para ubicar la reunion.
- Drive para consultar documentos.
- CRM para revisar etapa y oportunidades.

Loop:

1. Entender que reunion debe preparar.
2. Revisar informacion disponible.
3. Detectar datos faltantes.
4. Resumir contexto relevante.
5. Identificar riesgos, oportunidades y preguntas.
6. Verificar que no haya datos inventados.
7. Entregar brief final.

Limite operativo: no enviar correos, modificar CRM ni prometer acciones al cliente sin aprobacion humana.

### Actividad interactiva

Agent Builder.

La persona completa un formulario guiado para crear el blueprint de un agente:

```md
# Nombre del agente

# Objetivo

# Usuario objetivo

# Tarea principal

# Fuera de alcance

# Contexto requerido

# Herramientas necesarias

# Loop de trabajo

# Verificaciones

# Criterios de exito

# Riesgos

# Human-in-the-loop
```

### Feedback esperado

El feedback debe evaluar si el agente esta acotado y listo para prototiparse.

Ejemplos:

- "Buen objetivo: es observable y se puede evaluar."
- "El alcance esta demasiado amplio. Conviene separar este agente en dos tareas."
- "La herramienta esta justificada porque el agente necesita consultar informacion externa."
- "Falta human-in-the-loop para acciones que podrian afectar datos reales o comunicacion con clientes."

### Criterio de desbloqueo

Cumplir al menos 5 de 7 criterios:

- Objetivo claro.
- Alcance acotado.
- Entradas definidas.
- Herramientas justificadas.
- Loop con verificacion.
- Riesgos identificados.
- Salida esperada definida.

### Copy de boton/CTA

Construir mi blueprint de agente

---

## Modulo 9: Biblioteca de recursos

### Titulo visible

Biblioteca de recursos: plantillas para trabajar mejor con IA

### Objetivo breve

Consolidar plantillas, checklists, rubricas y ejemplos para que la ruta de aprendizaje se convierta en practica diaria.

### Explicacion principal

La biblioteca es el espacio de consulta permanente de la landing. No introduce un concepto nuevo; convierte lo aprendido en recursos reutilizables.

Al completar la ruta, la persona debe poder volver a esta seccion para copiar una plantilla, revisar un criterio, consultar una definicion o elegir que enfoque usar para una tarea.

La biblioteca debe ayudar a responder preguntas practicas:

- Necesito un prompt simple o una plantilla?
- Esta tarea requiere una skill?
- Hace falta una tool o MCP?
- Este flujo necesita un agente?
- Como verifico si la salida de la IA es buena?
- Que formato uso para documentar un proceso en `.md`?

Este modulo funciona como cierre de la experiencia y como puente hacia el trabajo real del equipo.

### Conceptos clave

- `Plantillas`: estructuras copiables para prompts, procesos, skills, loops y agentes.
- `Checklists`: listas de revision para evitar omisiones.
- `Rubricas`: criterios para evaluar calidad de prompts, respuestas o agentes.
- `Glosario`: definiciones breves para mantener lenguaje comun.
- `Casos de uso`: ejemplos por area o tipo de trabajo.

### Ejemplo aplicado

Caso: una persona quiere automatizar la preparacion de un reporte mensual.

Puede usar la biblioteca asi:

1. Consultar la tabla de decision para elegir entre prompt, plantilla, skill, tool, MCP o agente.
2. Usar la plantilla de proceso `.md` para documentar como se hace hoy.
3. Usar la plantilla de skill si el flujo se repetira manualmente con IA.
4. Usar la plantilla de agent loop si el flujo requiere pasos, herramientas y verificacion.
5. Evaluar el resultado con la rubrica de calidad.

### Actividad interactiva

Explorador de recursos.

La landing muestra filtros y buscador:

- Tipo: plantilla, checklist, rubrica, glosario, ejemplo.
- Nivel: basico, intermedio, avanzado.
- Uso: prompt, contexto, Markdown, skill, MCP, loop, agente.

La persona selecciona una situacion de trabajo y la interfaz recomienda recursos relacionados.

### Feedback esperado

El feedback debe orientar a la persona hacia el recurso correcto.

Ejemplos:

- "Para una tarea repetible, empieza con la plantilla de skill."
- "Si necesitas datos externos, revisa primero la decision tool vs MCP."
- "Si el flujo tiene varios pasos y verificacion, usa la plantilla de agent loop antes de disenar el agente completo."

### Criterio de desbloqueo

Completar el modulo de agentes. Como cierre, la persona debe guardar o copiar al menos un recurso para aplicar en una tarea real.

### Copy de boton/CTA

Abrir biblioteca de recursos

---

## Recursos recomendados para incluir en la biblioteca

- Glosario completo de conceptos de IA.
- Plantilla de prompt estructurado.
- Plantilla para mejorar prompts.
- Plantilla de proceso en Markdown.
- Checklist de tokens y contexto.
- Plantilla de skill.
- Plantilla de agent loop.
- Plantilla de agente.
- Rubrica para evaluar prompts.
- Rubrica para evaluar agentes.
- Tabla de decision: prompt, plantilla, skill, tool, MCP o agente.
- Casos de uso por area: ventas, operaciones, soporte, producto, reporting y documentacion.

## Tabla de decision resumida

| Necesidad | Recurso recomendado |
|---|---|
| Resolver una pregunta puntual | Prompt simple |
| Repetir una solicitud con estructura | Plantilla |
| Seguir un metodo consistente | Skill |
| Consultar o ejecutar algo fuera del modelo | Tool |
| Conectar una aplicacion de IA con sistemas externos | MCP |
| Ejecutar una tarea con pasos, herramientas y verificacion | Agente |

---

# Modulos nuevos (rediseno)

> Formato vigente por tema: ficha tecnica (¿Que se requiere? · Tiempo · Formato) + ¿Que es? + Ejemplo + Caso negativo + Caso positivo.

## Modulo 03: Tecnicas para producir mas

**Ficha tecnica.** Requiere: varios prompts conectados y, si puedes, 1-3 ejemplos del resultado deseado. Tiempo: minutos por flujo. Formato: chat (secuencia de mensajes).

### Que es

Saber escribir un buen prompt es la base; el siguiente salto de productividad viene de combinar varios prompts y trabajar por etapas en vez de exigir todo perfecto de un tiro. Tecnicas clave:

- **Encadenar prompts:** partir el trabajo en pasos donde la salida de uno alimenta al siguiente (extraer temas, luego agrupar, luego redactar). Cada paso es mas simple y corregible.
- **Dar ejemplos (few-shot):** mostrar 1-3 ejemplos del resultado deseado fija formato y tono mejor que un parrafo de instrucciones.
- **Iterar y refinar:** la primera respuesta es borrador; pedir mejoras ('mas corto', 'criticate') y 'piensa paso a paso' eleva la calidad.
- **Descomponer y reutilizar:** partir tareas grandes en subtareas y guardar lo que funciona como plantilla o atajo.

### Ejemplo

Convertir una llamada de ventas en seguimiento: (1) 'lista puntos clave y compromisos'; (2) 'separa lo acordado de lo pendiente'; (3) 'redacta un correo con lo acordado, <150 palabras, tono cordial'. Cada paso se revisa antes del siguiente.

### Caso negativo

Un solo prompt gigante: 'lee estas 40 paginas y hazme conclusiones, reporte, correo y presentacion'. Mezcla todo, pierde foco y si una pieza falla hay que rehacer el bloque.

### Caso positivo

Pasos encadenados + un ejemplo del formato deseado + iteracion sobre el borrador. Se controla cada etapa y el resultado llega mas rapido y afinado.

## Modulo 10: Donde vive un agente

**Ficha tecnica.** Requiere: un lugar encendido 24/7 (plataforma no-code o servidor), un disparador y acceso a tus datos. Tiempo: horas (no-code) a dias (a medida). Formato: plataforma no-code (Make/Zapier/n8n) o servidor en la nube.

### Que es

El agente no vive dentro de la IA. El modelo es un servicio remoto al que se le habla; el agente es un programa aparte que orquesta y corre en algun lado ('su oficina'). Para ser independiente necesita cuatro piezas, como un empleado:

- **Oficina:** servidor o plataforma siempre encendida.
- **Horario:** un disparador (hora del dia, evento, correo entrante).
- **Llaves:** acceso a herramientas via MCP o APIs, con permisos.
- **Libreta:** memoria (base de datos o archivos), porque el modelo no recuerda solo.

El **criterio** del agente (sus reglas de decision) no vive en el modelo: vive en las **instrucciones que tu escribes** (system prompt o .md) guardadas en la configuracion del agente. El modelo razona; tu pones las reglas. Cambiar el criterio = editar ese texto.

### Ejemplo

Agente que revisa leads cada dia: la landing guarda leads en un Sheet/CRM; el agente vive en tu cuenta de Make; cada manana se despierta, lee los leads, se los manda a la IA con tu criterio ('caliente = pidio demo y +50 empleados') y deja el resultado en Slack. Criterio en las instrucciones, leads en el Sheet, inteligencia en el modelo, agente en la plataforma.

### Caso negativo

Un script en tu laptop que crees 'independiente': si apagas la compu o cierras sesion, deja de trabajar. Sin oficina propia no es autonomo.

### Caso positivo

Flujo en plataforma no-code o servidor en la nube, con disparador diario, permisos de solo lectura al CRM y criterio escrito en las instrucciones. Trabaja solo aunque tu laptop este apagada.

> **Agente de IA vs IA agentica:** un agente de IA es una pieza concreta que hace una tarea acotada; la IA agentica es un enfoque, normalmente multi-agente, donde varios agentes se coordinan para metas mayores. Regla practica: empieza pequeno; lo multi-agente multiplica los puntos de falla.

## Modulo 11: Buen uso y riesgos

**Ficha tecnica.** Requiere: criterio y un checklist de revision (fuentes, datos sensibles, verificacion de lo critico). Tiempo: continuo (aplica en cada uso). Formato: practica / checklist.

### Que es

La IA potencia tu trabajo, pero la responsabilidad de lo que entregas sigue siendo tuya. Cuatro frentes:

- **Verificar y citar fuentes:** pedir de donde sale cada dato, marcar lo no confirmable, revisar cifras, nombres, fechas y compromisos antes de usarlos.
- **Datos sensibles y privacidad:** no pegar credenciales ni datos personales de clientes; anonimizar o resumir cuando dudes.
- **Cuando NO usar IA:** decisiones legales/medicas/financieras sin revision experta, tareas que dependen de datos exactos que no tiene, o trabajos donde no vas a verificar.
- **Elegir herramienta:** no toda tarea necesita el modelo mas potente; a veces lo correcto es una herramienta dedicada o una persona.

### Ejemplo

Pides un comparativo de proveedores con precios. Antes de enviarlo, le pides las fuentes, descubres que algunos precios fueron estimados sin datos y los marcas como 'por confirmar' en vez de presentarlos como hechos.

### Caso negativo

Pegas la base de clientes con nombres y correos para 'segmentarla' y copias el analisis sin revisar cifras. Expones datos sensibles y arriesgas presentar numeros inventados como reales.

### Caso positivo

Anonimizas o das solo agregados, pides que cite supuestos y marque lo incierto, y verificas las cifras clave contra la fuente antes de usarlas.

