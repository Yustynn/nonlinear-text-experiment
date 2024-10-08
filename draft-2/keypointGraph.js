function renderKeypointGraph(nodeId) {
    const TITLE_TEXT = "Path from current point to main conclusion"
    if (nodeId === undefined) {
        return;
    }


    // Create the input graph
    var g = new dagreD3.graphlib.Graph()
    .setGraph({})
    .setDefaultEdgeLabel(function() { return {}; });

    const adjacency = {}
    for (const { source, target } of links) {
        if (adjacency[source] === undefined) {
            adjacency[source] = [];
        }
        adjacency[source].push(target);
        if (adjacency[target] === undefined) {
            adjacency[target] = [];
        }
        adjacency[target].push(source);
    }

    const { nodes: pathNodes, links: pathLinks } = dijkstraShortestPathWithLinks(nodes, links, nodeId, 10);

    const selNodes = pathNodes.filter(n => n.kind === KEYPOINT || n.kind === MAIN_CONCLUSION || n.id == nodeId);
    const selLinks = []
    for (let i = 0; i < selNodes.length - 1; i++) {
        selLinks.push({ source: selNodes[i].id, target: selNodes[i+1].id });
    }

    for (let node of selNodes) {
        g.setNode(node.id, { label: node.id + " " + node.text, class: "node-"+node.id });
    }

    for (let link of selLinks) {
        g.setEdge(
            link.source,
            link.target,
            { label: link.kind, class: link.kind, arrowhead: "undirected" }
        );

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
    const svg = d3.select("#full-graph")
        
    svg.selectAll("*").remove();
    addSvgTitle(svg, TITLE_TEXT);
    const svgGroup = svg.append("g");

    // Add zoom and pan behavior
    const zoom = d3.zoom().on("zoom", function(event) {
        svgGroup.attr("transform", event.transform);
    });

    svg.call(zoom);

    // Run the renderer. This is what draws the final graph.
    render(d3.select("#full-graph g"), g);

    // Center the graph
    var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
    svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");

    function extractTranslateValues(translateString) {
        const regex = /translate\(([^,]+),([^\)]+)\)/;
        const match = translateString.match(regex);
        if (match) {
            const x = parseFloat(match[1]);
            const y = parseFloat(match[2]);
            return { x, y };
        }
        return null;
    }



    const node = g.node(nodeId);
    
    const rectPartial = document.querySelector(`#full-graph g.node-${nodeId} > rect`);
    const { x, y } = extractTranslateValues(rectPartial.parentElement.getAttribute("transform"));
    const svg_ = document.querySelector("svg");
    const w = svg_.clientWidth;
    const h = svg_.clientHeight;

    const tx = w/2 - x;
    const ty = h/2 - y;


    var transform = d3.zoomIdentity.translate(tx, ty).scale(1);
    svg.transition().duration(0).call(zoom.transform, transform);
    addSvgTitle(svg, TITLE_TEXT);
}