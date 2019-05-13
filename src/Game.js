import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./components/Home";
import App from "./App";
import Instructions from "./components/Instructions";



class Game extends Component {
  state = {
    name: ''
  }

  handlePlayClick() {
    let city = document.querySelector('.city-input').value;
    this.setState({ name: city })
  }
  
  render() {
    return (
    <Router>
        <div>
            <Route exact path="/" handlePlayClick={this.handlePlayClick.bind(this)} component={Home} />
            <Route exact path="/instructions" component={Instructions} />
            <Route exact path="/farm" name={this.state.name} component={App} />
        </div>
    </Router>
    )
  }
}

export default Game