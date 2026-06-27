# Plantillas reutilizables

## Proposito

Este documento contiene las plantillas que la landing debe ofrecer como recursos copiables o descargables. Las plantillas estan pensadas para ayudar al equipo a pasar de uso empirico de IA a uso estructurado, repetible y evaluable.

---

## 1. Plantilla de prompt estructurado

Usar cuando se quiera pedir una salida clara a una IA.

```md
# Rol

Actua como [rol esperado].

# Objetivo

Quiero lograr [resultado deseado].

# Contexto

[Incluye la informacion necesaria para resolver la tarea.]

# Tarea

Realiza lo siguiente:

1. [Paso o solicitud principal]
2. [Paso o solicitud secundaria]
3. [Paso opcional]

# Restricciones

- [Restriccion 1]
- [Restriccion 2]
- [Restriccion 3]

# Formato de salida

Entrega la respuesta en este formato:

- [Formato esperado: tabla, lista, JSON, resumen ejecutivo, checklist, etc.]

# Criterios de calidad

La respuesta debe:

- Ser clara.
- Ser accionable.
- No inventar informacion.
- Separar hechos de supuestos.
- Indicar si falta informacion.
```

### Version compacta

```md
Objetivo:
Contexto:
Tarea:
Restricciones:
Formato esperado:
Criterios de calidad:
```

---

## 2. Plantilla para mejorar un prompt

Usar cuando ya existe un prompt, pero se quiere hacerlo mas claro y efectivo.

```md
# Prompt original

[Pega aqui el prompt actual.]

# Objetivo real

[Describe que quieres lograr con este prompt.]

# Problema actual

El prompt actual falla porque:

- [Es ambiguo]
- [Le falta contexto]
- [No define formato]
- [No incluye criterios de calidad]
- [Otro]

# Mejora solicitada

Reescribe el prompt para que incluya:

- Objetivo claro.
- Contexto suficiente.
- Tarea especifica.
- Restricciones.
- Formato esperado.
- Criterios de calidad.

# Salida esperada

Entrega:

1. Prompt mejorado.
2. Explicacion breve de que cambiaste.
3. Recomendaciones para adaptarlo a otros casos.
```

---

## 3. Plantilla de proceso en Markdown

Usar para convertir un proceso del equipo en un documento `.md` claro.

```md
# Nombre del proceso

[Nombre claro del proceso.]

# Objetivo

[Que busca lograr este proceso.]

# Cuando usarlo

Usar este proceso cuando:

- [Condicion 1]
- [Condicion 2]
- [Condicion 3]

# Entradas necesarias

Para ejecutar el proceso se necesita:

- [Entrada 1]
- [Entrada 2]
- [Entrada 3]

# Pasos

1. [Paso 1]
2. [Paso 2]
3. [Paso 3]
4. [Paso 4]

# Salida esperada

El resultado debe incluir:

- [Elemento 1]
- [Elemento 2]
- [Elemento 3]

# Criterios de calidad

El proceso esta bien ejecutado si:

- [Criterio 1]
- [Criterio 2]
- [Criterio 3]

# Riesgos o errores comunes

- [Riesgo 1]
- [Riesgo 2]
- [Riesgo 3]

# Ejemplo

[Incluye un ejemplo breve.]
```

---

## 4. Plantilla de brief para IA

Usar antes de pedirle a una IA que ayude con un proyecto, cliente, documento o decision.

```md
# Proyecto o tema

[Nombre del proyecto, cliente o tema.]

# Objetivo

[Que quieres lograr.]

# Audiencia

[Para quien es la salida.]

# Contexto relevante

[Informacion importante que la IA debe considerar.]

# Material disponible

- [Documento 1]
- [Documento 2]
- [Link o fuente 3]

# Restricciones

- [Restriccion de tono]
- [Restriccion de formato]
- [Restriccion de alcance]
- [Restriccion de datos]

# Decision o salida esperada

Necesito que la IA entregue:

- [Salida 1]
- [Salida 2]
- [Salida 3]

# Criterios de exito

La respuesta sera util si:

- [Criterio 1]
- [Criterio 2]
- [Criterio 3]
```

---

## 5. Checklist de tokens y contexto

Usar antes de pegar mucho texto o pedir una tarea compleja.

