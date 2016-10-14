function setup() {
  createCanvas(windowWidth , windowHeight)
  background(5,4,100)
}

function draw() { 
  stroke(255,154,52)
  triangle(mouseX, mouseY, 110, 110);
  fill(255,255,0);
  ellipse(100,110,100,110);
  stroke(255,255,255);
  
}
 function mousePressed(){
  fill(255,255,255)
  ellipse(100,mouseY,150,150);
}
