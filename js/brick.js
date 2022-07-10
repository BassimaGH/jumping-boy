export default class Brick {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // image from https://imgur.com/a/F8Jkryq
    this.image = loadImage("png/blueBrick.png");
  }

  display() {
    image(this.image, this.x, this.y, this.width / 2, this.height / 2);
  }

}
