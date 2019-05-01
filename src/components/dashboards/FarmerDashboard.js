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
        <div className={`showUI_${this.state.showUI}`}>
          <p><strong>Current budget: </strong>{this.props.farmer.budget}</p>
          <div className="table-divider"></div>
          {this.props.farmer.myFarm && (<>
            <p><strong>Total cows: </strong>{this.props.farmer.myFarm.cows.total}</p>
            <div className="table-divider"></div>
            </>
          )}
          {this.props.farmer.myFarm && (<>
            <p><strong>Total straw: </strong>{this.props.farmer.myFarm.straw.total} bails</p>
            <div className="table-divider"></div>
            <p><strong>Total milk: </strong>{this.props.farmer.myFarm.milk.total} pints</p>
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