```md
# Checklist de tokens y contexto

## Antes de enviar

- [ ] El objetivo esta claro.
- [ ] El contexto incluido es relevante.
- [ ] El texto innecesario fue eliminado.
- [ ] La informacion larga fue resumida cuando convenia.
- [ ] La tarea fue dividida si era demasiado grande.
- [ ] El formato de salida esta definido.
- [ ] Los criterios de calidad estan definidos.

## Decision de contexto

Elige una estrategia:

- [ ] Pegar contexto completo.
- [ ] Resumir primero.
- [ ] Dividir en partes.
- [ ] Convertir en documento `.md`.
- [ ] Usar una herramienta o fuente externa.

## Riesgos

- [ ] Hay datos sensibles.
- [ ] Hay informacion desactualizada.
- [ ] Hay instrucciones contradictorias.
- [ ] Hay demasiado ruido contextual.
- [ ] Falta informacion critica.

## Instruccion final

Si falta informacion, la IA debe:

- [ ] Pedir aclaracion.
- [ ] Explicitar supuestos.
- [ ] Dar una respuesta parcial con advertencias.
```

---

## 6. Plantilla de skill

Usar para convertir una forma de trabajo en una instruccion reutilizable.

```md
# Nombre de la skill

[Nombre corto y descriptivo.]

# Cuando usar esta skill

Usar esta skill cuando:

- [Caso 1]
- [Caso 2]
- [Caso 3]

# Objetivo

[Que resultado debe producir esta skill.]

# Entradas necesarias

La skill necesita:

- [Entrada 1]
- [Entrada 2]
- [Entrada 3]

# Procedimiento

1. Leer el contexto disponible.
2. Identificar la tarea principal.
3. Detectar informacion faltante o ambigua.
4. Ejecutar el analisis o transformacion.
5. Verificar la salida contra los criterios de calidad.
6. Entregar el resultado en el formato definido.

# Reglas

- No inventar datos.
- Separar hechos de supuestos.
- Pedir informacion si el contexto es insuficiente.
- Mantener la salida en el formato esperado.

# Formato de salida

[Define aqui la estructura de respuesta.]

# Criterios de calidad

La salida debe:

- [Criterio 1]
- [Criterio 2]
- [Criterio 3]

# Ejemplo de uso

Usuario:

[Ejemplo de entrada.]

Respuesta esperada:

[Ejemplo de salida.]
```

---

## 7. Plantilla de agent loop

Usar para disenar el ciclo de trabajo de un agente.

```md
# Nombre del loop

[Nombre del flujo.]

# Objetivo

[Que debe lograr el agente.]

# Entrada inicial

El agente recibe:

- [Entrada 1]
- [Entrada 2]
- [Entrada 3]

# Paso 1: Entender

El agente debe identificar:

- Objetivo del usuario.
- Informacion disponible.
- Informacion faltante.
- Riesgos.

# Paso 2: Planear

El agente debe proponer un plan con:

- Pasos.
- Herramientas necesarias.
- Criterios de exito.

# Paso 3: Actuar

El agente ejecuta:

- [Accion 1]
- [Accion 2]
- [Accion 3]

# Paso 4: Observar

El agente revisa:

- Resultado de cada accion.
- Errores.
- Datos incompletos.
- Cambios necesarios.

# Paso 5: Corregir

Si algo falla, el agente debe:

- Ajustar el plan.
- Pedir informacion.
- Reintentar una accion.
- Reducir alcance.

# Paso 6: Verificar

Antes de entregar, el agente valida:

- [Criterio 1]
- [Criterio 2]
- [Criterio 3]

# Paso 7: Entregar

La salida final debe incluir:

- Resultado principal.
- Supuestos.
- Riesgos.
- Proximos pasos.
```

---

## 8. Plantilla de agente

Usar para disenar un agente completo pero acotado.

```md
# Nombre del agente

[Nombre claro del agente.]

# Proposito

[Para que existe este agente.]

# Usuario objetivo

[Quien lo usara.]

# Tarea principal

El agente debe:

[Describe la tarea principal.]

# Fuera de alcance

El agente no debe:

- [Accion fuera de alcance 1]
- [Accion fuera de alcance 2]
- [Accion fuera de alcance 3]

# Contexto requerido

Para trabajar bien, el agente necesita:

- [Contexto 1]
- [Contexto 2]
- [Contexto 3]

# Herramientas necesarias

El agente puede necesitar:

- [Tool 1]
- [Tool 2]
- [Tool 3]

# Flujo de trabajo

1. Entender la solicitud.
2. Revisar contexto disponible.
3. Pedir informacion faltante si es necesario.
4. Planear la ejecucion.
5. Usar herramientas si aplica.
6. Generar salida.
7. Verificar calidad.
8. Entregar resultado.

# Verificaciones

Antes de entregar, el agente debe confirmar:

- [Verificacion 1]
- [Verificacion 2]
- [Verificacion 3]

# Criterios de exito

El agente tuvo exito si:

- [Criterio 1]
- [Criterio 2]
- [Criterio 3]

# Riesgos

- [Riesgo 1]
- [Riesgo 2]
- [Riesgo 3]

# Limites operativos

- [Limite 1]
- [Limite 2]
- [Limite 3]

# Human-in-the-loop

Requiere aprobacion humana cuando:

- [Caso 1]
- [Caso 2]
- [Caso 3]

# Ejemplo de uso

Usuario:

[Solicitud de ejemplo.]

Agente:

[Respuesta o flujo esperado.]
```

