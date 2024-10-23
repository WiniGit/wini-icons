
figma.showUI(__html__, { width: 400, height: 400 });

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
