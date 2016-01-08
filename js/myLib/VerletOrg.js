// Verlet Org class

function VerletOrg(pos, vecs, index, rules) {
	this.pos = pos;
	this.vecs = vecs;
	
	this.nodes = [];
	this.sticks = [];
for(var i=0; i<this.vecs.length; i++) {
	this.nodes[i] = new VerletBall(this.vecs[i]):
}

for(var i=0; i<index.length; i++) {
	this.sticks[i] = new VerletStick(this.nodes[index[i].elem1], this.nodes[index[i].elem2], .09):
}

	//this.spd = new Vec2(.25, .3);
	//this.pos.add(offset);
};

VerletOrg.prototype.run = function(){
	for(var i=0; i<sticks.length; i++) {
		sticks[i].run();
	}
};

VerletOrg.prototype.move = function(){
	this.pos.add(spd);
};

VerletOrg.prototype.display = function(ctx){
	for(var i=0; i<sticks.length; i++) {
		this.sticks[i].displayStick(ctx, 8, "blue");
		this.sticks[i].displayNodes(ctx, 4, "orange");
	}
};

