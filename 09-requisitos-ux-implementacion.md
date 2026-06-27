# Requisitos UX y funcionales para la landing educativa

## Proposito del documento

Este documento define los requisitos de experiencia, funcionalidad y estructura tecnica para construir una landing educativa interactiva sobre IA. La landing debe funcionar como una ruta de aprendizaje progresiva con modulos desbloqueables, ejercicios breves y recursos reutilizables.

La implementacion no debe sentirse como una landing comercial generica. Debe sentirse como una herramienta interna de aprendizaje: clara, guiada, practica y facil de retomar.

## Objetivos de la experiencia

La landing debe permitir que una persona del equipo pueda:

1. Entender la ruta completa desde fundamentos de IA hasta agentes.
2. Avanzar por modulos en orden pedagogico.
3. Completar microactividades que validen comprension minima.
4. Ver su progreso y saber que modulo sigue.
5. Copiar o descargar plantillas para usarlas en trabajo real.
6. Retomar la ruta sin perder el estado local.
7. Usar la pagina en escritorio y movil sin friccion.

## Principios UX

- Progresion visible: los modulos bloqueados deben verse, aunque no se puedan abrir.
- Baja friccion: las validaciones deben ser cortas y practicas, no examenes largos.
- Lenguaje operativo: explicar conceptos con ejemplos de trabajo real.
- Aprendizaje activo: cada modulo debe incluir una interaccion o ejercicio.
- Reutilizacion: toda plantilla importante debe poder copiarse y, cuando aplique, descargarse.
- Claridad sobre estado: la persona debe saber si un modulo esta bloqueado, disponible, en progreso o completado.
- Diseno sobrio: evitar composicion de marketing excesiva; priorizar lectura, progreso y accion.

## Estructura visual requerida

### 1. Header fijo o persistente

Debe incluir:

- Nombre corto del proyecto: `Taller de IA`.
- Indicador de progreso general.
- Acceso rapido a recursos.
- Accion para continuar el siguiente modulo disponible.

En movil, el header debe compactarse y abrir la navegacion mediante un boton de menu.

### 2. Hero inicial

Primera seccion de la pagina. Debe comunicar:

- Que se aprendera.
- Por que importa para el equipo.
- Que resultado practico se lograra al final.
- Boton primario: `Iniciar ruta`.
- Boton secundario: `Ver modulos`.

El hero debe mostrar una senal clara de producto educativo, por ejemplo un resumen visual de la ruta:

```text
Fundamentos -> Prompt -> Contexto -> Markdown -> Tools -> MCP -> Loops -> Agentes
```

### 3. Diagnostico inicial

Debe aparecer antes de iniciar el Modulo 1 o como primer paso de la ruta.

Debe incluir:

- Quiz corto de 5 a 7 preguntas.
- Seleccion de una tarea real que la persona quiera mejorar con IA.
- Resultado de nivel inicial.
- Recomendacion de enfoque, sin saltarse la ruta base.

El diagnostico no debe bloquear por calificacion. Solo debe completarse para activar la ruta.

### 4. Mapa de ruta

Debe mostrar todos los modulos en orden:

1. Diagnostico inicial.
2. Fundamentos de IA.
3. Prompt como instruccion.
4. Contexto, tokens y decisiones.
5. Markdown como sistema de contexto.
6. Tools y skills.
7. MCP.
8. Loops.
9. Agentes.
10. Biblioteca de recursos.

Cada modulo debe mostrar:

- Numero.
- Titulo.
- Objetivo corto.
- Estado.
- Tiempo estimado opcional.
- Accion disponible segun estado.

### 5. Vista de modulo

Cada modulo debe usar una estructura consistente:

1. Introduccion breve.
2. Conceptos clave.
3. Ejemplo aplicado.
4. Interaccion practica.
5. Mini evaluacion.
6. Resultado y desbloqueo.
7. Recursos asociados.

La vista debe permitir volver al mapa de ruta sin perder avance.

### 6. Biblioteca de recursos

Debe estar visible desde el inicio, pero algunos recursos pueden aparecer marcados como bloqueados hasta completar modulos relacionados.

Debe incluir:

- Glosario completo.
- Plantilla de prompt estructurado.
- Plantilla para mejorar prompts.
- Plantilla de proceso en Markdown.
- Plantilla de brief para IA.
- Checklist de tokens y contexto.
- Plantilla de skill.
- Plantilla de agent loop.
- Plantilla de agente.
- Rubrica para evaluar respuestas de IA.

