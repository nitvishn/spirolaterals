class Grid {
    constructor(windowWidth, windowHeight, mesh){
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
        this.mesh = mesh;
    }

    drawGrid(){
        strokeWeight(1);
        stroke(50);
        var x = 0;
        while(x < this.windowWidth){
            line(x, 0, x, this.windowHeight);
            x += this.mesh;
        }

        var y = 0;
        while(y < this.windowHeight){
            line(0, y, this.windowWidth, y);
            y += this.mesh;
        }   
    }
}