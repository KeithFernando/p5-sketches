//Learned this on GD 2: Synchronous Class Time Published on 3/9/2021 by Ali Qadeer
function setup() {
	var c = createCanvas(1000,1000);
	background(0)
}


//Learned this on Lesson 5, "Questions" from (https://hello.processing.org/editor/
void draw () {
	if (mousePressed) {
		background(0);
	} else {
		stroke(255);
		fill(255);
		rect (mouseX,mouseY,mouseX+100,mouseY+50)
	}
}


















//Learned this on GD 2: Synchronous Class Time Published on 3/9/2021 by Ali Qadeer
function mousePressed() {
	saveCanvas("k-sketch-01","jgp");
}