## Navegacion requerida

La navegacion principal debe combinar:

- Mapa de ruta vertical o timeline.
- Accion `Continuar` para ir al siguiente modulo pendiente.
- Acceso a recursos.
- Navegacion interna dentro del modulo.

### Reglas de navegacion

- El diagnostico debe estar disponible al inicio.
- El Modulo 1 se desbloquea al completar el diagnostico.
- Cada modulo desbloquea el siguiente al cumplir su criterio.
- Los modulos completados pueden reabrirse.
- Los modulos bloqueados pueden mostrar titulo, objetivo y requisito de desbloqueo, pero no la actividad completa.
- La biblioteca de recursos debe ser accesible siempre, con recursos bloqueados o disponibles segun progreso.

## Estados de modulo

Cada modulo debe soportar estos estados:

| Estado | Descripcion | Accion principal |
| --- | --- | --- |
| `bloqueado` | Aun no cumple el requisito anterior. | Ver requisito |
| `disponible` | Puede iniciarse. | Iniciar |
| `en_progreso` | Ya fue abierto o tiene avance parcial. | Continuar |
| `completado` | Cumplio el criterio de desbloqueo. | Revisar |

### Requisitos visuales por estado

- `bloqueado`: menor contraste, icono de candado, sin boton de inicio.
- `disponible`: enfasis moderado, boton primario.
- `en_progreso`: indicador de avance interno.
- `completado`: marca de completado y opcion de repasar.

## Componentes necesarios

### Componentes de estructura

- `AppShell`: contenedor general, header y layout.
- `Header`: titulo, progreso, recursos y menu movil.
- `RouteMap`: lista o timeline de modulos.
- `ModuleCard`: resumen de modulo con estado y accion.
- `ModuleView`: vista completa de un modulo.
- `ResourceLibrary`: biblioteca de plantillas y referencias.

### Componentes de aprendizaje

- `DiagnosticQuiz`: diagnostico inicial.
- `ConceptCard`: tarjeta de concepto con definicion breve.
- `ComparisonBlock`: comparaciones como modelo vs aplicacion o chatbot vs agente.
- `ExamplePanel`: ejemplo aplicado al trabajo real.
- `InteractiveExercise`: contenedor generico para actividades.
- `MiniEvaluation`: evaluacion corta del modulo.
- `UnlockResult`: resultado de evaluacion y siguiente paso.

### Componentes de interaccion

- `OptionQuestion`: pregunta de opcion multiple.
- `SortExercise`: ordenar pasos o conceptos.
- `ChecklistExercise`: validar criterios de una plantilla.
- `ScenarioDecision`: elegir estrategia ante un caso.
- `TextTemplateEditor`: completar una plantilla simple.
- `CopyButton`: copiar texto al portapapeles.
- `DownloadButton`: descargar contenido como `.md`.
- `ProgressIndicator`: avance total y por modulo.
- `Toast`: confirmaciones breves, por ejemplo `Plantilla copiada`.

## Comportamiento de desbloqueo

### Regla general

Un modulo se considera completado cuando la persona:

1. Recorre la explicacion base.
2. Revisa el ejemplo aplicado.
3. Completa la actividad corta.
4. Aprueba la mini evaluacion o cumple el criterio definido.

Al completarse un modulo:

- Se marca como `completado`.
- Se desbloquea el siguiente modulo.
- Se muestra una pantalla o bloque de resultado.
- Se ofrecen recursos asociados.
- Se actualiza el progreso general.

### Criterios por modulo

| Modulo | Criterio de desbloqueo |
| --- | --- |
| Diagnostico inicial | Completar quiz y seleccionar una tarea real. |
| Fundamentos de IA | Responder correctamente al menos 3 de 4 preguntas. |
| Prompt como instruccion | Crear un prompt que cumpla al menos 4 de 5 criterios. |
| Contexto, tokens y decisiones | Elegir estrategia razonable en al menos 2 de 3 escenarios. |
| Markdown como sistema de contexto | Crear plantilla `.md` que cumpla al menos 4 de 5 criterios. |
| Tools y skills | Clasificar correctamente al menos 4 de 5 casos. |
| MCP | Explicar un caso donde MCP aporta valor y uno donde seria innecesario. |
| Loops | Ordenar el loop y definir al menos una verificacion util. |
| Agentes | Completar el blueprint de un agente para una tarea real. |
| Biblioteca de recursos | Se considera completa al revisar o descargar al menos un recurso final. |

