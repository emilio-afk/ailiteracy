# Glosario de conceptos de IA

## Proposito

Este glosario define los conceptos centrales que la landing debe ensenar. Cada concepto esta escrito en lenguaje practico, con foco en como se usa en el trabajo diario y como se conecta con otros conceptos.

El glosario puede convertirse despues en tarjetas, tooltips, buscador interno o seccion de referencia.

---

## IA generativa

IA capaz de generar contenido nuevo a partir de instrucciones y contexto. Puede crear texto, imagenes, codigo, resumenes, planes, tablas, ideas, documentos y otros tipos de salida.

### Por que importa

Permite usar IA como apoyo para pensar, producir, transformar y automatizar trabajo.

### Ejemplo

Pedirle a una IA que convierta notas de una reunion en acuerdos, tareas y proximos pasos.

---

## LLM

LLM significa Large Language Model. Es un modelo entrenado para procesar y generar lenguaje. Funciona prediciendo tokens con base en patrones aprendidos y en el contexto que recibe.

### Por que importa

Es la capacidad base detras de muchas aplicaciones de IA conversacional y agentes.

### Ejemplo

ChatGPT, Claude o Gemini usan modelos de lenguaje para generar respuestas.

---

## Modelo

Sistema de IA que procesa entradas y genera salidas. El modelo es la capacidad base; no es lo mismo que la aplicacion donde se usa.

### Por que importa

Ayuda a distinguir entre la inteligencia base y la experiencia de producto.

### Ejemplo

Un modelo puede estar detras de un chatbot, una herramienta de analisis, un editor de codigo o un agente.

---

## Aplicacion de IA

Producto o interfaz que usa uno o varios modelos para resolver tareas.

### Por que importa

La calidad de la experiencia no depende solo del modelo, sino tambien del diseno de la aplicacion, sus herramientas, contexto, permisos y flujo.

### Ejemplo

ChatGPT es una aplicacion. El modelo es una de las capacidades que la aplicacion usa.

---

## Chatbot

Interfaz conversacional donde una persona escribe mensajes y la IA responde.

### Por que importa

Es la forma mas comun de interactuar con IA, pero no necesariamente implica autonomia ni uso de herramientas.

### Ejemplo

Preguntarle a una IA: "Ayudame a redactar este correo".

---

## Agente

Sistema que usa un modelo para perseguir un objetivo, normalmente con instrucciones, contexto, herramientas, memoria y ciclos de trabajo.

### Por que importa

Un agente puede ejecutar tareas mas complejas que una respuesta conversacional simple, porque puede planear, actuar, observar resultados, corregir y verificar.

### Ejemplo

Un agente que revisa documentos internos, extrae riesgos, genera un resumen ejecutivo y pide confirmacion antes de enviar un reporte.

---

## Prompt

Instruccion que se le da a una IA para guiar su respuesta.

### Por que importa

La calidad del prompt influye directamente en la calidad de la salida. Un prompt ambiguo produce respuestas ambiguas.

### Ejemplo

```text
Resume esta minuta en acuerdos, responsables y proximos pasos. Usa una tabla.
```

---

## Prompt estructurado

Prompt que separa claramente objetivo, contexto, tarea, restricciones, formato esperado y criterios de calidad.

### Por que importa

Reduce ambiguedad y hace que la IA pueda entregar resultados mas consistentes.

### Ejemplo

```md
# Objetivo
Convertir notas de reunion en tareas accionables.

# Contexto
El equipo reviso avances de ventas y operaciones.

# Tarea
Extrae acuerdos, responsables y fechas.

# Formato
Tabla con columnas: acuerdo, responsable, fecha, riesgo.
```

---

## System prompt

Instrucciones de mayor prioridad que definen como debe comportarse el modelo dentro de una aplicacion o agente.

### Por que importa

Define reglas persistentes como tono, limites, rol, herramientas permitidas y criterios de seguridad.

### Ejemplo

"Actua como asistente tecnico. Se preciso, no inventes datos y pide informacion faltante cuando sea necesario."

---

## User prompt

Mensaje o solicitud que escribe el usuario en una interaccion concreta.

### Por que importa

Es la instruccion inmediata que el modelo debe atender dentro del marco definido por el sistema.

### Ejemplo

"Convierte estas notas en un plan de accion para el equipo comercial."