---

## 9. Rubrica para evaluar prompts

Usar para revisar si un prompt esta listo.

```md
# Rubrica de evaluacion de prompt

Evalua cada criterio del 1 al 3:

1 = debil
2 = aceptable
3 = fuerte

| Criterio | Puntaje | Observaciones |
|---|---:|---|
| Objetivo claro |  |  |
| Contexto suficiente |  |  |
| Tarea especifica |  |  |
| Restricciones claras |  |  |
| Formato de salida definido |  |  |
| Criterios de calidad |  |  |
| Evita ambiguedad |  |  |

## Resultado

Puntaje total:

## Recomendacion

- [ ] Listo para usar.
- [ ] Necesita ajustes menores.
- [ ] Debe reescribirse.

## Mejoras sugeridas

1. [Mejora 1]
2. [Mejora 2]
3. [Mejora 3]
```

---

## 10. Rubrica para evaluar agentes

Usar para revisar si un agente esta bien disenado.

```md
# Rubrica de evaluacion de agente

Evalua cada criterio del 1 al 3:

1 = debil
2 = aceptable
3 = fuerte

| Criterio | Puntaje | Observaciones |
|---|---:|---|
| Objetivo claro |  |  |
| Alcance acotado |  |  |
| Usuario objetivo definido |  |  |
| Contexto requerido claro |  |  |
| Herramientas justificadas |  |  |
| Loop definido |  |  |
| Verificaciones incluidas |  |  |
| Riesgos identificados |  |  |
| Limites operativos claros |  |  |
| Human-in-the-loop definido |  |  |

## Resultado

Puntaje total:

## Recomendacion

- [ ] Listo para prototipo.
- [ ] Necesita ajustes menores.
- [ ] Requiere redisenar alcance.

## Riesgos principales

1. [Riesgo 1]
2. [Riesgo 2]
3. [Riesgo 3]

## Mejoras sugeridas

1. [Mejora 1]
2. [Mejora 2]
3. [Mejora 3]
```

---

## 11. Tabla de decision: que usar

Usar para decidir si conviene prompt, plantilla, skill, tool, MCP o agente.

```md
# Tabla de decision

| Situacion | Mejor opcion | Por que |
|---|---|---|
| Pregunta unica y simple | Prompt | No requiere estructura adicional |
| Tarea repetida con mismo formato | Plantilla | Reduce variacion y ahorra tiempo |
| Proceso repetible con criterios | Skill | Convierte metodo en instruccion reusable |
| Necesita consultar o ejecutar algo externo | Tool | La IA requiere una capacidad externa |
| Necesita conectar sistemas o datos externos | MCP | Estandariza acceso a herramientas y recursos |
| Requiere planear, actuar, observar y verificar | Agente | Necesita autonomia controlada |
| Tiene alto riesgo o impacto | Human-in-the-loop | Requiere revision humana |
```

---

## 12. Checklist antes de crear un agente

```md
# Checklist antes de crear un agente

- [ ] La tarea es suficientemente repetitiva o compleja.
- [ ] El objetivo esta claro.
- [ ] El alcance esta acotado.
- [ ] Se conocen las entradas necesarias.
- [ ] La salida esperada esta definida.
- [ ] Hay criterios de exito.
- [ ] Se identificaron riesgos.
- [ ] Se definieron limites operativos.
- [ ] Se sabe si necesita herramientas.
- [ ] Se sabe si necesita MCP.
- [ ] Hay verificaciones antes de entregar.
- [ ] Se definio cuando debe intervenir una persona.
```

---

## Recursos que debe ofrecer la landing

La landing debe permitir copiar o descargar:

- Plantilla de prompt estructurado.
- Plantilla para mejorar prompts.
- Plantilla de proceso en Markdown.
- Plantilla de brief para IA.
- Checklist de tokens y contexto.
- Plantilla de skill.
- Plantilla de agent loop.
- Plantilla de agente.
- Rubrica para evaluar prompts.
- Rubrica para evaluar agentes.
- Tabla de decision.
- Checklist antes de crear un agente.
