export default class Boy {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // image from https://https://imgur.com/a/F8Jkryq/
    this.image = loadImage("png/boy.png");
  }

  display(x, y) {
    image(this.image, x, y, this.width * 1.28, this.height);
    fill(0);
    ellipse(x + 20, y + 51, 6);
  }
}
