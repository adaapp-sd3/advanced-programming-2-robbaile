import React, { Component } from "react";
import './WeatherDashboard.css'


class LevelDashboard extends Component {
  render() {
    return (
        <div className="weatherDashboard">
            <h1>Level Dashboard</h1>
            <h3>Your current level: {this.props.level}</h3>
        </div>
    )
    }
}

export default LevelDashboard