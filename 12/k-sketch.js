//Day 12

//Code from, "https://compform.net/parameters/"

//I used what I learned yesterday on translate and angleMode(DEGREES) functions and implemented it here 
//in parameters of p5 to create a giff-like design in a confined space, which being the rectangles that
//make up the letter K. I apologize, I don't know the correct terminology. 

function setup() {
  createCanvas(1000,1000);
  fill(100);
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  noStroke();
  fill(200);
  
  translate(330,250);
  stippleRect(0,0,80,500,500);
  
  translate(300,0);
  rotate(45);
  stippleRect(0,0,80,400,500);
  
  translate(-10,400);
  rotate(-95);
  stippleRect(0,0,80,385,500);
  
}

function stippleRect(left, top, width, height, drawCount) {
  for (i = 0; i < drawCount; i++) {
    let x = random(left, left + width);
    let y = random(top, top + height);
    ellipse(x, y, 5, 5);
  }
}