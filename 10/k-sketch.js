//Day 10

//Code from, "https://www.youtube.com/watch?v=XFTY2HWYFYU&ab_channel=nejimakijima"

//Digging deeper into more interesting mouse events. Exploring and experimenting with particles in p5.
//Very glitchy and laggy experience as I was trying to draw the letter K using the negative space by separating the particles.
//The final K I decided to stick with reminds of some sort of logo I don't remember the name of. Kellogg's? 

function setup() {
  createCanvas(1000, 1000);
  background(0);
 }
var particlesQuantity = 40000;

var positionX = new Array(particlesQuantity);
var positionY = new Array(particlesQuantity);
var velocityX = new Array(particlesQuantity).fill(0);
var velocityY = new Array(particlesQuantity).fill(0);

function setup(){
 createCanvas(windowWidth, windowHeight);
 stroke(255, random(50, 150), random(20, 200));
 
 for(var particle = 1; particle < particlesQuantity; particle++){
  positionX[particle] = random(100, width-100);
  positionY[particle] = random(200, height-200);
 }
 
 positionX[0] = 0;
 positionY[0] = 0;
}

function draw(){
 background(255);
 
 velocityX[0] = velocityX[0] * 0.8 + (mouseX - positionX[0]) * 0.12;
 velocityY[0] = velocityY[0] * 0.8 + (mouseY - positionY[0]) * 0.12;
 
 positionX[0] += velocityX[0];
 positionY[0] += velocityY[0];
 
 for(var particle = 1; particle < particlesQuantity; particle++){
  var whatever = 1024 / (sq(positionX[0] - positionX[particle]) + sq(positionY[0] - positionY[particle]));
  
  velocityX[particle] = velocityX[particle] * 0.1 + (velocityX[0] - velocityX[particle]) * whatever;
  velocityY[particle] = velocityY[particle] * 0.1 + (velocityY[0] - velocityY[particle]) * whatever;
  
  positionX[particle] += velocityX[particle];
  positionY[particle] += velocityY[particle];
  
  if((positionX[particle] < 0 && velocityX[particle] < 0) || (positionX[particle] > width && velocityX[particle] > 0)){
   velocityX[particle] = -velocityX[particle];
  }
  
  if((positionY[particle] < 0 && velocityY[particle] < 0) || (positionY[particle] > height && velocityY[particle] > 0)){
   velocityY[particle] = -velocityY[particle];
  }
  
  point(positionX[particle], positionY[particle]);
 }
}

function mousePressed(){
 for(var particle = 1; particle < particlesQuantity; particle++){
  positionX[particle] = random(100, width-100);
  positionY[particle] = random(200, height-200);
 }
}