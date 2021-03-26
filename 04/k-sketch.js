//Day 04

//Code from, "https://p5js.org/examples/input-mouse-press.html"

//Implemented the "random" value again to the strokewight to see what comes out the other end.
//Changing the stroke weight in every click achieves spaced sqaures in different sizes. 
//Also, the "else" attribute allows me to treat it like an eraser. 
//Pretty cool stuff. I'm having too much fun with this... uh I need to move on. 

function setup() {
  createCanvas(1000, 1000);
  background(0);
  strokeWeight(2);
 }

function draw() {
  if (mouseIsPressed) {
    stroke(255);
  } else {
    strokeWeight(random(20));
    stroke(0);
  }

    rect(mouseX, mouseY, 33, 33)
 }