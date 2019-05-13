import React, { Component } from "react";
import './Home.css'

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="home-container">
          <h1>Welcome to Ada Farm - The Game</h1>
          <img className="logo" src="/img/icons/farm-logo.svg" alt="farm"></img>
          <input className="city-input" type="text" placeholder="Please enter your city..."></input>
          <div className="button-container">
            <a onClick={this.props.handlePlayClick} href="/farm" className="play-button">Play!</a>
            <a href="/instructions">Instructions</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home