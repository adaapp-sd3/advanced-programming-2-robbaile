import React, { Component } from "react"
import FarmerDashboard from "./dashboards/FarmerDashboard"
import FieldDashboard from "./dashboards/FieldDashboard"
import MarketDashboard from "./dashboards/MarketDashboard"
import WeatherDashboard from "./dashboards/WeatherDashboard"
import './FarmManager.css';

class FarmManager extends Component {
  render() {
    return (
      <div className="FarmManager">
        <WeatherDashboard />
        {this.props.farmer.showUI && (
          <FarmerDashboard farmer={this.props.farmer} />
        )}
        {this.props.farm.fields.map((field,i) => (
          <>{field.showUI && <FieldDashboard key={i} field={field} />}</>
        ))}
        {this.props.market.showUI && (
          <MarketDashboard market={this.props.market} />
        )}
      </div>
    )
  }
}

export default FarmManager
