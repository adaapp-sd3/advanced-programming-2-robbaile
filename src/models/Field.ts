import Drawable from "./abstract/Drawable";
import Corn from "./crops/Corn";

class Field extends Drawable {
  image: any
  contents: any[]

  constructor(
    xPos: number,
    yPos: number,
    w: number,
    h: number,
    initalContents: any[] = []
  ) {
    super()
    this.width = w
    this.height = h
    this.x = xPos
    this.y = yPos
    this.contents = initalContents
  }

  public draw() {
    this.p5.stroke("#7c4011")
    this.p5.strokeWeight(10)
    this.p5.fill("#b58969")
    this.p5.rect(this.x, this.y, this.width, this.height, 10)

    for (var item of this.contents) { 
      item.draw()
    }
  }

  plant(x: number, y: number) {
    console.log("new plant")
    if(this.contents[0].genus !== "Cows" || this.contents[0].genus !== "Chickens" || this.contents[0].genus !== "Sheep" ) {
      let corn = new Corn(this.myP5)
      console.log(this.contents[0])
      corn.p5 = this.p5
      corn.preload()
      corn.plant(x, y)
      this.contents.push(corn)
    }
  }
}

export default Field
