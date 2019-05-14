import React, { Component } from "react";
import './FieldDashboard.css'
// import { access } from "fs";

class FieldDashboard extends Component {

  milkCows = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldMilk()
    }
  }

  shearSheep = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldWool()
    }
  }

  collectEggs = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldEggs()
    }
  }

  // averageHunger() {(this.props.field.contents.reduce((accumulator, currentValue) => accumulator + currentValue.hunger, 0) / this.props.field.contents.length).toFixed(1)}

  // plantCorn = () => {
  //   console.log("Corn")
  // }

  render() {
    return (
      <div className="FieldDashboard">
        <h2>{this.props.field.contents[0] ? this.props.field.contents[0].name : "Empty"} Field</h2>
        {this.props.field.contents[0] && (
          <p>
            {this.props.field.contents.length}{" "}
            {this.props.field.contents[0].name}s
            {this.props.field.contents[0].name === "Cow" && (
              <button className="button" onClick={this.milkCows}>Milk them</button>
            )}
            {this.props.field.contents[0].name === "Sheep" && (
              <button className="button" onClick={this.shearSheep}>Shear them</button>
            )}
            {this.props.field.contents[0].name === "Chicken" && (
              <button className="button" onClick={this.collectEggs}>Collect eggs</button>
            )}
          </p>
          
        )}
        {this.props.field.contents[0] ? (
          <div>
            <p>Average Hunger: {(this.props.field.contents.reduce((accumulator, currentValue) => accumulator + currentValue.hunger, 0) / this.props.field.contents.length).toFixed(1)}</p>
            <div>{(this.props.field.contents.reduce((accumulator, currentValue) => accumulator + currentValue.hunger, 0) / this.props.field.contents.length).toFixed(1) > 4.8 ? (
              <p>Feed the {this.props.field.contents[0].genus}</p>
            ) : <p></p>}</div>
          </div>
          ) : (
            <p></p>
            // <div>
            //   <h2>Plant this field</h2>
            //   <button onClick={this.plantCorn}>Plant Corn</button>
            // </div>
          )
        }
        
      </div>
    )
  }
}

export default FieldDashboard
