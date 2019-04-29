import React, { Component } from 'react';

class FarmerDashboard extends Component {

  hideUI = () => {
    this.props.farmer.showUI = false
  }

  render() {
    return (
      <div className="FarmerDashboard">
        <dl>
          <dt>Current budget</dt><dd>{this.props.farmer.budget}</dd>
          {this.props.farmer.myFarm && (<>
            <dt>Total cows</dt><dd>{this.props.farmer.myFarm.cows.total}</dd>
            </>
          )}
          {this.props.farmer.myFarm && (<>
            <dt>Total straw</dt><dd>{this.props.farmer.myFarm.straw.total} bails</dd>
            <dt>Total milk</dt><dd>{this.props.farmer.myFarm.milk.total} pints</dd>
            <dt>Total seeds</dt><dd>{this.props.farmer.myFarm.seeds.total} bunches</dd>

            </>
          )}
        </dl>
        <button onClick={this.hideUI}>Hide UI</button>
      </div>
    )
  }
}

export default FarmerDashboard;