import React, { Component } from "react";
import './Home.css'

class Home extends Component {
  
  handleClick() {
    let city = this.input.value;
    this.props.handlePlayClick(city);
  }

  render() {
    return (
      <div className="Home">
        <div className="home-container">
          <h1>Welcome to Ada Farm - The Game</h1>
          <img className="logo" src="/img/icons/farm-logo.svg" alt="farm"></img>
          <input ref={(ref) => this.input = ref} type="text" placeholder="Please enter your city..."></input>
          <div className="button-container">
            <a onClick={this.handleClick} href="/farm" className="play-button">Play!</a>
            <a href="/instructions">Instructions</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home