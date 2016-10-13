function setup() {
  createCanvas(windowWidth , windowHeight)
}

function draw() {
  fill(6,5,1);
  ellipse(mouseX , mouseY , 110 , 110); 
  triangle(mouseX, mouseY, 110, 110);
}
