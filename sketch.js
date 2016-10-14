function setup() {
  createCanvas(windowWidth , windowHeight)
  background(5,4,100)
}

function draw() { 
  stroke(255,154,52)
  triangle(mouseX, mouseY, 110, 110);
  fill(255,255,0);
  ellipse(100,100,150,150);
  fill(255,255,255);
  stroke(255,255,255);
  ellipse(90,50,100,125);
var $example = $('#circview .example');
var exampleLeft = $example.offset().left;
var exampleWidth = $example.width();
var frame = $example.find('.frame')[0];
var motio = new Motio(frame, {
	frames: 18
});

// Activate frame based on the cursor position
$example.on('mousemove', function (event) {
	motio.to(Math.floor(motio.frames / exampleWidth * (event.pageX - exampleLeft)), true);
});
}
