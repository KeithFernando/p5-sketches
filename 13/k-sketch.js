//Day 13

//Code from, "https://compform.net/parameters/"

//I messed around with mouse events using the code from yesterday to explore more and see 
//what I can come up with for today's letter K design.

function setup() {
  createCanvas(1000,1000);
  background(0);
  fill(100);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  noStroke();
  fill(250);
  
  stippleRect(mouseX,mouseY,50,50,50);
  
}


function stippleRect(left, top, width, height, drawCount) {
  for (i = 0; i < drawCount; i++) {
    let x = random(left, left + width);
    let y = random(top, top + height);
    ellipse(x, y, 5, 5);
  }
}