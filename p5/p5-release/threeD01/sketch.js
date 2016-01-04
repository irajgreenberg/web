//draw a spinning cone with radius 200 and height 200
function setup(){
  createCanvas(100, 100, WEBGL);
}

function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cone(200, 200);
}