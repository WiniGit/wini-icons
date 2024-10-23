figma.showUI(__html__, { width: 500, height: 350 });

// figma.showUI(`
//   <html>
//     <input type="file" id="upload" accept=".svg" />
//     <script>
//       document.getElementById('upload').onchange = function(event) {
//         const file = event.target.files[0];
//         const reader = new FileReader();
//         reader.onload = function(e) {
//           const svgData = e.target.result;
//           parent.postMessage({ pluginMessage: { type: 'import-svg', svgData } }, '*');
//         };
//         reader.readAsText(file);
//       };
//     </script>
//   </html>
// `, { width: 300, height: 200 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'import-svg') {
    const svgNode = figma.createNodeFromSvg(msg.svgData);
    figma.currentPage.appendChild(svgNode);

    // Optionally adjust position or other properties of the imported SVG
    svgNode.x = 100;
    svgNode.y = 100;

    figma.viewport.scrollAndZoomIntoView([svgNode]);
    figma.closePlugin();
  }
};
