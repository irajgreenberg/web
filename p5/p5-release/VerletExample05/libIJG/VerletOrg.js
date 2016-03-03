// Verlet Org class

function VerletOrg(pos, vecs, indices, rules) {
	this.pos = pos;
	this.vecs = vecs;
	
	this.nodes = [];
	this.sticks = [];
	for(var i=0; i<this.vecs.length; i++) {
		this.nodes[i] = new VerletNode(this.vecs[i]);
	}

	for(var i=0; i<indices.length; i++) {
		//console.log(indices[i].elem1 + ", " + indices[i].elem2);
		this.sticks[i] = new VerletStick(this.nodes[indices[i].elem1], this.nodes[indices[i].elem2], .02, indices[i].isVisible);
	}

	//this.spd = new p5.Vector(.25, .3);
	//this.pos.add(offset);
};

VerletOrg.prototype.nudge = function(nodeID, offset){
	this.nodes[nodeID].nudge(offset);
};


VerletOrg.prototype.run = function(){
	for(var i=0; i<this.nodes.length; i++) {
		this.nodes[i].verlet();

		if(this.nodes[i].pos.x > width*2){
			this.nodes[i].pos.x = width*2;
		} else if(this.nodes[i].pos.x < 0){
			this.nodes[i].pos.x = 0;
		}

		if(this.nodes[i].pos.y > height*2){
			this.nodes[i].pos.y = height*2;
		} else if(this.nodes[i].pos.y < 0){
			this.nodes[i].pos.y = 0;
		}
	}

	for(var i=0; i<this.sticks.length; i++) {
		this.sticks[i].constrainLen();
	}
};

VerletOrg.prototype.move = function(){
	//this.pos.add(spd);
};

VerletOrg.prototype.display = function(){
	print(width);
	print(displayWidth);
	for(var i=0; i<this.sticks.length; i++) {
		this.sticks[i].displayStick(8, color(255, 127, 10));
		this.sticks[i].displayNodes(4, color('green'));
	}
};

