import React, { Component } from "react";
import './WeatherDashboard.css'


class WeatherDashboard extends Component {
  render() {
    return (
        <div className="weatherDashboard">
            <h1>Weather Dashboard</h1>
            <p>{this.props.weather.main}</p>
            <p>{this.props.weather.temp} &#8451;</p>
            <p>{this.props.weather.location}</p>
        </div>
    )
    }
}

export default WeatherDashboard