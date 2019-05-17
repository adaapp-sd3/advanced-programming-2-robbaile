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
        <WeatherDashboard weather={this.props.weather} name={this.props.name} level={this.props.level} className="weather"/>
        {this.props.farmer.showUI && (
          <FarmerDashboard farmer={this.props.farmer} className="farmer"/>
        )}
        {this.props.farm.fields.map((field,i) => (
          <>{field.showUI && <FieldDashboard key={i} field={field} farmer={this.props.farmer} className="field"/>}</>
        ))}
        {this.props.market.showUI && (
          <MarketDashboard market={this.props.market} className="market"/>
        )}
      </div>
    )
  }
}

export default FarmManager
