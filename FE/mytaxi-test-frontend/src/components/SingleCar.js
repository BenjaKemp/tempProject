import React, { Component } from "react";

export default class SingleCar extends Component {
  constructor(props) {
    super(props);
  }

mouseOver() {
  this.props.onHandleHover(this.props.id, true)
}


  render() {
    return (
      <div className="taxi-card" onClick={() => this.mouseOver()}>
    <p>{this.props.name}</p>
    <p>{this.props.address}</p>
      </div>
    );
  }
}