---

## Contexto

Informacion que la IA tiene disponible para responder una tarea. Puede incluir instrucciones, documentos, historial, ejemplos, datos, preferencias y reglas.

### Por que importa

La IA responde con base en el contexto disponible. Si falta informacion importante, puede producir respuestas incompletas o incorrectas.

### Ejemplo

Para redactar una propuesta, el contexto puede incluir cliente, objetivo, presupuesto, alcance, restricciones y tono deseado.

---

## Ventana de contexto

Cantidad maxima de informacion que el modelo puede considerar en una interaccion.

### Por que importa

Aunque algunos modelos aceptan mucho texto, el contexto sigue teniendo limite, costo y riesgo de ruido.

### Ejemplo

Si se incluyen demasiados documentos irrelevantes, el modelo puede perder foco o responder con informacion poco prioritaria.

---

## Token

Unidad de texto que el modelo procesa. Una palabra puede ser uno o varios tokens.

### Por que importa

Los tokens afectan costo, velocidad y limite de contexto.

### Ejemplo

Un prompt largo con muchos documentos consume mas tokens que una instruccion breve con contexto resumido.

---

## Costo de tokens

Costo asociado a los tokens que entran al modelo y a los tokens que el modelo genera como respuesta.

### Por que importa

Optimizar tokens ayuda a reducir costo, latencia y complejidad.

### Ejemplo

En vez de pegar un documento completo, puede convenir resumirlo o extraer solo las secciones relevantes.

---

## Ruido contextual

Informacion dentro del contexto que no ayuda a resolver la tarea y puede distraer al modelo.

### Por que importa

Mas contexto no siempre mejora la respuesta. Contexto irrelevante puede bajar la calidad.

### Ejemplo

Pedir un resumen financiero incluyendo correos, notas personales y documentos sin relacion puede introducir ruido.

---

## Markdown

Formato ligero para escribir documentos estructurados usando texto plano. Los archivos Markdown suelen terminar en `.md`.

### Por que importa

Markdown permite organizar instrucciones, procesos, plantillas y conocimiento de forma clara para personas y modelos.

### Ejemplo

```md
# Objetivo

## Contexto

## Pasos

## Salida esperada
```

---

## Archivo `.md`

Documento Markdown. Puede usarse como brief, guia, SOP, plantilla, base de conocimiento o instruccion para agentes.

### Por que importa

Ayuda a convertir informacion desordenada en contexto reutilizable.

### Ejemplo

Un archivo `guia-de-prompts.md` que contiene buenas practicas, ejemplos y plantillas para el equipo.

---

## Tool

Capacidad externa que una IA puede usar para hacer algo mas alla de generar texto.

### Por que importa

Las tools permiten consultar datos, leer archivos, ejecutar codigo, buscar informacion o interactuar con sistemas.

### Ejemplo

Una herramienta para leer archivos de una carpeta o consultar eventos de calendario.

---

## Skill

Conjunto de instrucciones reutilizables para ejecutar una tarea con metodo, criterios y estructura.

### Por que importa

Una skill convierte una forma de trabajo en un procedimiento repetible.

### Ejemplo

Una skill para convertir notas de reunion en acuerdos, tareas, riesgos y proximos pasos.

---

## Prompt reusable

Prompt disenado para repetirse con pequenas variaciones.

### Por que importa

Es un paso intermedio entre una instruccion puntual y una skill formal.

### Ejemplo

Una plantilla para resumir documentos donde solo cambia el contenido fuente.

---

## MCP

MCP significa Model Context Protocol. Es un estandar para conectar aplicaciones de IA con herramientas, datos y sistemas externos.

### Por que importa

Permite que un agente acceda a capacidades externas de forma estructurada, como archivos, calendarios, bases de datos, herramientas de diseno o sistemas internos.

### Ejemplo

Un agente puede usar MCP para buscar documentos en Drive y luego generar un resumen.

---

## Cliente MCP

Aplicacion o entorno de IA que se conecta a servidores MCP para usar herramientas o recursos.

### Por que importa

Es el lado que solicita capacidades externas para que el modelo pueda trabajar con mas contexto o acciones.

### Ejemplo

Una aplicacion de agente que se conecta a herramientas de archivos, calendario o base de datos.

---

## Servidor MCP

