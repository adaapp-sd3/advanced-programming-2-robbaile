import React, { Component } from "react";
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="home-container">
          <h1>Welcome to Ada Farm - The Game</h1>
          <img className="logo" src="/img/icons/farm-logo.svg" alt="farm"></img>
          <div className="button-container">
            <a href="/farm">Play!</a>
            <a href="/instructions">Instructions</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home