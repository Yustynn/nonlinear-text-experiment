function renderPartialGraph(nodeId) {
    const TITLE_TEXT = `Logic graph of local region (depth=${config.partialGraph.depth})`
    if (nodeId === undefined) {
        return;
    }


    // Create the input graph
    var g = new dagreD3.graphlib.Graph()
    .setGraph({})
    .setDefaultEdgeLabel(function() { return {}; });


    function getRelevantNodes(nodeId) {
        function hasPath(from, depthRemaining, visited) {
            if (from == nodeId) return true;
            if (depthRemaining == 0) return false
            if (adjacency[from] === undefined) return false

            for (const neighbor of adjacency[from]) {
                if (neighbor === nodeId) return true;
                if (visited[neighbor]) continue;
                visited[neighbor] = true;

                if (hasPath(neighbor, depthRemaining - 1, visited)) return true;
            }

            return false
        }

        const selNodes = []
        for (const node of nodes) {
            if (hasPath(node.id, config.partialGraph.depth, {})) selNodes.push(node);
        }

        return selNodes;
    }

    const selNodes = getRelevantNodes(nodeId);
    const selNodeIds = selNodes.map(n => n.id);
    console.log("selNodeIds", selNodeIds)

    console.log("length of links", links.length)
    const selLinks = links.filter(e => selNodeIds.includes(e.source) && selNodeIds.includes(e.target));
    selNodeIds.push(nodeId);

    for (let node of selNodes) {
        g.setNode(node.id, { label: formatNodeText(node), class: "node-"+node.id });
    }

    for (let link of selLinks) {
        g.setEdge(
            link.source,
            link.target,
            { label: link.kind, class: link.kind }
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
    const svg = d3.select("#partial-graph")
        
    svg.selectAll("*").remove();
    addSvgTitle(svg, TITLE_TEXT);

    const svgGroup = svg.append("g");

    // Add zoom and pan behavior
    const zoom = d3.zoom().on("zoom", function(event) {
        svgGroup.attr("transform", event.transform);
    });

    svg.call(zoom);

    // Run the renderer. This is what draws the final graph.
    render(d3.select("#partial-graph g"), g);

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
    
    const rectPartial = document.querySelector(`#partial-graph g.node-${nodeId} > rect`);
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