Componente que expone herramientas, recursos o datos a traves del protocolo MCP.

### Por que importa

Permite que sistemas externos esten disponibles para una aplicacion de IA de forma controlada.

### Ejemplo

Un servidor MCP que permite consultar documentos internos o ejecutar busquedas en una base de datos.

---

## Resource

Dato o contenido que una herramienta o servidor puede poner disponible para la IA.

### Por que importa

Los recursos amplian el contexto disponible sin tener que pegar manualmente toda la informacion en el prompt.

### Ejemplo

Un documento, una tabla, una carpeta, una lista de eventos o una pagina de referencia.

---

## Agent loop

Ciclo de trabajo que permite a un agente avanzar hacia un objetivo mediante pasos repetidos de razonamiento, accion y verificacion.

### Por que importa

El loop permite que el agente no dependa de una sola respuesta. Puede observar resultados y corregir.

### Ejemplo

```text
Objetivo -> Plan -> Accion -> Observacion -> Correccion -> Verificacion -> Entrega
```

---

## Plan

Secuencia de pasos que el agente propone antes de actuar.

### Por que importa

Un plan ayuda a dividir tareas complejas y reducir errores.

### Ejemplo

Antes de generar un reporte, el agente decide revisar fuentes, extraer datos, resumir hallazgos y validar inconsistencias.

---

## Accion

Paso concreto que ejecuta el agente. Puede ser generar texto, llamar una herramienta, leer un archivo o transformar informacion.

### Por que importa

Las acciones convierten la intencion del agente en trabajo real.

### Ejemplo

Buscar un archivo, leer una tabla, crear un resumen o validar un dato.

---

## Observacion

Resultado que el agente recibe despues de ejecutar una accion.

### Por que importa

La observacion permite decidir si el agente debe continuar, corregir o pedir mas informacion.

### Ejemplo

El agente busca un documento y observa que no contiene la informacion esperada.

---

## Verificacion

Revision de la salida o del proceso antes de entregar el resultado final.

### Por que importa

Reduce errores y ayuda a asegurar que la respuesta cumple el objetivo.

### Ejemplo

Antes de entregar un reporte, el agente revisa si todas las secciones pedidas estan completas.

---

## Memoria

Informacion persistente o reutilizable que puede influir en futuras interacciones.

### Por que importa

La memoria puede mejorar continuidad, pero tambien debe manejarse con cuidado para evitar informacion obsoleta o incorrecta.

### Ejemplo

Recordar preferencias de formato del equipo para reportes semanales.

---

## Recuperacion de informacion

Proceso de buscar informacion relevante en fuentes externas o bases de conocimiento antes de responder.

### Por que importa

Permite usar datos especificos sin incluir todo el material en el prompt.

### Ejemplo

Buscar en una carpeta los documentos relacionados con un cliente antes de redactar una propuesta.

---

## RAG

RAG significa Retrieval-Augmented Generation. Es una tecnica donde el sistema recupera informacion relevante y luego la usa para generar una respuesta.

### Por que importa

Ayuda a responder con informacion especifica y actualizada de una base de conocimiento.

### Ejemplo

Consultar politicas internas antes de responder una pregunta de soporte.

---

## Alucinacion

Respuesta generada por la IA que suena plausible, pero es falsa, inventada o no esta respaldada por el contexto.

### Por que importa

Es uno de los riesgos principales al usar IA para trabajo serio.

### Ejemplo

Inventar una estadistica, una fuente o una fecha que no aparece en los documentos disponibles.

---

## Grounding

Practica de basar la respuesta de la IA en fuentes, datos o contexto verificable.

### Por que importa

Reduce alucinaciones y mejora trazabilidad.

### Ejemplo

Pedir que una respuesta cite de que documento o seccion obtuvo la informacion.

---

## Evaluacion

Proceso para medir si una respuesta, prompt, skill o agente cumple criterios definidos.

### Por que importa

Sin criterios de evaluacion, la calidad se juzga solo por intuicion.

### Ejemplo

Evaluar si una respuesta es correcta, completa, accionable, clara y consistente con el formato pedido.

---

## Rubrica

Conjunto de criterios para evaluar calidad de forma consistente.

### Por que importa

Permite comparar resultados y mejorar prompts o agentes con base en evidencia.

### Ejemplo

