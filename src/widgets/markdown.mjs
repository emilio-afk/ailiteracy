export function initMarkdownWidget(container) {
  container.innerHTML = `
    <div class="widget-box markdown-widget">
      <div class="widget-title">Estructurador Visual a Markdown</div>
      <div class="widget-control-row">
        <button class="widget-btn active" id="btn-m5-raw">Muro de Texto Plano</button>
        <button class="widget-btn" id="btn-m5-format">Estructurar con Markdown</button>
      </div>
      <div class="markdown-comparison">
        <div class="md-box" id="md-box-content">
          <!-- Texto -->
        </div>
      </div>
      <div class="widget-caption" id="caption-m5">
        Los muros de texto sin formato confunden la separación entre datos y órdenes.
      </div>
    </div>
  `;

  const btnRaw = container.querySelector("#btn-m5-raw");
  const btnFormat = container.querySelector("#btn-m5-format");
  const mdBox = container.querySelector("#md-box-content");
  const caption = container.querySelector("#caption-m5");

  const rawText = `
    <div class="raw-view">
      Proceso de reembolsos de la empresa. El objetivo es que los empleados puedan cobrar sus gastos de viaje de forma rápida. Para usarlo se necesita que el empleado suba las facturas en PDF y el reporte de gastos firmado. El primer paso es revisar la validez de los archivos adjuntos. El segundo paso es validar que no superen el límite de 150 dólares por concepto. La salida esperada es la orden de pago lista para firmar por finanzas.
    </div>
  `;

  const formattedText = `
    <div class="md-formatted-view">
      <div class="scan-overlay"><span class="scan-indicator">IA identificando estructura...</span></div>
      <h3 style="margin:0 0 6px; color:var(--indigo);"># Proceso de Reembolsos</h3>
      <p style="margin:0 0 8px; font-size:0.92rem;"><strong>Objetivo:</strong> Reembolso ágil de gastos de viaje.</p>
      
      <h4 style="margin:8px 0 4px; color:var(--cobalto);">## Requisitos de Entrada</h4>
      <ul style="margin:0 0 8px; padding-left:18px; font-size:0.92rem;">
        <li>Facturas en formato PDF.</li>
        <li>Reporte de gastos firmado por líder directo.</li>
      </ul>

      <h4 style="margin:8px 0 4px; color:var(--cobalto);">## Flujo de Pasos</h4>
      <ol style="margin:0 0 8px; padding-left:18px; font-size:0.92rem;">
        <li>Validar integridad y formato de archivos adjuntos.</li>
        <li>Verificar el límite máximo de gasto ($150 USD por concepto).</li>
      </ol>

      <h4 style="margin:8px 0 4px; color:var(--cobalto);">## Salida Esperada</h4>
      <p style="margin:0; font-size:0.92rem;">Orden de pago estructurada lista para firma del área financiera.</p>
    </div>
  `;

  btnRaw.addEventListener("click", () => {
    btnRaw.classList.add("active");
    btnFormat.classList.remove("active");
    mdBox.innerHTML = rawText;
    caption.textContent = "Los muros de texto sin formato confunden la separación entre datos y órdenes.";
  });

  btnFormat.addEventListener("click", () => {
    btnFormat.classList.add("active");
    btnRaw.classList.remove("active");
    mdBox.innerHTML = formattedText;
    caption.innerHTML = "✨ <strong>¡Estructurado!</strong> Los títulos (<code>#</code>), listas (<code>-</code>) y enumeraciones le permiten al LLM escanear e identificar jerarquías operativas al instante sin cometer errores de lectura.";
  });

  // Inicializar
  mdBox.innerHTML = rawText;
}

// ============================================================================
// WIDGET 6: Tools y Skills (Escalera de Complejidad)
// ============================================================================
