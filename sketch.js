let symbolSize = 24;
let streams = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for(let i = 0; i < width/symbolSize; i++) {
		streams.push(new Stream(i*symbolSize));
	}
}

function draw() {
	frameRate(10);
	background(3,5,3);
	streams.forEach((stream) => {
		stream.update();
		stream.render();
	});
}
