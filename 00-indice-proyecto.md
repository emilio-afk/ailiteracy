# Taller de IA: indice del proyecto

## Proposito

Este indice organiza la documentacion base del Taller de IA sobre fundamentos de IA, prompts, contexto, Markdown, tools, skills, MCP, loops y agentes.

> **Estado actual (rediseno):** el proyecto dejo de ser una "landing educativa con desbloqueo" y ahora es una **guia de consulta tipo documentacion**: un solo documento con scroll, indice lateral (TOC) y buscador, sin candados ni quizzes. La ruta tiene **13 modulos (00–12)** e incluye temas nuevos respecto a estos docs: **03 Tecnicas para producir mas**, **10 Donde vive un agente** y **11 Buen uso y riesgos**. Cada tema usa el formato ¿Que es? → Ejemplo → Caso negativo → Caso positivo, con una ficha tecnica. **La fuente viva del contenido es `src/app-data.mjs`**; estos `.md` son la base narrativa y de diseno.

## Documentos base

1. `01-alcance-objetivos-outline.md`
   - Define el alcance del proyecto, objetivos de aprendizaje, enfoque recomendado y outline inicial.

2. `02-arquitectura-landing-interactiva.md`
   - Define la arquitectura de la landing, la ruta desbloqueable y la logica pedagogica.

3. `03-mapa-detallado-de-modulos.md`
   - Baja la ruta a modulos con objetivo, conceptos, interaccion, ejercicio, evaluacion y desbloqueo.

4. `04-glosario-conceptos-ia.md`
   - Define los conceptos centrales que la landing debe ensenar y usar como tooltips o referencia.

5. `05-plantillas-reutilizables.md`
   - Contiene plantillas copiables para prompts, procesos `.md`, skills, loops, agentes y rubricas.

## Documentos en desarrollo paralelo

6. `06-contenido-modulos-0-a-4.md`
   - Contenido listo para landing de diagnostico, fundamentos, prompt, tokens/contexto y Markdown.

7. `07-contenido-modulos-5-a-9.md`
   - Contenido listo para landing de tools/skills, MCP, loops, agentes y biblioteca de recursos.

8. `08-evaluaciones-e-interacciones.md`
   - Preguntas, scoring, feedback, reglas de desbloqueo e interacciones por modulo.

9. `09-requisitos-ux-implementacion.md`
   - Requisitos UX, funcionales, responsivos, accesibilidad, componentes y criterios de aceptacion.

## Siguiente fase

Despues de completar y revisar estos documentos, el siguiente paso sera crear una especificacion de implementacion para construir la landing.

La implementacion recomendada inicialmente deberia ser una web simple con:

- HTML.
- CSS.
- JavaScript.
- Persistencia local en navegador.
- Recursos copiables.
- Modulos desbloqueables.

Una version posterior podria migrar a un framework si el proyecto requiere usuarios, analitica, backend o contenido editable por el equipo.
