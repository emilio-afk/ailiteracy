# AI Literacy — Taller de IA

Wiki de consulta sobre **fundamentos prácticos de IA** para un público de negocio (no técnico). Explica, sin tecnicismos, qué hace un modelo, cómo pedirle bien las cosas, cómo darle contexto y cómo llegar a agentes útiles y seguros.

Web estática: **HTML + CSS + JavaScript (ES modules)**, sin framework ni build.

## Estructura

```
index.html              Estructura de la página (sidebar + documento)
styles/                 base · layout · components · widgets
src/
  app-data.mjs          Fases + helpers (numeración auto-derivada)
  content/              1 archivo por tema (fuente de verdad del contenido)
    index.mjs           Orden canónico del wiki
  widgets.mjs           Registro de widgets interactivos
  widgets/              1 archivo por widget
  main.mjs              Motor de render
tests/app-data.test.mjs Pruebas del modelo de contenido
```

El contenido se organiza en 4 fases: **Entender · Pedir bien · Hacer más · Construir y operar**. Cada tema sigue el formato: idea principal → ficha técnica → ¿qué es? → ejemplo en acción → receta → fuentes verificadas.

## Correr en local

```bash
python3 -m http.server 8123
# abre http://localhost:8123
```

## Pruebas

```bash
node tests/app-data.test.mjs
```
