function setup() {
  createCanvas(windowWidth , windowHeight)
  background(255,100,100)
}

function draw() { 
  triangle(mouseX, mouseY, 110, 110);
  stroke(100,90,0);
  ellipse(100,100,100,100)
  fill(100,100,0)
}
