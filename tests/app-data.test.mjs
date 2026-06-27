import assert from "node:assert/strict";
import {
  modules,
  phases,
  resources,
  createInitialProgress,
  getModuleStatus,
  completeModule,
  getOverallProgress,
} from "../src/app-data.mjs";

const EXPECTED_ORDER = [
  "diagnostico",
  "fundamentos",
  "modelos-multimodal",
  "prompt",
  "output",
  "tecnicas",
  "contexto",
  "markdown",
  "tools-skills",
  "palancas",
  "conocimiento-memoria",
  "mcp",
  "loops",
  "agentes",
  "donde-vive",
  "hooks",
  "multi-agente",
  "evals",
  "seguridad",
  "costos",
  "buen-uso",
  "recursos",
];

assert.equal(modules.length, 22, "the guide should include 22 modules");
assert.deepEqual(
  modules.map((module) => module.id),
  EXPECTED_ORDER,
  "modules should be in the documented reading order",
);

// La numeracion es DERIVADA del orden (app-data.mjs). Debe ser secuencial,
// con cero-padding, y unica.
assert.deepEqual(
  modules.map((module) => module.number),
  modules.map((_, index) => String(index).padStart(2, "0")),
  "module numbers should be auto-derived from order (sequential, zero-padded)",
);
assert.equal(
  new Set(modules.map((module) => module.number)).size,
  modules.length,
  "module numbers should be unique",
);

// Estructura minima de todos los modulos.
assert.ok(
  modules.every((module) => module.title && module.concepts.length >= 3),
  "each module should expose a title and at least 3 concepts",
);

// Los modulos de tema (con fase) deben traer el formato completo del wiki.
const phaseIds = new Set(phases.map((phase) => phase.id));
const docModules = modules.filter((module) => module.phase);
assert.ok(docModules.length >= 17, "there should be at least 17 topic modules");
assert.ok(
  docModules.every((module) => phaseIds.has(module.phase)),
  "every topic module must belong to a declared phase",
);
assert.ok(
  docModules.every(
    (module) =>
      module.ideaPrincipal &&
      module.spec &&
      module.spec.nivel &&
      module.spec.cuando &&
      module.spec.requiere &&
      module.whatIs?.length &&
      module.receta?.length,
  ),
  "each topic module needs idea, spec (nivel/cuando/requiere), whatIs and a recipe",
);

// El "Ejemplo en acción" debe traer escenario + resultado, y un cuerpo válido
// según su tipo (chat por defecto, documento, esquema o resultados).
const TIPOS_EJEMPLO = new Set(["chat", "documento", "esquema", "resultados", undefined]);
assert.ok(
  docModules.every((module) => {
    const ej = module.ejemplo;
    if (!ej || !ej.escenario?.texto || !ej.resultado) return false;
    if (!TIPOS_EJEMPLO.has(ej.tipo)) return false;
    if (ej.tipo === "esquema") return (ej.nodos ?? []).length >= 2;
    if (ej.tipo === "resultados") return (ej.tabla?.filas ?? []).length >= 1;
    if (ej.tipo === "documento") {
      const bloques = (ej.secciones ?? []).flatMap((s) => s.bloques ?? []);
      return bloques.length >= 1 && bloques.every((b) => b.tipo);
    }
    // chat (default)
    const turnos = (ej.secciones ?? []).flatMap((s) => s.turnos ?? []);
    return turnos.length >= 2 && turnos.every((t) => (t.de === "tu" || t.de === "claude") && t.texto);
  }),
  "each topic module needs a valid ejemplo (escenario, resultado, and a body matching its tipo)",
);

// Los 6 modulos nuevos deben citar fuentes verificadas.
const withSources = ["modelos-multimodal", "output", "palancas", "conocimiento-memoria", "evals", "seguridad"];
for (const id of withSources) {
  const module = modules.find((m) => m.id === id);
  assert.ok(module, `module ${id} should exist`);
  assert.ok(
    module.fuentes?.length && module.fuentes.every((f) => f.label && /^https?:\/\//.test(f.url)),
    `module ${id} should list verified sources with valid URLs`,
  );
}

const initial = createInitialProgress();
// Tutorial sin friccion: todos los modulos estan disponibles desde el inicio.
assert.equal(getModuleStatus(initial, "diagnostico"), "disponible");
assert.equal(getModuleStatus(initial, "seguridad"), "disponible");
assert.ok(
  modules.every((module) => getModuleStatus(initial, module.id) !== "bloqueado"),
  "no module should ever be locked",
);
assert.equal(getOverallProgress(initial).completed, 0);
assert.equal(getOverallProgress(initial).total, 22);

const afterDiagnostic = completeModule(initial, "diagnostico", {
  selectedTask: "Preparar reuniones con clientes",
});
assert.equal(getModuleStatus(afterDiagnostic, "diagnostico"), "completado");
assert.equal(afterDiagnostic.selectedTask, "Preparar reuniones con clientes");

assert.ok(resources.length >= 8, "resource library should include the documented templates");
assert.ok(
  resources.every((resource) => resource.title && resource.markdown.includes("#")),
  "each resource should include a title and Markdown preview",
);

console.log("app-data tests passed");
