//Day 02

//Code from, "https://p5js.org/examples/input-mouse-press.html"

//Really enjoying the mouse follow commands. Trying to draw a 3D looking repetitive letter K. 

function setup() {
  createCanvas(1000, 1000);
  background(0);
  strokeWeight(2);
 }

function draw() {
  if (mouseIsPressed) {
    stroke(255);
  } else {
    stroke(0);
  }
  line(mouseX - 66, mouseY, mouseX + 66, mouseY);
  line(mouseX, mouseY - 66, mouseX, mouseY + 66);
 }