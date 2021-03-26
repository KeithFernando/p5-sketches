//Day 14

//Code from, "https://compform.net/parameters/"

//Explored deeper into the code from two days ago. I was attracted by the unlimited possibilities in it.
//This time I messed around with the stroke by adding mouse events to it as well as adding a random
//strokeweight function which I learned on Day 01 of this process. This opened up endless possibilities
//when it came to designing the letter K for today.

function setup() {
  createCanvas(1000,1000);
  background(0);
  fill(100);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  stroke(mouseX,0,mouseY);
  fill(250);
  
  stippleRect(mouseX,mouseY,50,50,50);
  
}

function mouseClicked() {
    stroke("black");
    strokeWeight(random(7));
  }


function stippleRect(left, top, width, height, drawCount) {
  for (i = 0; i < drawCount; i++) {
    let x = random(left, left + width);
    let y = random(top, top + height);
    ellipse(x, y, 5, 5);
  }
}