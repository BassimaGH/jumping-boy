export default class Button {
    constructor(x, y, width, height, text) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.text = text;
    }
  
    display() {
      push();
      translate(this.x, this.y);
      stroke(300, 111, 150);
      strokeWeight(4);
      fill(241, 111, 150);
      rect(0, 0, this.width, this.height);
      fill(255);
      noStroke();
      textSize(this.height / 3);
      textAlign(CENTER);
      text(this.text, 0, this.height / 1.5, this.width);
      pop();
    }
  
    hitTest(x, y) {
      return (
        x > this.x &&
        x < this.x + this.width &&
        y > this.y &&
        y < this.y + this.height
      );
    }
  }
  