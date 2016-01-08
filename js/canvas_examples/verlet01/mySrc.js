var frameCount = 0;
var n1 = new VerletNode(new Vec2(100, 100));
var n2 = new VerletNode(new Vec2(200, 200));
var s1 = new VerletStick(n1, n2, .05);

function init(){
	window.requestAnimationFrame(draw);
	n1.pos.x += 1.3;
	n2.pos.x += 1.3;
}

function draw() {
	++frameCount;
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// same thing above in two lines
	//var c=document.getElementById("myCanvas");
	//var ctx=c.getContext("2d");
	ctx.save();
	ctx.fillStyle = 'rgba(200, 185, 0, 1)';
	var w = 150, h = 200;
	ctx.translate(canvas.width/2, canvas.height/2);
	ctx.rotate(frameCount*Math.PI/180.0);
	ctx.fillRect(-w/2, -h/2, w, h);
	ctx.restore();


    n1.verlet();
    n2.verlet();
	ctx.fillRect(n1.pos.x, n1.pos.y, 3, 3);
	ctx.fillRect(n2.pos.x, n2.pos.y, 3, 3);

	window.requestAnimationFrame(draw);
}

init();