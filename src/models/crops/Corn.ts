import Crop from '../abstract/Crop';
import Farm from "../Farm";

class Corn extends Crop {
  name: string = "Corn"
  genus: string = "Corn"
  imgUrl: string = "/img/twtr/1f33d.png"
  birthstamp: any = new Date();
  farm: Farm
  time: number = 0

  constructor(farm: Farm) {
    super()
    this.farm = farm
  }
    
  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
  }

  public yieldCorn() {
    this.farm.eggs.total += 1
  }

  public getAge() {
    return Math.floor(this.time += 0.02)
  }

  public draw(): any {
    this.constrainItem()
    this.stopForFarmer()
  }
}
export default Corn;