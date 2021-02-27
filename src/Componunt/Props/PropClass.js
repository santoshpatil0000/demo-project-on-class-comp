import React, { Component } from "react";

export class PropClass extends Component {
  render() {
    return (
      <div>
        <h1>
          Hi {this.props.name} and identity is {this.props.sirName}
        </h1>
        <h1>{this.props.trial}</h1>
      </div>
    );
  }
}

export default PropClass;