### Persistencia del progreso

Para una implementacion web simple, el progreso puede guardarse en `localStorage`.

Debe persistir:

- Diagnostico completado.
- Tarea real elegida.
- Estado de cada modulo.
- Respuestas de evaluaciones.
- Plantillas completadas por la persona.
- Fecha de ultimo avance.

No debe requerir login en la primera version.

## Recursos copiables y descargables

Cada recurso debe tener:

- Titulo.
- Descripcion breve de uso.
- Vista previa en Markdown.
- Boton `Copiar`.
- Boton `Descargar .md`.
- Relacion con uno o varios modulos.

### Reglas de copiado

- Al copiar, mostrar confirmacion visual breve.
- Si falla el portapapeles, mostrar alternativa manual para seleccionar el texto.
- El texto copiado debe ser Markdown limpio, sin HTML ni estilos visuales.

### Reglas de descarga

- Descargar archivos con nombres claros en kebab-case.
- Usar extension `.md`.
- Incluir titulo principal dentro del archivo.
- No descargar contenido vacio o incompleto.

Ejemplos de nombres:

```text
plantilla-prompt-estructurado.md
checklist-tokens-contexto.md
plantilla-agent-loop.md
plantilla-agente.md
```

## Requisitos responsivos

### Escritorio

- Layout recomendado de dos columnas:
  - Columna izquierda: ruta o navegacion.
  - Columna derecha: contenido del modulo.
- Header visible.
- Biblioteca de recursos accesible desde header o panel lateral.
- Las actividades deben tener espacio suficiente para comparar ejemplos.

### Tablet

- Ruta colapsable o ubicada encima del contenido.
- Actividades en una sola columna si el ancho no permite comparacion clara.
- Botones y controles con area tactil comoda.

### Movil

- Una sola columna.
- Menu de ruta en panel desplegable.
- Boton `Continuar` visible cerca del final de cada seccion.
- Tarjetas compactas, sin texto truncado que oculte informacion critica.
- Actividades de arrastrar deben tener alternativa con botones o seleccion.

### Breakpoints sugeridos

```text
movil: hasta 767px
tablet: 768px a 1023px
escritorio: 1024px o mas
```

## Requisitos de accesibilidad

- Usar HTML semantico: `header`, `main`, `nav`, `section`, `button`.
- Mantener jerarquia correcta de encabezados.
- Todo control interactivo debe ser accesible con teclado.
- El foco visible debe ser claro en botones, links, inputs y tarjetas accionables.
- No depender solo del color para comunicar estados; usar texto o iconos.
- Mantener contraste suficiente en texto, botones y estados deshabilitados.
- Las preguntas deben estar asociadas a sus opciones con labels claros.
- Los mensajes de error o resultado deben ser anunciables con `aria-live` cuando cambien dinamicamente.
- Los modulos bloqueados deben explicar por texto que requisito falta.
- Los botones de icono deben tener `aria-label`.
- Las actividades de ordenar o arrastrar deben tener alternativa accesible.
- No mostrar animaciones obligatorias que impidan leer o completar tareas.
- Respetar `prefers-reduced-motion`.

## Modelo de datos sugerido

El modelo puede vivir como archivos JavaScript o JSON estaticos en una primera version.

### Entidad `Module`

```ts
type Module = {
  id: string;
  order: number;
  title: string;
  shortTitle: string;
  objective: string;
  estimatedMinutes?: number;
  prerequisites: string[];
  concepts: string[];
  sections: ModuleSection[];
  activity: Activity;
  evaluation: Evaluation;
  unlockCriteria: UnlockCriteria;
  resourceIds: string[];
};
```

### Entidad `ModuleSection`

```ts
type ModuleSection = {
  id: string;
  title: string;
  body: string;
  type: "intro" | "concepts" | "example" | "activity" | "evaluation" | "resources";
};
```

### Entidad `Activity`

```ts
type Activity = {
  id: string;
  type: "quiz" | "sort" | "checklist" | "scenario" | "template_editor";
  prompt: string;
  data: unknown;
};
```

