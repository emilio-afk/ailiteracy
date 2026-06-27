// Registro de widgets interactivos. Cada widget vive en ./widgets/<id>.mjs
// para que editar uno no cargue todos. Los ejemplos dinámicos van en ./widgets/examples.mjs
import { initFundamentosWidget } from "./widgets/fundamentos.mjs";
import { initPromptWidget } from "./widgets/prompt.mjs";
import { initTecnicasWidget } from "./widgets/tecnicas.mjs";
import { initContextoWidget } from "./widgets/contexto.mjs";
import { initMarkdownWidget } from "./widgets/markdown.mjs";
import { initToolsSkillsWidget } from "./widgets/tools-skills.mjs";
import { initMcpWidget } from "./widgets/mcp.mjs";
import { initLoopsWidget } from "./widgets/loops.mjs";
import { initAgentesWidget } from "./widgets/agentes.mjs";
import { initDondeViveWidget } from "./widgets/donde-vive.mjs";
import { initBuenUsoWidget } from "./widgets/buen-uso.mjs";
export { renderCustomExamples } from "./widgets/examples.mjs";

const REGISTRY = {
    "fundamentos": initFundamentosWidget,
    "prompt": initPromptWidget,
    "tecnicas": initTecnicasWidget,
    "contexto": initContextoWidget,
    "markdown": initMarkdownWidget,
    "tools-skills": initToolsSkillsWidget,
    "mcp": initMcpWidget,
    "loops": initLoopsWidget,
    "agentes": initAgentesWidget,
    "donde-vive": initDondeViveWidget,
    "buen-uso": initBuenUsoWidget,
};

// Ids que tienen widget: main.mjs solo dibuja la ventana si el id está aquí
// (así un módulo sin widget no muestra una caja "demo en vivo" vacía).
export const widgetIds = new Set(Object.keys(REGISTRY));

export function initWidgets() {
  document.querySelectorAll(".interactive-widget-wrapper").forEach((wrapper) => {
    const init = REGISTRY[wrapper.dataset.widgetId];
    if (init) init(wrapper);
  });
}
