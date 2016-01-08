// Verlet Node
var VerletNode  = function(pos) {
	this.pos = pos;
	this.posOld = new Vec2(pos.x, pos.y);
};

VerletNode.prototype.push = function(offset){
	this.pos.add(offset);
};

VerletNode.prototype.verlet = function(){
	var posTemp = new Vec2(this.pos.x, this.pos.y);
	
	this.pos.x += (this.pos.x-this.posOld.x);
    this.pos.y += (this.pos.y-this.posOld.y);

	this.posOld.set(posTemp);
};