### Entidad `Evaluation`

```ts
type Evaluation = {
  id: string;
  type: "score" | "checklist" | "rubric" | "completion";
  passingRule: string;
  questions?: Question[];
  checklist?: ChecklistItem[];
};
```

### Entidad `Resource`

```ts
type Resource = {
  id: string;
  title: string;
  description: string;
  moduleIds: string[];
  lockedUntilModuleId?: string;
  filename: string;
  markdown: string;
};
```

### Entidad `ProgressState`

```ts
type ProgressState = {
  diagnosticCompleted: boolean;
  selectedTask?: string;
  currentModuleId: string;
  modules: Record<string, ModuleProgress>;
  resourceDownloads: Record<string, number>;
  updatedAt: string;
};
```

### Entidad `ModuleProgress`

```ts
type ModuleProgress = {
  status: "bloqueado" | "disponible" | "en_progreso" | "completado";
  completedSections: string[];
  activityData?: unknown;
  evaluationResult?: {
    passed: boolean;
    score?: number;
    completedAt?: string;
  };
};
```

## Estructura de archivos recomendada

Para una implementacion web simple sin backend, se recomienda:

```text
/src
  /components
    AppShell.tsx
    Header.tsx
    RouteMap.tsx
    ModuleCard.tsx
    ModuleView.tsx
    ResourceLibrary.tsx
    CopyButton.tsx
    DownloadButton.tsx
    ProgressIndicator.tsx
  /components/activities
    DiagnosticQuiz.tsx
    OptionQuestion.tsx
    SortExercise.tsx
    ChecklistExercise.tsx
    ScenarioDecision.tsx
    TextTemplateEditor.tsx
  /data
    modules.ts
    resources.ts
    glossary.ts
  /lib
    progressStorage.ts
    unlockRules.ts
    downloadMarkdown.ts
    clipboard.ts
  /styles
    globals.css
  App.tsx
  main.tsx
```

Si se implementa sin framework, la misma separacion puede adaptarse a:

```text
/assets
/data
  modules.js
  resources.js
  glossary.js
/scripts
  app.js
  progress-storage.js
  unlock-rules.js
  download-markdown.js
/styles
  styles.css
index.html
```

## Reglas funcionales por modulo

### Diagnostico inicial

- Debe poder completarse en menos de 3 minutos.
- Debe guardar la tarea real elegida.
- Debe mostrar un resultado simple: principiante, intermedio o avanzado.
- Debe desbloquear Fundamentos de IA.

### Fundamentos de IA

- Debe explicar capacidades y limites.
- Debe incluir comparaciones visuales o tarjetas.
- Debe evaluar con opcion multiple.
- Debe mostrar feedback si una respuesta es incorrecta.

### Prompt como instruccion

- Debe mostrar prompt debil vs prompt mejorado.
- Debe permitir completar un prompt estructurado.
- Debe validar objetivo, contexto, tarea, formato y criterios.
- Debe ofrecer plantilla copiables al completar.

### Contexto, tokens y decisiones

- Debe presentar escenarios de decision.
- Debe explicar impacto de claridad, costo y ruido.
- Debe permitir comparar estrategias.
- Debe desbloquear checklist de tokens y contexto.

### Markdown como sistema de contexto

- Debe mostrar un proceso desordenado y una estructura Markdown clara.
- Debe permitir completar una mini plantilla `.md`.
- Debe validar encabezados, entradas, salida y criterios.
- Debe ofrecer descarga de la plantilla resultante.

### Tools y skills

- Debe comparar prompt, plantilla, skill y tool.
- Debe incluir selector de estrategia por caso.
- Debe permitir disenar una skill simple.
- Debe reforzar permisos, entradas, salidas y verificacion.

### MCP

- Debe explicar el flujo usuario-agente-MCP-herramienta-resultado.
- Debe incluir casos donde MCP aporta valor y donde no.
- Debe incluir riesgos de permisos, datos sensibles y trazabilidad.
- Debe evaluar con una decision explicada, no solo opcion multiple.

### Loops

- Debe mostrar el loop: objetivo, plan, accion, observacion, correccion, verificacion, entrega.
- Debe permitir ordenar pasos.
- Debe pedir una verificacion concreta para la tarea real elegida.
- Debe desbloquear la plantilla de agent loop.

### Agentes

