//Day 06

//Code from, "https://www.youtube.com/watch?v=EXUMDu94kFs&ab_channel=WebCraftie"

//THIS IS SO COOL! I'm going to if I can do more with this mouse event for tomorrow. 

function setup() {
  createCanvas(1000, 1000);
  background(0);
}


function draw() {
  stroke(mouseX,0,mouseY);
  line(200,0,mouseX,mouseY);
  line(900,1000,mouseX,mouseY);
  line(900,0,mouseX,mouseY);
  line(200,1000,mouseX,mouseY);
}