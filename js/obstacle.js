export default class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    push();
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(this.x, this.y, this.width, this.height, 7);
    pop();
  }
}