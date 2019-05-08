import React, { Component } from "react";
import './Home.css'

class Instructions extends Component {
  render() {
    return (
      <div className="Instructions">
        <p>This game starts with you having a field of cows, a field of sheep and a field of chickens</p>
        <p>From cows you can get milk, from sheep you can get wool and from chickens you can get eggs which can all be sold at the marketplace.</p>
        <a href="/">return to home</a>
      </div>
    )
  }
}

export default Instructions