//Day 01

//Code from, "https://p5js.org/examples/interaction-weight-line.html"
//And "GD 2: Synchronous Class Time" Published on 3/9/2021 by Ali Qadeer

//I am playing around to see how can I draw the letter K in a weird way.

function setup() {
    createCanvas(1000, 1000);
    background("black");
  }
  
function draw() {
    line(mouseX, mouseY, mouseX+50, mouseY+10);
  }
  
function mouseClicked() {
    stroke("white");
    strokeWeight(random(7));
  }

