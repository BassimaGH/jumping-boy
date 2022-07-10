export default class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    push();
    fill(97, 30, 115);
    stroke(97, 30, 115);
    rect(this.x, this.y, this.width, this.height, 7);
    pop();
  }
}