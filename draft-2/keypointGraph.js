function dijkstraShortestPathWithLinks(nodes, links, start, end) {
    const graph = new Map();

    // Build graph from links
    links.forEach(({ source, target, kind }) => {
        if (!graph.has(source)) graph.set(source, []);
        if (!graph.has(target)) graph.set(target, []);
        graph.get(source).push({ node: target, link: { source, target, kind } });
        graph.get(target).push({ node: source, link: { source: target, target: source, kind } }); // Undirected graph
    });

    // Dijkstra's algorithm setup
    const distances = new Map();
    const previous = new Map();
    const linkUsed = new Map(); // Store the link used to reach each node
    const _nodes = new Set(graph.keys());

    _nodes.forEach(node => distances.set(node, Infinity));
    distances.set(start, 0);

    while (_nodes.size > 0) {
        // Find the closest node
        let currentNode = null;
        _nodes.forEach(node => {
            if (currentNode === null || distances.get(node) < distances.get(currentNode)) {
                currentNode = node;
            }
        });

        if (currentNode === end) break;

        // Remove the current node from the unvisited set
        _nodes.delete(currentNode);

        // Update distances to neighbors
        const currentDistance = distances.get(currentNode);
        graph.get(currentNode).forEach(({ node: neighbor, link }) => {
            const newDistance = currentDistance + 1; // Assuming each edge has weight 1
            if (newDistance < distances.get(neighbor)) {
                distances.set(neighbor, newDistance);
                previous.set(neighbor, currentNode);
                linkUsed.set(neighbor, link); // Store the link used to reach this neighbor
            }
        });
    }

    // Reconstruct the shortest path with both nodes and links
    const pathNodes = [];
    const pathLinks = [];
    let currentNode = end;
    while (previous.has(currentNode)) {
        pathNodes.unshift(currentNode);
        pathLinks.unshift(linkUsed.get(currentNode));
        currentNode = previous.get(currentNode);
    }
    if (pathNodes.length === 0 || currentNode !== start) return { nodes: null, links: null }; // No path found

    pathNodes.unshift(start);

    return { nodes: nodes.filter(n => pathNodes.includes(n.id)), links: pathLinks };
}



function renderKeypointGraph(nodeId) {
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
}