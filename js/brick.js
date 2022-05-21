export default class Brick {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      // image from https://www.pinclipart.com/pindetail/ihJoTxi_brick-block-super-mario-clipart-2d-brick-png/
      this.image = loadImage("png/brick.png");
    }
  
    display() {
      image(this.image, this.x, this.y, this.width / 2, this.height / 2);
    }
  
}
  