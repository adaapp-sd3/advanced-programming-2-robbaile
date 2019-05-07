import React, { Component } from "react";
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome to Ada Farm - The Game</h1>
        <a href="/farm">Play!</a>
      </div>
    )
  }
}

export default Home