# Arquitectura de la guia de consulta

> **Formato vigente (rediseno):** la pagina dejo de ser una landing por secciones y ahora es una **guia de consulta tipo documentacion**: un solo documento que se scrollea, con un indice lateral fijo (TOC) y buscador. Todos los temas se muestran uno tras otro, sin hero de pantalla completa, sin navegacion modulo-por-modulo y **sin practicas ni quizzes** (son material de lectura/consulta). Se conserva la captura opcional de "tu tarea real" en la intro y un marcador ligero de "visto" por tema. Las secciones de abajo describen la version interactiva previa; se mantienen como referencia de contenido.

## Concepto central

La guia cubre, en lenguaje sencillo, desde fundamentos basicos de IA hasta el diseno de agentes simples para tareas reales. Todos los temas estan disponibles desde el inicio, sin candados ni examenes. El orden es una recomendacion de lectura, no una dependencia.

La ruta sugiere un orden de lectura:

```text
Fundamentos -> Prompt -> Contexto/Tokens -> Markdown -> Tools/Skills -> MCP -> Loops -> Agentes
```

Es una recomendacion, no una dependencia bloqueante. Cada tema se entiende mejor con el anterior, pero la persona puede avanzar, saltar o regresar cuando quiera.

## Principio pedagogico

La ruta esta ordenada para construir criterio paso a paso:

- Entender contexto ayuda a optimizar tokens.
- Entender que contexto necesita el modelo ayuda a usar bien `.md`.
- Entender prompts reutilizables ayuda a entender skills.
- Entender tools ayuda a entender MCP.
- Entender loops, herramientas, contexto y verificacion ayuda a disenar agentes.

El principio es: **cero friccion**. La persona aprende recorriendo y practicando, no demostrando. Nada bloquea, nada reprueba.

## Experiencia general

La pagina debe sentirse como un tutorial guiado y ligero, no como un examen ni como una landing comercial generica.

Cada modulo debe tener:

- Explicacion corta y en lenguaje sencillo (analogia primero, termino tecnico despues).
- Ejemplo practico.
- Una practica opcional para aplicar la idea.
- Boton para marcar el modulo como visto y pasar al siguiente.

Las practicas son auto-chequeos opcionales, nunca examenes. Sirven para pensar, dan feedback inmediato y no intimidante, y nunca impiden avanzar.

Ejemplos de practicas:

- Ordenar conceptos.
- Elegir la mejor opcion.
- Corregir un prompt.
- Completar una plantilla.
- Decidir una estrategia de contexto.
- Identificar riesgos.
- Disenar un flujo.

## Navegacion

La navegacion principal puede ser una barra lateral o un timeline vertical:

```text
01 Fundamentos
02 Prompt
03 Tokens & Contexto
04 Markdown
05 Tools & Skills
06 MCP
07 Loops
08 Agentes
09 Recursos
```

Todos los modulos estan disponibles y son clicables desde el inicio. El indicador de progreso muestra cuales ya se vieron (no cuales se "aprobaron"), para que la persona entienda su avance y la meta final sin sentirse bloqueada.

## Secciones de la landing

### 1. Hero: Aprende IA construyendo criterio

Primera vista con una promesa clara:

- Que aprenderas.
- Por que importa.
- Que podras hacer al final.
- Boton principal: `Iniciar ruta`.

La primera pantalla debe comunicar que la experiencia es practica, progresiva e interna para el equipo.

### 2. Bienvenida y tarea real (opcional)

La ruta abre con una bienvenida breve, no con un examen. En vez de un diagnostico que califica, la pagina invita a la persona a escribir una tarea real que quiera mejorar con IA (preparar reuniones, resumir documentos, etc.). Esa tarea se reutiliza en los ejemplos de los siguientes modulos.

Escribir la tarea es opcional y nunca bloquea. Si la persona quiere, puede saltar directo al Modulo 1.

### 3. Modulo 1: Fundamentos de IA

Objetivo: que todos compartan el mismo lenguaje base.

Conceptos:

- IA generativa.
- LLM.
- Modelo vs aplicacion.
- Chatbot vs agente.
- Alucinaciones.
- Limites reales.

Desbloqueo:

La persona debe responder correctamente preguntas basicas como:

- Por que una IA puede sonar segura y estar equivocada.
- Cual es la diferencia entre modelo y aplicacion.
- Que tarea si es razonable pedirle a un LLM.

### 4. Modulo 2: Prompt como instruccion

Objetivo: entender que un prompt no es solo pedir algo, sino disenar una instruccion.

Conceptos:

- Objetivo.
- Contexto.
- Rol.
- Restricciones.
- Formato de salida.
- Criterios de calidad.
- Ejemplos.

Actividad:

Mostrar un prompt debil y pedir que la persona lo mejore.

Desbloqueo:

Debe construir un prompt con:

- Objetivo claro.
- Contexto suficiente.
- Formato esperado.
- Criterio de evaluacion.

### 5. Modulo 3: Contexto, tokens y decisiones

