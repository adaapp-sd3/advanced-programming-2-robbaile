import React, { Component } from "react";
import Cow from "../../models/animals/Cow";

import './MarketDashboard.css';


class MarketDashboard extends Component {

  buyItem = item => {
    if (item === "seeds" && this.props.market.currentFarmer.budget > 0) {
      this.props.market.currentFarmer.myFarm.seeds.total +=
        this.props.market.currentFarmer.budget *
        this.props.market.grassSeedPrice
      console.log(this.props.market.currentFarmer.myFarm.seeds)
      this.props.market.currentFarmer.budget = 0
    }
    if (item === "cow" && this.props.market.currentFarmer.budget > 100) {
      let cow = new Cow(this)
      cow.preload();
      cow.setRandomPositionInField(25, 25, 350, 175)
      console.log(cow)
      // this.props.market.currentFarmer.myFarm.cows.objects.push(cow);
      this.props.market.currentFarmer.budget -= 150
      this.props.market.currentFarmer.myFarm.cows.total += 1;
    }
  }

  sellItem = item => {
    if (item === "milk" && this.props.market.currentFarmer.myFarm.milk.total > 10) {
      this.props.market.currentFarmer.myFarm.milk.total -= 10;
      this.props.market.currentFarmer.budget += 10
    }
    if (item === "eggs" && this.props.market.currentFarmer.myFarm.eggs.total > 10) {
      this.props.market.currentFarmer.myFarm.eggs.total -= 10;
      this.props.market.currentFarmer.budget += 10
    }
    if (item === "wool" && this.props.market.currentFarmer.myFarm.wool.total > 10) {
      this.props.market.currentFarmer.myFarm.wool.total -= 10;
      this.props.market.currentFarmer.budget += 10
    }
    if (item === "cow" && this.props.market.currentFarmer.myFarm.cows.total > 1) {
      this.props.market.currentFarmer.budget += 150
      this.props.market.currentFarmer.myFarm.cows.total -= 1;
      this.props.market.currentFarmer.myFarm.cows.objects.pop();
    }
    if (item === "chicken" && this.props.market.currentFarmer.myFarm.chickens.total > 1) {
      this.props.market.currentFarmer.budget += 100
      this.props.market.currentFarmer.myFarm.chickens.total -= 1;
      this.props.market.currentFarmer.myFarm.chickens.objects.pop();
    }
    if (item === "sheep" && this.props.market.currentFarmer.myFarm.sheep.total > 1) {
      this.props.market.currentFarmer.budget += 100
      this.props.market.currentFarmer.myFarm.sheep.total -= 1;
      this.props.market.currentFarmer.myFarm.sheep.objects.pop();
    }
  }

  render() {
    return (
      <div className="MarketDashboard">
        <h2 className="dashboard-heading">Market</h2>
        <p className="dashboard-subheading">Welcome to the market! See our prices below:</p>
        <h3>Buy</h3>
        <dl>
          <dt>Seeds</dt>
          <dd>
            <button onClick={() => this.buyItem("seeds")}>
              Buy seeds for {this.props.market.grassSeedPrice}
            </button>
          </dd>
          <dd>
            <button onClick={() => this.buyItem("cow")}>
              Buy cow for £150
            </button>
          </dd>
          <dt>Solar panels</dt>
          <dd>{this.props.market.solarPanelPrice} per unit</dd>
          <dt>Green gas</dt>
          <dd>{this.props.market.greenGasPrice} per unit</dd>
        </dl>

        <h3>Sell</h3>
        <dl>
          <dt>Milk</dt>
          <button onClick={() => this.sellItem("milk")}>Sell milk</button>
          <dd>{this.props.market.milkPrice} per pint</dd>
          <button onClick={() => this.sellItem("cow")}>Sell cow</button>
          <dd>{this.props.market.milkPrice} per cow</dd>
          {/* <dt>Beef</dt>
          <dd>{this.props.market.beefPrice} per unit</dd> */}
          <dt>Wool</dt>
          <button onClick={() => this.sellItem("wool")}>Sell wool</button>
          <dt>Sheep</dt>
          <button onClick={() => this.sellItem("sheep")}>Sell sheep</button>
          <dd>{this.props.market.milkPrice} per sheep</dd>
          <dt>Chickens</dt>
          <button onClick={() => this.sellItem("chicken")}>Sell chicken</button>
          <dd>{this.props.market.milkPrice} per chicken</dd>
          <dt>Eggs</dt>
          <button onClick={() => this.sellItem("eggs")}>Sell eggs</button>
        </dl>
      </div>
    )
  }
}

export default MarketDashboard
