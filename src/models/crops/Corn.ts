import Crop from '../abstract/Crop';

class Corn extends Crop {
  name: string = "Corn"
  genus: string = "Corn"
  imgUrl: string = "/img/twtr/1f33d.png"
    
  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
  }

  //To do - add a grow method


  public draw(): any {
    this.constrainItem()
    this.stopForFarmer()
  }
}
export default Corn;