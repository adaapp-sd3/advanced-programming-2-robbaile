import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./components/Home";
import App from "./App";
import Instructions from "./components/Instructions";



class Game extends Component {
  state = {
    name: 'London'
  }

  handlePlayClick = (city) => {
    this.setState({ name: city });
  }
  
  render() {
    return (
    <Router>
        <div>
            <Route exact path="/" render={() => <Home handlePlayClick={this.handlePlayClick}/>} />
            <Route exact path="/instructions" component={Instructions} />
            <Route exact path="/farm" render={() => <App name={this.state.name} />} />
        </div>
    </Router>
    )
  }
}

export default Game