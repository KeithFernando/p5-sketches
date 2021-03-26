//Day 05

//Code from, "https://p5js.org/learn/interactivity.html"

//Found this weird mouse event and played with it until I got something that represents or hints the letter K.
//Basically, if you hover the mouse near center area, the small circles come to a location where it hints
//the main points in the letter K.

function setup() {
  createCanvas(1000, 1000);
  noStroke();
}
function draw() {
  background(0);
  ellipse(mouseX+150, 180, 33, 33);
  ellipse(mouseX/1.9, 180, 33, 33);
  ellipse(mouseX*1.5, 800, 33, 33);
  ellipse(250, mouseY*1.8, 33, 33);
  ellipse(250, mouseY*1.2, 33, 33);

}