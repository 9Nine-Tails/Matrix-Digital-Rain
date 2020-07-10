class Stream {
  constructor(x) {
    this.x = x;
    this.y = -500-random(2)*500; //random y location
    this.speed = round(random(1,3));
    this.symbols = [];
    this.length = round(random(3,25));
    this.bright = random(1)<0.3; //Used for bright symbols
    for(let i = 0; i < this.length; i++) {
      let symbol = String.fromCharCode(0x30A0+round(random(0,96)));
      this.symbols.push(symbol);
    }
  }

  //Rain effect
  update() {
    this.y += symbolSize*this.speed;
    for(let i = 0; i < this.length-1; i++) {
      this.symbols[i] = this.symbols[i+1];
    }
    this.symbols[this.length-1] = String.fromCharCode(0x30A0+round(random(0,96)));
    if(this.y >= height) {
      this.y = -500-random(2)*500;
    }
  }

  //Display stream
  render() {
    for(let i = 0; i < this.length; i++) {
      noStroke();
      if(i==this.length-1 && this.bright){
        fill(174,255,219);
        drawingContext.shadowBlur = 30;
	  		drawingContext.shadowColor = color(8, 92, 49);
        drawingContext.shadowBlur = 20;
	  		drawingContext.shadowColor = color(16, 102, 58);
        drawingContext.shadowBlur = 10;
	  		drawingContext.shadowColor = color(40,126,83);
        drawingContext.shadowBlur = 5;
	  		drawingContext.shadowColor = color(76,164,120);
      } else {
        fill(60,197,99);
        drawingContext.shadowBlur = 30;
	  		drawingContext.shadowColor = color(10, 57, 24);
        drawingContext.shadowBlur = 20;
	  		drawingContext.shadowColor = color(0, 75, 0);
        drawingContext.shadowBlur = 10;
	  		drawingContext.shadowColor = color(0,91,0);
        drawingContext.shadowBlur = 5;
	  		drawingContext.shadowColor = color(30,177,69);
      }
      textSize(symbolSize);
      textStyle(BOLD);
      scale(-1,1); //mirror image
      text(this.symbols[i], -this.x, this.y+i*symbolSize);
      scale(-1,1); //scale reset
    }
  }
}