Una rubrica para evaluar un prompt:

- Tiene objetivo claro.
- Incluye contexto.
- Define formato.
- Incluye restricciones.
- Establece criterios de calidad.

---

## Automatizacion

Ejecucion de una tarea mediante un flujo definido, con poca o ninguna intervencion manual.

### Por que importa

La IA puede apoyar automatizaciones, pero no toda automatizacion necesita IA.

### Ejemplo

Generar cada viernes un resumen de reuniones y tareas pendientes.

---

## Workflow

Flujo de pasos que transforma entradas en resultados.

### Por que importa

Antes de crear un agente, conviene entender el workflow que debe ejecutar.

### Ejemplo

Entrada: notas de reunion. Pasos: limpiar, clasificar, extraer tareas, asignar responsables. Salida: plan de accion.

---

## SOP

SOP significa Standard Operating Procedure. Es un procedimiento operativo estandar.

### Por que importa

Un SOP bien escrito puede convertirse en contexto, plantilla, skill o base para un agente.

### Ejemplo

Un documento que explica como preparar una propuesta comercial paso a paso.

---

## Criterio de exito

Condicion que permite saber si una tarea fue completada correctamente.

### Por que importa

Los agentes necesitan criterios de exito para saber que verificar antes de entregar.

### Ejemplo

"El reporte debe incluir resumen ejecutivo, tres riesgos principales, responsables y proximos pasos."

---

## Limite operativo

Restriccion que define que puede y que no puede hacer un agente o sistema.

### Por que importa

Evita acciones riesgosas, ambiguas o fuera de alcance.

### Ejemplo

"El agente puede redactar correos, pero no enviarlos sin aprobacion humana."

---

## Human-in-the-loop

Diseno donde una persona revisa, aprueba o corrige partes importantes del proceso.

### Por que importa

Es clave cuando hay riesgo, ambiguedad o impacto alto.

### Ejemplo

Un agente prepara una propuesta, pero una persona debe aprobarla antes de enviarla al cliente.

---

## Trazabilidad

Capacidad de entender de donde salio una respuesta, que datos se usaron y que acciones se ejecutaron.

### Por que importa

Ayuda a auditar resultados y detectar errores.

### Ejemplo

Un agente indica que genero un resumen usando tres documentos especificos.

---

## Permisos

Reglas que definen que datos o acciones puede usar una herramienta, agente o aplicacion.

### Por que importa

Los permisos protegen informacion sensible y reducen riesgo operativo.

### Ejemplo

Permitir que un agente lea documentos, pero no que los elimine o comparta.

---

## Datos sensibles

Informacion que requiere cuidado especial por privacidad, seguridad, regulacion o confidencialidad.

### Por que importa

No toda informacion debe compartirse con cualquier modelo, herramienta o flujo.

### Ejemplo

Datos financieros, informacion de clientes, contratos, credenciales, informacion personal o estrategias internas.

---

## Checklist de decision

Lista de preguntas para elegir la mejor estrategia de IA.

### Por que importa

Ayuda a decidir si conviene usar prompt, plantilla, skill, tool, MCP o agente.

### Ejemplo

- Es una tarea unica o repetitiva.
- Requiere datos externos.
- Tiene riesgo operativo.
- Necesita aprobacion humana.
- Requiere verificacion.

---

## Tabla de relaciones conceptuales

| Concepto | Depende de | Sirve para |
|---|---|---|
| Prompt | Objetivo y contexto | Pedir una salida |
| Prompt estructurado | Prompt | Mejorar consistencia |
| Markdown | Contexto | Organizar informacion |
| Token | Texto procesado | Medir costo y limite |
| Tool | Capacidad externa | Ejecutar o consultar |
| Skill | Prompt + metodo | Repetir una tarea con calidad |
| MCP | Tools + datos externos | Conectar IA con sistemas |
| Loop | Plan + accion + observacion | Corregir y verificar |
| Agente | Prompt + contexto + tools + loop | Ejecutar tareas con autonomia |

## Conceptos que deben aparecer como tooltips

- IA generativa.
- LLM.
- Prompt.
- Contexto.
- Token.
- Markdown.
- Tool.
- Skill.
- MCP.
- Agent loop.
- Agente.
- Alucinacion.
- Verificacion.
- Human-in-the-loop.
- Trazabilidad.
