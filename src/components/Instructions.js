import React, { Component } from "react";
import './Home.css'

class Instructions extends Component {
  render() {
    return (
      <div className="Instructions">
        <h1>Instructions</h1>

        <p>This simple farming game enables you to run your own arable and livestock farm and make money from it</p>
        <h2>The game</h2>
        <p>To begin you will have £1000, cows, chickens and sheep</p>
        <p>You can milk cows, shear sheep and collect eggs from chickens</p>
        <p>You can also go into the marketplace and buy seeds to plant in your empty fields.</p>
        <p>Sell your animals if you want to have a full arable farm.</p>

        <h2>Level up</h2>
        <p>To level up all you need to do is double your net worth!</p>
        <p>Remember to put in your location to get weather updates for your farm!</p>
        <p>Good luck</p>
        <a href="/">return to home</a>
      </div>
    )
  }
}

export default Instructions