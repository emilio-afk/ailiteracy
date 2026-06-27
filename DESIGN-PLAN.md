# Plan de diseño — Taller de IA Wiki

Auditoría realizada el 2026-06-27. Fuente: análisis visual + inspección de CSS.

---

## Estado actual — Lo que funciona

- Sidebar oscuro índigo con iconos Lucide por módulo: identidad visual fuerte
- Sistema de tokens CSS coherente (Inter + IBM Plex Mono, paleta Astrolab)
- Formatos de ejemplo ricos (chat, documento, esquema, resultados)

---

## Problemas identificados

| # | Problema | Impacto | Evidencia en código |
|---|---|---|---|
| 1 | Columna de texto ~88ch (óptimo: 55–75ch) | Fatiga de lectura alta | `base.css:32` `--content-w: 860px` |
| 2 | Sin sistema de color por fase en contenido | Se pierde orientación al scrollear | No existe |
| 3 | `.meta` label casi invisible (`color: var(--faint)`) | Ancla de módulo inútil | `components.css:51–58` |
| 4 | Props strip sin fondo diferenciado | No se percibe como "ficha técnica" | `components.css:81–101` |
| 5 | H3 = body text visualmente (`font-size: 1.05rem`) | No puedes hojear secciones | `components.css:69–75` |
| 6 | Separadores entre módulos casi invisibles (`--line-soft`) | 21 módulos en cascada ininterrumpida | `components.css:42–48` |

---

## Paleta de fases propuesta

| Fase | Color | Hex |
|---|---|---|
| Entender | Cobalto Astrolab | `#0A56C6` |
| Pedir bien | Índigo violeta | `#6B3FD4` |
| Hacer más | Verde acción | `#0D8A68` |
| Construir y operar | Ámbar técnico | `#B8450A` |

Uso: borde izquierdo de 3px en `.page` + color del `.meta` label. No como fondos de bloque.

---

## Plan de implementación

### Tier 1 — Puro CSS · ~20 min · Hacer ya

1. **Estrechar columna de lectura**
   - `--content-w: 860px` → `760px`, padding lateral `56px` → `40px`
   - Resultado: ~70ch de texto (25% menos fatiga)

2. **Ficha técnica con fondo**
   - `.props`: quitar `border-top/bottom`, añadir `background: var(--line-soft); border-radius: 8px; padding: 16px 20px`
   - Resultado: el bloque se distingue del cuerpo de texto al hojear

3. **H3 más distinguible**
   - `.doc h3`: `font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--cobalto)`
   - Resultado: los puntos de entrada dentro de un módulo son visibles al scanear

4. **Separador de módulo más contundente**
   - `.page`: padding `52px 0` → `68px 0`, border `var(--line-soft)` → `var(--line)`
   - Resultado: fin e inicio de módulo son obvios

---

### Tier 2 — CSS + JS mínimo · ~95 min · Esta semana

5. **Sistema de color por fase en contenido**
   - En `main.mjs > renderSections()`: añadir `data-phase="${module.phase}"` al `<section>`
   - En CSS: `[data-phase="entender"] { border-left: 3px solid #0A56C6 }` × 4 fases
   - `.meta` dentro hereda el color de acento

6. **Meta label en color de fase**
   - Depende del ítem 5. Una vez con `data-phase`, cambiar `.meta` de `color: var(--faint)` a color por fase
   - El ancla de módulo pasa de casi invisible a inmediatamente legible

7. **Sticky breadcrumb al hacer scroll**
   - Barra fija (top: 0, 36px) que muestra el módulo activo
   - Reutilizar la IntersectionObserver de `setupScrollSpy()` para actualizar el DOM del breadcrumb

---

### Tier 3 — Backlog

8. **Cards de fase en portada** — 4 cards antes del primer módulo con nombre, descripción y lista de módulos. ~2h.
9. **Dark mode** — Tokens ya listos. Añadir `@media (prefers-color-scheme: dark)` con fondo near-black `~#0f111a`. ~3h.

---

## Matriz impacto / esfuerzo

```
                    BAJO ESFUERZO          ALTO ESFUERZO
ALTO IMPACTO    [1] Estrechar columna    [5] Color por fase
                [2] Props con fondo      [6] Meta label color
                [3] H3 caps+color        [7] Sticky breadcrumb
                [4] Separador módulo

BAJO IMPACTO    Hover nav más fuerte     [8] Cards portada
                Scroll-to-top            [9] Dark mode
```
