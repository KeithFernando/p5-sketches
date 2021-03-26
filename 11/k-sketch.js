//Day 11

//Code from, "https://www.youtube.com/watch?v=o9sgjuh-CBM&ab_channel=TheCodingTrain"
//And "https://p5js.org/reference/#/p5/rotate"

//Learning to rotate objects using translate and angleMode(DEGREES) functions. 

function setup() {
  createCanvas(1000,1000);
  background(0);
  angleMode(DEGREES);
  
  
  translate(300,250);
  strokeWeight(0);
  rect(0,0,80,500);
  
  translate(300,0);
  rotate(45);
  strokeWeight(0);
  rect(0,0,80,400)
  
  translate(-20,400);
  rotate(-95);
  strokeWeight(0);
  rect(0,0,80,385)
}