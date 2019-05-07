import React, { Component } from "react";

import './MarketDashboard.css';


class MarketDashboard extends Component {

  state = {
    showTab: false
  }

  showBuyTab() {
    this.setState({showTab: true})
  }

  showSellTab() {
    this.setState({showTab: false})
  }

  buyItem = item => {
    if (item === "seeds" && this.props.market.currentFarmer.budget > 0) {
      this.props.market.currentFarmer.myFarm.seeds.total +=
        this.props.market.currentFarmer.budget *
        this.props.market.grassSeedPrice
      console.log(this.props.market.currentFarmer.myFarm.seeds)
      this.props.market.currentFarmer.budget = 0
    }
    if (item === "cow" && this.props.market.currentFarmer.budget > 150) {
      this.props.market.currentFarmer.myFarm.buyCow();
      this.props.market.currentFarmer.budget -= 150
      this.props.market.currentFarmer.myFarm.cows.total += 1;
    }
    if (item === "chicken" && this.props.market.currentFarmer.budget > 150) {
      this.props.market.currentFarmer.myFarm.buyChicken();
      this.props.market.currentFarmer.budget -= 150
      this.props.market.currentFarmer.myFarm.chickens.total += 1;
    }
    if (item === "sheep" && this.props.market.currentFarmer.budget > 150) {
      this.props.market.currentFarmer.myFarm.buySheep();
      this.props.market.currentFarmer.budget -= 150
      this.props.market.currentFarmer.myFarm.sheep.total += 1;
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
        <div className="tab-labels">
          <button className="tab-label" onClick={() => this.showBuyTab()}>Buy</button>
          <button className="tab-label" onClick={() => this.showSellTab()}>Sell</button>
        </div>
        {this.state.showTab ? (
          <div className="buy-tab">
          <h3>Buy</h3>
          <div className="buy-items">
            <div className="buy-item">
              <dt>Seeds</dt>
              
                <button className="buy-button" onClick={() => this.buyItem("seeds")}>
                  Buy seeds
                </button>
            </div>
            <div className="buy-item">
              <dt>Cows</dt> 
              <button className="buy-button" onClick={() => this.buyItem("cow")}>Buy cow</button>
            </div>
            <div className="buy-item">
              <dt>Chickens</dt>  
              <button className="buy-button" onClick={() => this.buyItem("chicken")}>Buy chicken</button>
            </div>
            <div className="buy-item">
              <dt>Sheep</dt>
              <button className="buy-button" onClick={() => this.buyItem("sheep")}>Buy sheep</button>
            </div>
          </div>
        </div>
        ) : (
          <div className="sell-tab">
          <h3>Sell</h3>
          <div className="sell-items">
            <div className="sell-item">
              <dt>Milk</dt>
              <button className="sell-button" onClick={() => this.sellItem("milk")}>Sell milk</button>
            </div>
            <div className="sell-item">
              <dt>Cow</dt>
              <button className="sell-button" onClick={() => this.sellItem("cow")}>Sell cow</button>
            </div>
            <div className="sell-item">
              <dt>Wool</dt>
              <button className="sell-button" onClick={() => this.sellItem("wool")}>Sell wool</button>
            </div>
            <div className="sell-item">
              <dt>Sheep</dt>
              <button className="sell-button" onClick={() => this.sellItem("sheep")}>Sell sheep</button>
            </div>
            <div className="sell-item">
              <dt>Chickens</dt>
              <button className="sell-button" onClick={() => this.sellItem("chicken")}>Sell chicken</button>
            </div>
            <div className="sell-item">
              <dt>Eggs</dt>
              <button className="sell-button" onClick={() => this.sellItem("eggs")}>Sell eggs</button>
            </div>                                                   
          </div>
        </div>
        )}
      </div>
    )
  }
}

export default MarketDashboard
