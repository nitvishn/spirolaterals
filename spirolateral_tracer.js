class Tracer {

    constructor(x, y, n, theta, meshWidth){
        this.position = math.sparse([x, y]);
        console.log(this.position);
        this.n = n;

        this.current_num = n;
        this.current_progress = 0;
        this.current_matrix = math.identity(2);

        this.rotation_matrix = math.matrix([
            [math.cos(theta), -math.sin(theta)],
            [math.sin(theta), math.cos(theta)]
        ]);

        this.meshWidth = meshWidth;

        this.history = new Array();
    }

    update(steps){
        this.history.push(this.position);
        while(steps >= this.current_num - this.current_progress){
            steps -= this.current_num - this.current_progress;
            var deltaPosition = math.multiply(
                this.current_matrix,
                math.sparse([this.meshWidth*(this.current_num - this.current_progress), 0])
            );
            this.position = math.add(this.position, deltaPosition);
            this.current_progress = 0;
            this.current_num = (this.current_num) % this.n + 1;
            this.current_matrix = math.multiply(
                this.current_matrix,
                this.rotation_matrix
            );
            console.log("Changing direction", this.current_num);
            this.history.push(this.position);
        }
        var deltaPosition = math.multiply(
            this.current_matrix,
            math.sparse([this.meshWidth*steps, 0])
        );
        this.position = math.add(this.position, deltaPosition);
        this.current_progress += steps;
    }

    drawTracer(){
        noFill();
        stroke(255);
        strokeWeight(2);
        beginShape();
        // beginContour();
        this.history.forEach(
            function (position, index){
                vertex(position.subset(math.index(0, 0)), position.subset(math.index(1, 0)));
            }
        )
        // endContour();
        endShape();
        stroke(255, 0, 0);
        strokeWeight(5);
        // point(this.position.subset(math.index(0, 0)), this.position.subset(math.index(1, 0)));
        
    }

}