// bouncing ball 3.2
var x = 0;

function setup() {
  createCanvas(600, 400);
 
}

function draw() {
  background(0);
  
  stroke(255);
  strokeWeight(4);
  noFill();
  

  if (mouseX > 300) {
    fill(255, 0, 200);
  } 
    ellipse(x, 200, 100, 100)
    x = x + 3;
}
