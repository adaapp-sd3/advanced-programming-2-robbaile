import ConstrainedByField from './ConstrainedByField';

abstract class Crop extends ConstrainedByField {
  height: any = 16
  width: any = 16
  health: number = 10 
  healthySize: any = 50 

  plant(
    fieldX: number,
    fieldY: number,
  ) {
    this.x = fieldX;
    this.y = fieldY;
    // this.height = height
  }
}



export default Crop;