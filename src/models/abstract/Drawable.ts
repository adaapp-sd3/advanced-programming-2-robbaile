import HasUI from './HasUI';
// Possibly refactor this to use mixins:
// https://stackoverflow.com/questions/26948400/typescript-how-to-extend-two-classes

abstract class Drawable extends HasUI {
  p5: any
  x: number = 0
  y: number = 0
  width: number = 0
  height: number = 0
  imgUrl: string = ''
  p5Img: any
  isFarmerPresent: boolean = false
  public abstract draw(): any

  set myP5(p5: any) {
    this.p5 = p5
  }

  set farmerPresent(isHe: boolean) {
    this.shouldShowUI = isHe
    this.isFarmerPresent = isHe
  }

  public containsPoint(x: number, y: number) {
    let top = this.y
    let bottom = this.y + this.height
    let left = this.x
    let right = this.x + this.width

    let isInVerticalRange = y > top && y < bottom
    let isInHorizontalRange = x > left && x < right

    return isInHorizontalRange && isInVerticalRange
  }
}

export default Drawable
