import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./components/Home";
import App from "./App";
import Instructions from "./components/Instructions";



class Game extends Component {
  render() {
    return (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/instructions" component={Instructions} />
            <Route exact path="/farm" component={App} />
        </div>
    </Router>
    )
  }
}

export default Game