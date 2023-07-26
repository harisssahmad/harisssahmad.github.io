let x = 0;
let y = 0;
let spacing;
let strokeSize;
let canvas;

let screenWidth = window.innerWidth;

function setup() {
    // Get the reference to the div where you want to position the sketch
    let container = document.getElementById('sketch-container');
    let containerHeight = document.getElementById('sketch-height');

    // Set the canvas size to match the container's size
    let width = container.offsetWidth;
    let height = screenWidth > 991 ? containerHeight.offsetHeight : 150;

	// Set the spacing and stroke size according to screen size
	spacing = screenWidth > 991 ? 20 : 15;
	strokeSize = screenWidth > 991 ? 3 : 2;

    // Create the p5.js canvas and set its parent to the target div
    canvas = createCanvas(width, height);
    canvas.parent('sketch-container');

    background(255);
}

function draw() {
	stroke(0);
	strokeWeight(strokeSize);
	if(random(1) < 0.5) {
		line(x, y, x + spacing, y + spacing);
	} else {
		line(x, y + spacing, x + spacing, y);
	}

	x += spacing;

	if(x >= width) {
		x = 0;
		y += spacing;
	}

	if(y > height) {
		x = 0;
		y = 0;
        background(255);
		redraw();
	}
}