import React, { Component } from 'react';
import './FarmerDashboard.css'

class FarmerDashboard extends Component {

  state = {
    showUI: true,
  }

  hideUI = () => {
    this.setState({ showUI: !this.state.showUI })
  }

  render() {
    return (
      <div className="FarmerDashboard">
        <h2 className="dashboard-heading">Farmers Dashboard</h2>
        <h3 className="dashboard-subheading">Current budget: <strong>£{this.props.farmer.budget}</strong></h3>
        <div className={`showUI_${this.state.showUI}`}>
          {this.props.farmer.myFarm && (<>
            <p><strong>Total cows: </strong>{this.props.farmer.myFarm.cows.total}</p>
            <p><strong>Total milk: </strong>{this.props.farmer.myFarm.milk.total} pints</p>
            <div className="table-divider"></div>
            <p><strong>Total sheep: </strong>{this.props.farmer.myFarm.sheep.total} kilos</p>
            <p><strong>Total wool: </strong>{this.props.farmer.myFarm.wool.total} kilos</p>
            <div className="table-divider"></div>
            <p><strong>Total chickens: </strong>{this.props.farmer.myFarm.chickens.total} kilos</p>
            <p><strong>Total eggs: </strong>{this.props.farmer.myFarm.eggs.total} eggs</p>
            <div className="table-divider"></div>
            <p><strong>Total straw: </strong>{this.props.farmer.myFarm.straw.total} bails</p>
            <div className="table-divider"></div>
            <p><strong>Total seeds: </strong>{this.props.farmer.myFarm.seeds.total} bunches</p>
            <div className="table-divider"></div>
            </>
          )}
        </div>
        <button className="hide-button" onClick={this.hideUI}>{this.state.showUI === true ? "Hide Farmer Dashboard" : "Show Farmer Dashboard"}</button>
      </div>
    )
  }
}

export default FarmerDashboard;