var grid;
var center;
var spirolateral;

const MESH_WIDTH = 25;

function setup() {
    createCanvas(windowWidth, windowHeight);
    grid = new Grid(windowWidth, windowHeight, MESH_WIDTH);

    centerX = Math.floor(windowWidth/(3 * MESH_WIDTH)) * MESH_WIDTH
    centerY = Math.floor(windowHeight/(3* MESH_WIDTH)) * MESH_WIDTH

    spirolateral = new Tracer(
        centerX,
        centerY, 
        5, 
        math.pi * (98 + 2/11) / 180,
        MESH_WIDTH
        );
    center = createVector(0, 0);
}
  
function draw() {
    background(20);
    grid.drawGrid();
    spirolateral.drawTracer();

    spirolateral.update(deltaTime/5);
}