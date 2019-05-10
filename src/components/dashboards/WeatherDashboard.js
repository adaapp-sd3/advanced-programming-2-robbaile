import React, { Component } from "react";
import './WeatherDashboard.css'


class WeatherDashboard extends Component {
  state = {
      weather: ''
   }
  
    componentDidMount() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6705128fe3020152d1320189697818af")
      .then(res => res.json())
      .then(
        (res) => {
            let celcius = parseFloat(res.main.temp);
            let conversion = 273.15;
            let temp = (celcius - conversion).toFixed(1);
          this.setState({
            weather: {
                main: res.weather[0].main,
                temp: temp,
                location: res.name
            }
          });
        },
        (err) => {
          this.setState({
            isLoaded: true,
            err
          });
        }
      )
    }
  render() {
    return (
        <div className="weatherDashboard">
            <h1>Weather Dashboard</h1>
            <p>{this.state.weather.main}</p>
            <p>{this.state.weather.temp}</p>
            <p>{this.state.weather.location}</p>
        </div>
    )
    }
}

export default WeatherDashboard