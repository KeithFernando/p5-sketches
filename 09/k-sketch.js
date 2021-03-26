//Day 09

//Code from, "https://www.youtube.com/watch?v=4okNCzjIUE0&ab_channel=JasonErdreich"

//I wanted one origin point just like in the video but I couldn't find a way to get rid of the origin line on the left. 
//Nonetheless, I was still able to create an interesting sci-fi looking letter K.

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  noFill();
  stroke(0,255,0);
  line(mouseX,mouseY,400,500);
}