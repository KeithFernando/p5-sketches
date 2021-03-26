//Day 21

//Code from, "https://p5js.org/examples/3d-geometries.html"
//And "https://www.youtube.com/watch?v=6TPVoB4uQCU&ab_channel=TheCodingTrain"

//Identical to Day 17's work, except I'm messing around with mouse events to see if I can create something
//interesting than the work from Day 17. For the final version for today (Day 21), I've chosen to go with 
//a letter K that looks like it's made out of 9 moons.

function setup() {
  createCanvas(1000, 1000, WEBGL);
  background(0);

}

function draw() {
  
  translate(-160,-220,0);
  push();
  stroke(mouseX,0,mouseY);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();
  
  translate(0,150,0);
  push();
  stroke(mouseX,0,mouseY);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();  
  
  translate(0,150,0);
  push();
  stroke(mouseX,0,mouseY);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();  
  
  translate(0,150,0);
  push();
  stroke(mouseX,0,mouseY);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();  
  
  translate(150,-220,0);
  push();
  stroke(mouseX,0,mouseY);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();

  translate(70,-130,0);
  push();
  stroke(mouseX,0,mouseY);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();
  
  translate(90,-130,0);
  push();
  stroke(mouseX,0,mouseY);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();
   
  translate(50,480,0);
  push();
  stroke(mouseX,0,mouseY);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();
  
  translate(-140,-80,0);
  push();
  stroke(mouseX,0,mouseY);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();
  
}
  
function mouseClicked() {
    stroke("white");
    strokeWeight(random(7));
  }
