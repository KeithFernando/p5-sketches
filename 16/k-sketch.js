//Day 16

//Code from, "https://p5js.org/examples/3d-geometries.html"
//And "https://www.youtube.com/watch?v=6TPVoB4uQCU&ab_channel=TheCodingTrain"

//The process of Day 16 letter K seemed almost impossible. My intention was to have 3 of the
//3D rectangles rotating independently in their correct positions while illustrating the letter K.
//Somehow I got it to worked! 

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(0);
  
  translate(-260,10,-500);
  push();
  rotate(4.70);
  rotateX(frameCount * 0.01);
  box(800, 70, 70);
  pop();
  
  translate(250,-150,-200);
  push();
  rotate(5.5);
  rotateX(frameCount * 0.01);
  box(740, 70, 70);
  pop();

  translate(100,400,-200);
  push();
  rotate(-5.5);
  rotateX(frameCount * 0.01);
  box(710, 70, 70);
  pop();

}