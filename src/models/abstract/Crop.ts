import ConstrainedByField from './ConstrainedByField';

abstract class Crop extends ConstrainedByField {
  height = 16
  width = 16
  health: number = 10  

  plant(
    fieldX: number,
    fieldY: number,
  ) {
    this.x = fieldX;
    this.y = fieldY
  }
}



export default Crop;