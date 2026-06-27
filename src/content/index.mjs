// Orden canónico del wiki. El número de cada módulo se DERIVA de esta posición
// (ver app-data.mjs). Para insertar un tema: añade su import y colócalo en el
// array `modules` donde corresponda. No hay números que actualizar a mano.
import diagnostico from "./diagnostico.mjs";
import fundamentos from "./fundamentos.mjs";
import modelosMultimodal from "./modelos-multimodal.mjs";
import prompt from "./prompt.mjs";
import output from "./output.mjs";
import tecnicas from "./tecnicas.mjs";
import contexto from "./contexto.mjs";
import markdown from "./markdown.mjs";
import toolsSkills from "./tools-skills.mjs";
import palancas from "./palancas.mjs";
import conocimientoMemoria from "./conocimiento-memoria.mjs";
import mcp from "./mcp.mjs";
import loops from "./loops.mjs";
import agentes from "./agentes.mjs";
import dondeVive from "./donde-vive.mjs";
import hooks from "./hooks.mjs";
import multiAgente from "./multi-agente.mjs";
import evals from "./evals.mjs";
import seguridad from "./seguridad.mjs";
import costos from "./costos.mjs";
import buenUso from "./buen-uso.mjs";
import recursos from "./recursos.mjs";
import resources from "./resources.mjs";

export const modules = [
  diagnostico, // 00
  fundamentos, // 01  ── Entender
  modelosMultimodal, // 02  ── Entender
  prompt, // 03  ── Pedir bien
  output, // 04  ── Pedir bien
  tecnicas, // 05  ── Pedir bien
  contexto, // 06  ── Pedir bien
  markdown, // 07  ── Pedir bien
  toolsSkills, // 08  ── Hacer más
  palancas, // 09  ── Hacer más
  conocimientoMemoria, // 10  ── Hacer más
  mcp, // 11  ── Hacer más
  loops, // 12  ── Hacer más
  agentes, // 13  ── Construir y operar
  dondeVive, // 14  ── Construir y operar
  hooks, // 15  ── Construir y operar
  multiAgente, // 16  ── Construir y operar
  evals, // 17  ── Construir y operar
  seguridad, // 18  ── Construir y operar
  costos, // 19  ── Construir y operar
  buenUso, // 20  ── Construir y operar
  recursos, // 21
];
export { resources };
