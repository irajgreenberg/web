// p5 03
// Ira Greenberg, 2016

//var x, y, spdX, spdY;
var count = 200;
var pos = [];
var spd = [];
var radii = [];

function setup(){
	createCanvas(600, 400);
	for(var i=0; i<count; i++){
		pos.push(new p5.Vector(width/2, height/2));
		spd.push(new p5.Vector(-2+Math.random()*4, Math.random()*2));
		radii.push(random(5, 10));
	}
	//console.log(pos);
}

function draw(){
	background(0);
	fill(100, 255, 30);

	for(var i=0; i<count; i++){
		ellipse(pos[i].x, pos[i].y, radii[i]*2, radii[i]*2);
		pos[i].x += spd[i].x;
		pos[i].y += spd[i].y;
		//checkCollisions();
	}
}

	// function checkCollisions(){
	// 	if (x > width - radius) {
	// 		spdX *= -1;
	// 	} else if (x < radius) {
	// 		spdX *= -1;
	// 	}

	// 	if (y > height - radius) {
	// 		spdY *= -1;
	// 	} else if (y < radius) {
	// 		spdY *= -1;
	// 	}
	// }