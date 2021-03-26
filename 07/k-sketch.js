//Day 07

//Code from, "https://www.youtube.com/watch?v=EXUMDu94kFs&ab_channel=WebCraftie"

//It's close to impossible to draw the letter K with mirror movements attached to the mouse.
//What I did was, draw the letter K longer than usual so that the viewer's attention focuses on the
//longer parts illustrating the letter K instead of the mirror parts of it, 
//which happens to be shorter since it cuts of the canvas. 

function setup() {
  createCanvas(1000, 1000);
  background(0);
}


function draw() {
  if(mouseIsPressed==true){
    stroke(mouseX,0,mouseY);
    strokeWeight(10);
    point(mouseX-5,mouseY);
    point(mouseX*-1+600,mouseY);
    point(mouseX*-1+600,mouseY);
    point(mouseX-5, mouseY);
  }
  
}