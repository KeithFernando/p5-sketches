//Day 03

//Code from, "https://p5js.org/examples/input-mouse-press.html"

//Changing shapes and values. Exploring weird and interesting letter K designs.

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

    ellipse(mouseX, mouseY, 84, 33, 33)
 }