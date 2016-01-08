// Verlet Stick
var VerletStick  = function(n1, n2, stiffness) {
	this.n1 = n1;
	this.n2 = n2;
	this.stiffness = stiffness;

	this.vecOrig = new Vec2(n2.pos.x-n1.pos.x, n2.pos.y-n1.pos.y);
	this.len = Math.sqrt((n2.pos.x-n1.pos.x)*(n2.pos.x-n1.pos.x), (n2.pos.y-n1.pos.y)*(n2.pos.y-n1.pos.y));
};


VerletStick.prototype.constrainLen = function(){
    var delta = new Vec2(n2.pos.x-n1.pos.x, n2.pos.y-bn1.pos.y);
    var deltaLength = delta.mag();
    var difference = ((deltaLength - len) / deltaLength);
    n1.pos.x += delta.x * (0.5 * stiffness * difference);
    n1.pos.y += delta.y * (0.5 * stiffness * difference);
    n2.pos.x -= delta.x * (0.5 * stiffness * difference);
    n2.pos.y -= delta.y * (0.5 * stiffness * difference);
  };