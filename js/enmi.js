export default class Enmi {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.gravity = 0;
      this.groundLevel = 140;
      // image from https://https://imgur.com/a/F8Jkryq/
      this.image = loadImage("png/enmi.png");
    }
  
  }   