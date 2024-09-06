// Create the input graph
var g = new dagreD3.graphlib.Graph()
  .setGraph({})
  .setDefaultEdgeLabel(function() { return {}; });

for (let node of nodes) {
    g.setNode(node.id, { label: node.id + " " + node.text, class: "node-"+node.id });
}

for (let link of links) {
    g.setEdge(link.source, link.target, { label: link.kind, class: link.kind });
}


g.nodes().forEach(function(v) {
  var node = g.node(v);
  // Round the corners of the nodes
  node.rx = node.ry = 5;
});

// Create the renderer
var render = new dagreD3.render();

// Set up an SVG group so that we can translate the final graph.
// var svg = d3.select("#content").append("svg"),
var svg = d3.select("#full-graph"),
    svgGroup = svg.append("g");

// Add zoom and pan behavior
var zoom = d3.zoom().on("zoom", function(event) {
    svgGroup.attr("transform", event.transform);
});

svg.call(zoom);

// Run the renderer. This is what draws the final graph.
render(d3.select("#full-graph g"), g);

// Center the graph
var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
svgGroup.attr("transform", "translate(" + xCenterOffset + ", 50)");
// svg.attr("height", g.graph().height + 40);

function zoomToPosition(x, y, scale) {
    var transform = d3.zoomIdentity.translate(x, y).scale(scale);
    svg.transition().duration(500).call(zoom.transform, transform);
}
