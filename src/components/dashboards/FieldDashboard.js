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
        {this.props.field.contents.map((item, i) => (
          <>
            {item.showUI && (
              <div className="fieldItem">
                <h3><img key={i} src={item.imgUrl} alt={item.name} /> {item.name}</h3>
                <dl>
                  <dt>Hunger</dt><dd>{item.hunger}</dd>
                </dl>
              </div>
            )}
          </>
        ))}
      </div>
    )
  }
}

export default FieldDashboard
