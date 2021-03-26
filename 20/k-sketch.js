//Day 20

//Code from, "https://p5js.org/examples/color-linear-gradient.html"

//Exploring linear gradients and attempting to design the letter K using individual rectangles that 
//consist the same gradient. 


const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

function setup() {
  createCanvas(1000,1000);
  background(0);
  angleMode(DEGREES);

  b1 = color(255);
  b2 = color(0);
  c1 = color(255, 250, 0);
  c2 = color(0, 202,153);

  noLoop();
}

function draw() {
  
  translate(260,140);
  setGradient(0,0,100,700, c1, c2, Y_AXIS);
  
  translate(10,300);
  rotate (-45);
  setGradient(0,0,100,575, c2, c1, X_AXIS);
  
  translate(480,60);
  rotate (95);
  setGradient(0,0,100,500, c2, c1, X_AXIS);

}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
