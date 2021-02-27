import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Santosh",
    };
    console.log("LifeCycleB Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB ComponentWillMount");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  render() {
    console.log("rendor()");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
