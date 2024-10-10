function addSvgTitle(svg, text) {
    // Append a text element to measure its size
    const textElement = svg.append("text")
        .attr("x", 10)
        .attr("y", 20)
        .text(text)
        .style("font-size", "16px")
        .attr("fill", "black");
}

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

    return { nodes: pathNodes.map(id => nodes.find(n => n.id == id)), links: pathLinks };
}