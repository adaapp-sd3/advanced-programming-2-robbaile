import React, { Component } from "react";
import './WeatherDashboard.css'
import LevelDashboard from "./LevelDashboard"


class WeatherDashboard extends Component {
  render() {
    return (
        <div>
            <div className="weatherDashboard">
                <h1>Weather Dashboard</h1>
                <p>{this.props.weather.location} | {this.props.weather.temp} &#8451; | {this.props.weather.main}</p>
            </div>
            <LevelDashboard className="level" level={this.props.level} />
        </div>

        
    )
    }
}

export default WeatherDashboard