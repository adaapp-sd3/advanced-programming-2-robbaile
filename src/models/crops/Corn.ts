import Crop from '../abstract/Crop';
import Farm from "../Farm";

class Corn extends Crop {
  name: string = "Corn"
  genus: string = "Corn"
  imgUrl: string = "/img/twtr/1f33d.png"
  birthstamp: any
  farm: Farm

  constructor(farm: Farm) {
    super()
    this.farm = farm
  }
    
  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
  }

  getAge() {
    return this.p5.millis() / 1000 - this.birthstamp
  }

  public draw(): any {
    this.constrainItem()
    this.stopForFarmer()
  }
}
export default Corn;