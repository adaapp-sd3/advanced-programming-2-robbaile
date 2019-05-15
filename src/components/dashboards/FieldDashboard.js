import React, { Component } from "react";
import './FieldDashboard.css'


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

  harvestCorn = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents.pop();
      this.props.farmer.myFarm.corn.total += 1
    };
  }

  render() {
    return (
      <div className="FieldDashboard">
        <h2>{this.props.field.contents[0] ? this.props.field.contents[0].name : "Empty"} Field</h2>
        {this.props.field.contents[0] && (
          <div>
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
            {this.props.field.contents[0].name === "Corn" && (
              <div>
                <p>Average age: {(this.props.field.contents.reduce((accumulator, currentValue) => accumulator + currentValue.getAge(), 0) / this.props.field.contents.length).toFixed(0)} weeks</p>
                {(this.props.field.contents.reduce((accumulator, currentValue) => accumulator + currentValue.getAge(), 0) / this.props.field.contents.length).toFixed(0) > 30 ? (
                <div>
                  <p>Corn is ready to harvest</p> 
                  <button onClick={this.harvestCorn}>Harvest</button>
                </div> 
                ) : (
                <p>Corn is currently growing</p>)}
              </div>
            )}
          </div>
          
        )}
        {this.props.field.contents[0] && (this.props.field.contents[0].name === "Sheep" || this.props.field.contents[0].name === "Chicken" || this.props.field.contents[0].name === "Cow") ? (
          <div>
            <p>Average Hunger: {(this.props.field.contents.reduce((accumulator, currentValue) => accumulator + currentValue.hunger, 0) / this.props.field.contents.length).toFixed(1)}</p>
            <div>{(this.props.field.contents.reduce((accumulator, currentValue) => accumulator + currentValue.hunger, 0) / this.props.field.contents.length).toFixed(1) > 4.8 ? (
              <p>Feed the {this.props.field.contents[0].genus}</p>
            ) : <p></p>}</div>
          </div>
          ) : (
            <p></p>
          )
        }
        
      </div>
    )
  }
}

export default FieldDashboard
