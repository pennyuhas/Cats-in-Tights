function setup() {
  createCanvas(windowWidth , windowHeight)
  background(0,90,100)
}

function draw() { 
  triangle(mouseX, mouseY, 110, 110);
  stroke(40,0,0);
}
