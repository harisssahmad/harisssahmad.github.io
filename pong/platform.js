function Platform(x, y) {
    this.pos = createVector(x, y);
    this.width = 80;
    this.height = 10;
    this.red = 255;
    this.green = 255;
    this.blue = 255;

    this.show = function() {
        push();
        stroke(0);
        rectMode(CENTER);
        fill(this.red, this.green, this.blue);
        rect(this.pos.x, this.pos.y, this.width, this.height);
        pop();
    }

    this.setColor = function(r, g, b) {
        this.red = r;
        this.green = g;
        this.blue = b;
    }

    this.move = function(location) {
        this.pos.x = location;
    }
}