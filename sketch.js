function setup() {
  createCanvas(windowWidth , windowHeight)
  background(5,4,100)
}

function draw() { 
  triangle(mouseX, mouseY, 110, 110);
  stroke(75,60,0);
  ellipse(100,100,150,150);
  fill(80,75,0);

}
