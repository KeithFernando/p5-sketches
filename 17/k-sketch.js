//Day 17

//Code from, "https://p5js.org/examples/3d-geometries.html"
//And "https://www.youtube.com/watch?v=6TPVoB4uQCU&ab_channel=TheCodingTrain"

//Similar idea as the Day 16 letter K. I wanted all the objects moving independently while resembling 
//the letter K in the bigger pictures. 

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(0);
  
  translate(-160,-220,0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();
  
  translate(0,150,0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();  
  
  translate(0,150,0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();  
  
  translate(0,150,0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();  
  
  translate(150,-220,0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();

  translate(70,-130,0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();
  
  translate(90,-130,0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();
   
  translate(50,480,0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();
  
  translate(-140,-80,0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(10, 60);
  pop();
  
    
}
