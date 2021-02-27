import React, { Component } from "react";

export class ClassClick extends Component {
  clickButton() {
    console.log(`Enjoy with class component`);
  }

  render() {
    return (
      <div>
        <button onClick={this.clickButton}>click me</button>
      </div>
    );
  }
}

export default ClassClick;
