function getTopmostVisibleElement(containerId) {
    const container = document.getElementById(containerId);
    const children = container.children;
    let topmostElement = null;
    let minTop = Infinity;

    for (let i = 0; i < children.length; i++) {
        const rect = children[i].getBoundingClientRect();
        if (rect.top >= 0 && rect.top < minTop) {
            minTop = rect.top;
            topmostElement = children[i];
        }
    }

    return topmostElement;
}

function findNearestNodeEl(el) {
    const check = el => el.hasAttribute("node-id");

    function checkChildren(el) {
        for (const child of el.children) {
            if (check(child)) return child;
            const result = checkChildren(child);
            if (result) return result;
        }
    }

    // check self
    if (check(el)) return el;

    // check parents
    let currEl = el;
    while (currEl.parentElement) {
        currEl = currEl.parentElement;
        if (check(currEl)) return currEl;
    }
    // check children
    checkChildren(el);

    // check next siblings 
    if (el.nextElementSibling) {
        // can actually skip the parent check
        const result = findNearestNodeEl(el.nextElementSibling);
        if (result) return result;
    }
    // check parent next siblings recursively
    return findNearestNodeEl(el.parentElement.nextElementSibling);

}

function setSelected(el) {
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

    const nodeEl = findNearestNodeEl(el);
    const id = nodeEl.getAttribute("node-id");
    const rect = document.querySelector(`g.node-${id} > rect`);

    const priorSelected = document.querySelector("rect.selected");
    if (priorSelected) priorSelected.classList.remove("selected");

    rect.classList.add("selected");

    const { x, y } = extractTranslateValues(rect.parentElement.getAttribute("transform"));

    const svg = document.querySelector("svg");
    const w = svg.clientWidth;
    const h = svg.clientHeight;
    
    zoomToPosition(w/2 - x, h/2 - y, 1)
    console.log(`Node ${id} should be in view (x: ${x} to ${x + w/2}, y: ${y} to ${y + h/2})`);
}

// Usage

addEventListener("scroll", () => setSelected(getTopmostVisibleElement('content')));

// Function to handle the onenter event
function handleMouseEnter(event) {
    const target = event.target;
    if (target.children.length === 0) {
        setSelected(target)
    }
}

// Add event listener for mouseenter on the container
document.getElementById('content').addEventListener('mouseenter', handleMouseEnter, true);