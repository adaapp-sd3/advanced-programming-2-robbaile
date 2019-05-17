import React, { Component } from "react"
import FarmManager from "./components/FarmManager"
import "./App.css"
import p5 from "p5"
import makeFarm from "./p5Setup"
import Farm from "./models/Farm"
import Farmer from "./models/Farmer"
import Market from "./models/Market"

class App extends Component {
  // all instances live on the state
  state = {
    farmer: new Farmer(),
    farm: new Farm(),
    market: new Market(),
    weather: '',
    level: 1,
    nextLevelTarget: 5000
  }

  // allow instances to to tell us when they change
  handleUpdateState = newThing => {
    this.setState(newThing)
  }

  getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.name ? this.props.name : 'London'},uk&appid=6705128fe3020152d1320189697818af`)
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
        (err) => {console.log(err)}
      )
      .catch((err) => {
        alert("Location has not been Found");
    });
  }

  componentDidMount() {
    let sketch = makeFarm(
      this.state.farm,
      this.state.farmer,
      this.state.market,
      this.handleUpdateState
    )
    this.setState({
      myP5: new p5(sketch, "sketch")
    })

    this.getWeather()
  }

  componentDidUpdate() {
    if(this.state.farmer.budget > this.state.nextLevelTarget) {
      this.setState({level: this.state.level + 1});
      this.setState({nextLevelTarget: this.state.nextLevelTarget * 2});
      alert(`Congrats! you are now level ${this.state.level + 1}`)
    }
  }

  render() {
    return (
      <div className="App">
        <FarmManager name={this.props.name} level={this.state.level} weather={this.state.weather} farmer={this.state.farmer} farm={this.state.farm} market={this.state.market} />
      </div>
    )
  }
}

export default App
