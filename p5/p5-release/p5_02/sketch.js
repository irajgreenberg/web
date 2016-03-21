// p5 02
// Ira Greenberg, 2016

var x, y, spdX, spdY;
var radius = 30;

function setup(){
	createCanvas(600, 400);
	x = width/2;
	y = height/2
	spdX = 1.2;
	spdY = 2.3;
}

function draw(){
	background(0);
	fill(100, 255, 30);
	ellipse(x, y, radius*2, radius*2);
	x += spdX;
	y += spdY;
	checkCollisions();
}

function checkCollisions(){
	if (x > width - radius) {
		spdX *= -1;
	} else if (x < radius) {
		spdX *= -1;
	}

	if (y > height - radius) {
		spdY *= -1;
	} else if (y < radius) {
		spdY *= -1;
	}
}