let ball;
let p1, p2;
let padding = 30;
let score = 0;
let description;

function setup() {
    createCanvas(600, 600);
    background(0);
    // top platform
    p1 = new Platform(width / 2, padding);

    // bottom platform
    p2 = new Platform(width / 2, height - padding);
    ball = new Ball();

    description = createP("Lonely Pong. Created by Haris Ahmad.<br>Use the mouse to operate both platforms.")
}

function draw() {
    background(0);

    // show score
    push();
    fill(245, 205, 255, 200);
    textSize(200);
    textAlign(CENTER, CENTER);
    text(score, width / 2, height / 2);
    pop();

    movePlatforms();
    changeColors();
    p1.show();
    p2.show();
    ball.update();
    ball.show();
}

function movePlatforms() {
    if (mouseX <= (width - p2.width / 2) && mouseX >= p2.width / 2) {
        p2.move(mouseX);
    } else if (mouseX < p2.width / 2) {
        p2.move(p2.width / 2);
    } else if (mouseX > (width - p2.width / 2)) {
        p2.move(width - p2.width / 2);
    }

    p1.move(width - p2.pos.x);
}

function changeColors() {
    if (ball.collides(p1)) {
        p1.setColor(255, 0, 10);
    } else {
        p1.setColor(255, 255, 255);
    }

    if (ball.collides(p2)) {
        p2.setColor(255, 0, 10);
    } else {
        p2.setColor(255, 255, 255);
    }
}