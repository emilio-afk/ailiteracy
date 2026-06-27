// Estructura y helpers de la guía.
// El CONTENIDO vive modularizado en ./content/ (un archivo por tema) para que
// editar un solo tema no obligue a cargar todo. Aquí solo quedan las fases,
// la reexportación del contenido y las funciones de progreso.
// Énfasis inline en el contenido: **negrita** y *itálica* (se renderizan en main.mjs).

import { modules as rawModules, resources } from "./content/index.mjs";

export const phases = [
  { id: "entender", label: "Entender", hint: "Qué es la IA y cómo piensa" },
  { id: "pedir", label: "Pedir bien", hint: "Instrucciones que dan buenos resultados" },
  { id: "hacer", label: "Hacer más", hint: "De responder texto a ejecutar trabajo" },
  { id: "construir", label: "Construir y operar", hint: "Diseñar agentes y usarlos con criterio" },
];

// El número es DERIVADO del orden en content/index.mjs (no se hardcodea).
// Insertar un módulo = añadir una línea al index en la posición correcta;
// los números se recalculan solos. Nunca más renumerar a mano.
export const modules = rawModules.map((module, index) => ({
  ...module,
  number: String(index).padStart(2, "0"),
}));

export { resources };

export function createInitialProgress() {
  return {
    selectedTask: "",
    completedModules: [],
    updatedAt: null,
  };
}

export function getModuleIndex(moduleId) {
  return modules.findIndex((module) => module.id === moduleId);
}

export function getModuleStatus(progress, moduleId) {
  // Guía de consulta sin fricción: todos los temas están siempre disponibles.
  // El único estado adicional es "visto" (completado), solo para el progreso.
  const completed = progress.completedModules ?? [];
  return completed.includes(moduleId) ? "completado" : "disponible";
}

export function completeModule(progress, moduleId, data = {}) {
  const completed = new Set(progress.completedModules ?? []);
  completed.add(moduleId);

  return {
    ...progress,
    ...data,
    completedModules: [...completed],
    updatedAt: new Date().toISOString(),
  };
}

export function getOverallProgress(progress) {
  const completed = progress.completedModules?.length ?? 0;
  const total = modules.length;
  return {
    completed,
    total,
    percentage: Math.round((completed / total) * 100),
  };
}
