import Animal from "../abstract/Animal"
import Farm from "../Farm";
class Chicken extends Animal {
  name: string = "Chicken"
  genus: string = "Chickens"
  imgUrl: string = "/img/twtr/1f414.png"
  eats: string = "straw"
  hunger: number = 5
  farm: Farm
  
  constructor(farm: Farm) {
    super()
    this.farm = farm
  }

  // if cow is hungry, yield less milk
  yieldEggs() {
    let amountOfEggsToYield = 5 - this.hunger
    this.farm.eggs.total += Math.abs(amountOfEggsToYield)
    this.hunger = 5
  }

  // if cow is thin, yield less beef
  yieldChicken(): number {
    return this.hunger > 0 ? 100 / this.hunger : 120
  }

  eatStraw() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.straw.total > 0) {
        this.farm.straw.total--
        this.hunger = this.hunger - 1
      } else {
        if (this.hunger < 5) {
          this.hunger = this.hunger + 1
        } 
        
      }
    } 
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
    console.log(this.p5Img)
  }

  makeSound() {
    return "Cluck Cluck"
  }

  public draw(): any {

    this.constrainItem()
    this.doSomethingOccasionally(() => this.eatStraw())
    this.stopForFarmer()

  }
}

export default Chicken
