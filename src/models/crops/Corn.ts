import Crop from '../abstract/Crop';
//import Farm from "../Farm";

class Corn extends Crop {
  name: string = "Corn"
  genus: string = "Corn"
  imgUrl: string = "/img/twtr/1f33d.png"
  //farm: Farm
  
  constructor() {
    super()
    //this.farm = farm
  }
    
    public preload() {
      this.p5Img = this.p5.loadImage(this.imgUrl)
    }
  
    public draw(): any {
      this.constrainItem()
      this.stopForFarmer()
    }
  }
  export default Corn;