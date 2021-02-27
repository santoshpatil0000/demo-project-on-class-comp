import React, { Component } from "react";
import { UserConsumer } from "./Context";

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(name) => {
          return <div>Hello Santosh {name}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
