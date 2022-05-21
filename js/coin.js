export default class Coin {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // image from https://https://imgur.com/a/F8Jkryq/
    this.image = loadImage("png/coin.png");
  }

  display() {
    image(this.image, this.x, this.y, this.width * 1.5, this.height * 1.5);
  }
}
