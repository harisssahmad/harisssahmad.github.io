function Ball() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(5, 5);
    this.acc = createVector();
    this.radius = 10;
    this.limit = 5;

    this.update = function() {
        this.vel.add(this.acc);
        this.vel.limit(this.limit);
        this.pos.add(this.vel);
        this.acc.mult(0);

        this.checkCollision();
    }

    this.collides = function(platform) {
        return (
            this.pos.x <= (platform.pos.x + platform.width / 2) &&
            this.pos.x >= (platform.pos.x - platform.width / 2) &&
            this.pos.y <= (platform.pos.y + platform.height) &&
            this.pos.y >= (platform.pos.y - platform.height)
        )
    }

    this.checkCollision = function() {
        // check collision AND the direction of the ball
		if (this.collides(p1) && this.vel.heading() < 0 ) {
			this.vel.mult(1, -1);
			score++;
		}
		else if (this.collides(p2) && this.vel.heading() > 0 ) {
			this.vel.mult(1, -1);
			score++;
		}

		// check collision with walls
		else if(((this.pos.x + this.radius) >= width) || ((this.pos.x - this.radius) <= 0)) {
			this.vel.mult(-1, 1);
		}

		if(this.pos.y < 0 - this.radius * 2) {
			this.pos.y = height;
			score--;
		}
		else if(this.pos.y > height + this.radius * 2) {
			this.pos.y = 0;
			score--;
		}
    }

    this.show = function() {
        noStroke();
        fill(255, 0, 10);
        ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
    }
}