Objetivo: ensenar que el contexto tiene costo, limite y efecto en calidad.

Conceptos:

- Tokens.
- Ventana de contexto.
- Costo.
- Latencia.
- Ruido contextual.
- Resumen.
- Division de tareas.

Actividad:

Presentar escenarios de decision:

- Pegas todo el documento.
- Lo resumes.
- Lo partes en modulos.
- Lo conviertes en `.md`.
- Usas una herramienta externa.

Desbloqueo:

Debe elegir una estrategia razonable para optimizar contexto en dos o tres escenarios.

### 6. Modulo 4: Markdown como sistema de contexto

Objetivo: ensenar `.md` como una herramienta para organizar conocimiento e instrucciones.

Conceptos:

- Que es Markdown.
- Encabezados.
- Listas.
- Tablas.
- Bloques de codigo.
- Plantillas.
- Documentacion viva.
- Instrucciones reutilizables.

Actividad:

Convertir un proceso desordenado en un documento `.md` bien estructurado.

Desbloqueo:

Debe crear una mini plantilla `.md`:

```md
# Objetivo

# Contexto

# Instrucciones

# Criterios de calidad

# Formato esperado
```

### 7. Modulo 5: Tools y skills

Objetivo: entender como una IA pasa de responder texto a ejecutar trabajo con metodo.

Conceptos:

- Tool.
- Skill.
- Instruccion reutilizable.
- Diferencia entre prompt suelto y skill.
- Permisos.
- Entradas y salidas.
- Verificacion.

Actividad:

Disenar una skill simple, por ejemplo:

- Resumir juntas.
- Revisar prompts.
- Preparar reportes.
- Convertir notas en tareas.

Desbloqueo:

Debe identificar cuando conviene usar prompt, plantilla, skill o herramienta.

### 8. Modulo 6: MCP

Objetivo: explicar MCP como conexion entre IA y sistemas externos.

Conceptos:

- Que es MCP.
- Servidor MCP.
- Cliente MCP.
- Herramientas expuestas.
- Datos externos.
- Permisos.
- Trazabilidad.
- Riesgos.

Actividad:

Mostrar el mapa simple:

```text
Agente -> MCP -> Herramienta externa -> Resultado -> Agente
```

Casos:

- Google Drive.
- Calendario.
- CRM.
- Base de datos.
- Archivos locales.
- Figma.
- Email.

Desbloqueo:

Debe explicar en que caso MCP aporta valor y en que caso seria innecesario.

### 9. Modulo 7: Loops

Objetivo: ensenar el ciclo minimo de trabajo de un agente.

Conceptos:

- Planear.
- Actuar.
- Observar.
- Corregir.
- Verificar.
- Entregar.

Actividad:

Simulador visual de loop:

```text
Objetivo -> Plan -> Accion -> Observacion -> Correccion -> Resultado
```

Desbloqueo:

Debe ordenar correctamente los pasos de un loop y detectar donde hace falta verificacion.

### 10. Modulo 8: Agentes

Objetivo: disenar un agente simple y util.

Conceptos:

- Agente.
- Objetivo.
- Instrucciones.
- Contexto.
- Herramientas.
- Memoria.
- Loop.
- Criterios de exito.
- Limites operativos.

Actividad final:

Crear el blueprint de un agente:

```md
# Nombre del agente

# Objetivo

# Usuario objetivo

# Contexto requerido

# Herramientas necesarias

# Flujo de trabajo

# Criterios de exito

# Riesgos

# Ejemplo de uso
```

Desbloqueo final:

La persona debe presentar un agente disenado para una tarea real del equipo.

### 11. Cierre: Biblioteca de recursos

La biblioteca de recursos esta disponible desde el inicio (no se desbloquea al final):

- Glosario completo.
- Plantilla de prompt.
- Plantilla de skill.
- Plantilla de agente.
- Checklist de tokens/contexto.
- Ejemplos de `.md`.
- Casos de uso por area.
- Rubrica para evaluar respuestas de IA.

## Reglas de avance (sin bloqueo)

Cada modulo tiene solo dos estados:

- Disponible (todos lo estan desde el inicio).
- Visto (la persona ya lo recorrio).

No existen los estados "bloqueado" ni "reprobado". Marcar un modulo como visto es un acto voluntario que solo sirve para llevar el progreso.

Para sentir que avanzo en un modulo, la persona puede:

1. Leer la explicacion base.
2. Revisar un ejemplo.
3. (Opcional) Hacer la practica del modulo.
4. Marcar el modulo como visto y pasar al siguiente.

El avance debe ser ligero y sin friccion: nada frena el aprendizaje y nada se "reprueba". Las practicas existen para reforzar, no para evaluar.

## Pendiente para el siguiente documento

Crear el mapa detallado de modulos, especificando para cada uno:

- Objetivo de aprendizaje.
- Conceptos incluidos.
- Contenido principal.
- Interaccion.
- Ejercicio.
- Evaluacion.
- Criterio de desbloqueo.
- Recursos o plantillas asociadas.
