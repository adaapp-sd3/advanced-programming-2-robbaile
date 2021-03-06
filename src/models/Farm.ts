import Drawable from "./abstract/Drawable";
import Field from "./Field";
import Cow from "./animals/Cow";
import Sheep from './animals/Sheep';
import Chicken from './animals/Chicken';

class Farm extends Drawable {
  fields: Field[] = []
  width: number = 700
  height: number = 710
  cows: any
  sheep: any
  chickens: any
  straw: any
  milk: any
  wool: any
  eggs: any
  seeds: any
  corn: any
  constructor(
    cows: any = {
      name: "Cows",
      total: 142,
      objects: []
    },
    sheep: any = {
      name: "Sheep",
      total: 42,
      objects: []
    },
    chickens: any = {
      name: "Chickens",
      total: 34,
      objects: []
    },
    straw: any = {
      name: "Straw",
      total: 1000,
      unit: "bails"
    },
    milk: any = {
      name: "Milk",
      total: 0,
      unit: "pints"
    },
    wool: any = {
      name: "Wool",
      total: 0,
      unit: "kilos"
    },
    eggs: any = {
      name: "Eggs",
      total: 0,
      unit: "eggs"
    },
    seeds: any = {
      name: "Grass seeds",
      total: 0,
      unit: "bunches"
    },
    corn: any = {
      name: "Corn",
      total: 0,
      unit: "Kilos"
    }
  ) {
    super()
    this.cows = cows
    this.sheep = sheep
    this.chickens = chickens
    this.straw = straw
    this.milk = milk
    this.wool = wool
    this.eggs = eggs
    this.seeds = seeds
    this.corn = corn
  }

  public preload() {
    this.createBasicFarm()
  }

  public buyCow() {
    let cow = new Cow(this);
    cow.p5 = this.p5;
    cow.preload();
    cow.setRandomPositionInField((window.innerWidth/2 - 300) + 25, 25, 350, 175);
    this.cows.objects.push(cow);
  }
  
  public buyChicken() {
    let chicken = new Chicken(this);
    chicken.p5 = this.p5;
    chicken.preload();
    chicken.setRandomPositionInField((window.innerWidth/2 - 300) + 25, 365, 300, 125);
    this.chickens.objects.push(chicken);
  }

  public buySheep() {
    let sheep = new Sheep(this);
    sheep.p5 = this.p5;
    sheep.preload();
    sheep.setRandomPositionInField((window.innerWidth/2 - 300) + 25, 220, 350, 125);
    this.sheep.objects.push(sheep);
  }

  private createBasicFarm = () => {
    // put cows into farm
    for (let i = 0; i < this.cows.total; i++) {
      let cow = new Cow(this)
      cow.p5 = this.p5
      cow.preload()
      cow.setRandomPositionInField((window.innerWidth/2 - 300) + 25, 25, 350, 175)
      this.cows.objects.push(cow)
    }
    this.fields.push(new Field((window.innerWidth/2 - 300) + 25, 25, 350, 175, this.cows.objects))
    
    //put sheep into farm
    for (let i = 0; i < this.sheep.total; i++) {
      let sheep = new Sheep(this)
      sheep.p5 = this.p5
      sheep.preload()
      sheep.setRandomPositionInField((window.innerWidth/2 - 300) + 25, 220, 350, 125)
      this.sheep.objects.push(sheep)
    }
    this.fields.push(new Field((window.innerWidth/2 - 300) + 25, 220, 350, 125, this.sheep.objects))

    //put chickens into farm
    for (let i = 0; i < this.chickens.total; i++) {
      let chicken = new Chicken(this)
      chicken.p5 = this.p5
      chicken.preload()
      chicken.setRandomPositionInField((window.innerWidth/2 - 300) + 25, 365, 300, 125)
      this.chickens.objects.push(chicken)
    }
    this.fields.push(new Field((window.innerWidth/2 - 300) + 25, 365, 300, 125, this.chickens.objects))

    this.fields.push(new Field((window.innerWidth/2 - 300) + 390, 25, 250, 325))

    for (let field of this.fields) {
      field.p5 = this.p5
      field.setHandleUpdate = this.updateUI
    }
  }

  public draw() {
    for (let field of this.fields) {
      field.draw()
    }
  }
}

export default Farm
