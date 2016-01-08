var n1 = new VerletNode(new Vec2(100, 100));
var n2 = new VerletNode(new Vec2(200, 200));
var s1 = new VerletStick(n1, n2, .05);

//function VerletOrg(pos, vecs, index, rules) {

	var vecs = [Vec2(-100,-500), Vec2(100,-3500), 
				Vec2(-100,-300), Vec2(100,-300), 
				Vec2(-100,-100), Vec2(100,-100), 
				Vec2(-100, 0), Vec2(100, 0), 
				Vec2(-100, 100), Vec2(100, 100), 
				Vec2(-100, 300), Vec2(100, 300), 
				Vec2(-100, 500), Vec2(100, 500)];
	var indices = [Index(), Index(), Index(), Index(), Index(), Index(), Index(), Index(), Index(), Index()];
var org = new VerletOrg(Vec2(0, 0), );

function init(){
	window.requestAnimationFrame(draw);
	// start Verlet by adding offset
	s1.push(1, new Vec2(3.3, 1.3));
}

function draw() {
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);

    // execute verlet calculations
    s1.run();

    // draw stick
    s1.displayStick(ctx, 10, "orange");
    s1.displayNodes(ctx, 5, "blue");
	

	window.requestAnimationFrame(draw);
}

init();