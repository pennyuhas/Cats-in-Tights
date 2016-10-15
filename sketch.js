function setup() {
  createCanvas(windowWidth , windowHeight)
  background(5,4,100)
}

function mousePressed(){
  fill(255,255,255)
  ellipse(mouseX,mouseY,50,50);
}


function draw() { 
  stroke(255,153,52)
  fill(255,255,0);
  ellipse(150,150,150,150);
  triangle(mouseX,mouseY,110,110);
  
}

