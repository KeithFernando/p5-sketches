//Day 08

//Code from, "https://www.youtube.com/watch?v=EXUMDu94kFs&ab_channel=WebCraftie"

//Added 2 more points to the horizontal part of the letter K to see if I can make something unique.
//But it didn't turn out that different from the previous one. It was still interesting.

function setup() {
  createCanvas(1000, 1000);
  background(0);
}


function draw() {
  stroke(mouseX,0,mouseY);
  line(200,0,mouseX,mouseY);
  line(900,1000,mouseX,mouseY);
  line(900,0,mouseX,mouseY);
  line(200,1000,mouseX,mouseY);
  
  line(250,0,mouseX,mouseY);
  line(900,1000,mouseX,mouseY);
  line(900,0,mouseX,mouseY);
  line(250,1000,mouseX,mouseY);
  
  line(300,0,mouseX,mouseY);
  line(900,1000,mouseX,mouseY);
  line(900,0,mouseX,mouseY);
  line(300,1000,mouseX,mouseY);
}