- Debe guiar la creacion de un blueprint de agente.
- Debe reutilizar la tarea real elegida en el diagnostico.
- Debe pedir objetivo, usuario, contexto, herramientas, flujo, criterios, riesgos y limites.
- Debe permitir copiar o descargar el blueprint final.

### Biblioteca de recursos

- Debe listar todos los recursos.
- Debe permitir filtrar por modulo o tipo.
- Debe mostrar recursos bloqueados con requisito.
- Debe permitir copiar y descargar recursos disponibles.

## Manejo de errores y casos limite

- Si `localStorage` no esta disponible, la pagina debe seguir funcionando en memoria y avisar que el progreso no se guardara.
- Si una persona recarga durante una actividad, debe restaurarse el avance guardado.
- Si intenta abrir un modulo bloqueado, debe mostrarse el requisito concreto.
- Si falla copiar al portapapeles, debe mostrarse el texto seleccionable.
- Si falla una descarga, debe ofrecerse copiar el contenido.
- Si una evaluacion no se aprueba, debe mostrar feedback y permitir reintentar.
- Si se reinicia el progreso, debe pedir confirmacion.

## Requisitos de contenido

- Todo el texto visible debe estar en espanol.
- El tono debe ser claro, practico y directo.
- Evitar tecnicismos sin definicion.
- Cada concepto nuevo debe conectarse con un ejemplo.
- Los nombres tecnicos como `prompt`, `tokens`, `skill`, `MCP`, `loop` y `agent` pueden mantenerse en ingles cuando sean conceptos centrales.
- Las plantillas deben estar en Markdown limpio.

## Criterios de aceptacion

### Experiencia general

- La pagina muestra hero, diagnostico, mapa de ruta, modulos y biblioteca de recursos.
- La persona puede iniciar la ruta desde el hero.
- El progreso general se actualiza al completar modulos.
- Los modulos bloqueados, disponibles, en progreso y completados se distinguen claramente.

### Desbloqueo

- Completar el diagnostico desbloquea Fundamentos de IA.
- Completar cada modulo desbloquea exactamente el siguiente modulo.
- Un modulo bloqueado no permite completar actividades, pero si muestra su objetivo y requisito.
- Un modulo completado puede reabrirse sin perder su estado.

### Actividades y evaluaciones

- Cada modulo tiene una actividad practica.
- Cada modulo tiene criterio de desbloqueo claro.
- Las respuestas incorrectas muestran feedback util.
- Las actividades pueden completarse con teclado.

### Recursos

- Cada plantilla disponible puede copiarse.
- Cada plantilla disponible puede descargarse como `.md`.
- Los archivos descargados tienen nombre claro y contenido Markdown valido.
- Los recursos bloqueados explican que modulo falta completar.

### Persistencia

- El avance se mantiene despues de recargar la pagina.
- La tarea real elegida en el diagnostico se reutiliza en ejercicios posteriores.
- Existe una opcion para reiniciar progreso con confirmacion.

### Responsividad

- La experiencia funciona en movil, tablet y escritorio.
- En movil no hay contenido horizontal obligatorio.
- La navegacion de modulos es usable en pantallas pequenas.
- Los controles tactiles tienen tamano suficiente.

### Accesibilidad

- La navegacion principal es accesible con teclado.
- El foco visible se mantiene en todos los controles.
- Los estados no dependen solo del color.
- Las actividades de ordenar tienen alternativa no basada en arrastrar.
- Los cambios importantes de estado se anuncian de forma accesible.

### Calidad de contenido

- Los modulos respetan la progresion pedagogica definida.
- No se presenta MCP antes de explicar tools y skills.
- No se presenta agentes antes de explicar loops, contexto y herramientas.
- Las plantillas coinciden con los recursos definidos en la documentacion existente.

## Fuera de alcance para la primera version

- Login o cuentas de usuario.
- Backend para guardar progreso.
- Panel administrativo para editar contenido.
- Analitica avanzada.
- Certificados.
- Integraciones reales con MCP.
- Generacion de respuestas con IA dentro de la pagina.
- Sincronizacion entre dispositivos.

## Recomendacion de primera version

Construir primero una version estatica con datos locales, progreso en `localStorage`, actividades simples y recursos copiables. Esto permite validar la experiencia pedagogica antes de invertir en backend, cuentas o integraciones externas.
