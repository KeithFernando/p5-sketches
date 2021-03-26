//Day 15

//Code from, "https://editor.p5js.org/oshoham/sketches/bLIV5wMey"
//mp4 file from, "https://www.pinterest.ca/pin/311381761737378237/"

//The giff does not seem to be working for some reason even though I convereted it to an
//mp4 file and placed it in the correct file path. However, you're still able to see 
//the letter K as a static image.

let video;


function setup() {
  createCanvas(1000,1000);
  
  video = createVideo("letter-K-giff.mp4");
  video.hide();
  video.loop();
}

function draw() {
  background(0);
  
  let stepSize = floor(map(mouseX, 0, width, 4, 40));
    
  video.loadPixels();
  for (let x = 0; x < video.width; x += stepSize) {
    for (let y = 0; y < video.height; y += stepSize) {
      let i = (y * video.width + x) * 4;
      
      let r = video.pixels[i];
      let g = video.pixels[i+1];
      let b = video.pixels[i+2];
      let a = video.pixels[i+3];
      
      let luma = 0.299 * r + 0.587 * g + 0.114 * b;
      
      let diameter = map(luma, 0, 255, 0, stepSize);
      fill(255);
      noStroke();
      ellipse(
        map(x, 0, video.width, 0, width),
        map(y, 0, video.height, 0, height),
        diameter,
        diameter
      );
    }
  }
}