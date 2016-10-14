function setup() {
  createCanvas(windowWidth , windowHeight)
  background(90,40,100)
}

function draw() { 
  triangle(mouseX, mouseY, 110, 110);
  stroke(100,40,0);
  ellipse(100,100,150,150)
  fill(100,60,0)
  square(15,20,5,2);
}
