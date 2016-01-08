// Vec2 class
var Vec2  = function(x, y) {
	this.x = x;
	this.y = y;
};

Vec2.prototype.add = function(vec2){
	this.x += vec2.x;
	this.y += vec2.y;
};

Vec2.prototype.addSclr = function(sclr){
	this.x += sclr;
	this.y += sclr;
};

Vec2.prototype.sub = function(vec2){
	this.x -= vec2.x;
	this.y -= vec2.y;
};

Vec2.prototype.mult = function(vec2){
	this.x *= vec2.x;
	this.y *= vec2.y;
};

Vec2.prototype.div = function(vec2){
	this.x /= vec2.x;
	this.y /= vec2.y;
};

Vec2.prototype.set = function(vec2){
	this.x = vec2.x;
	this.y = vec2.y;
};

Vec2.prototype.mag = function(){
	return Math.sqrt(x*x + y*y);
};
