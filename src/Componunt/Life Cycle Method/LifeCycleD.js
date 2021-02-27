import React, { Component } from "react";

class LifeCycleD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Santosh",
    };
    console.log("LifeCycle-D constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle-D getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycle-D componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifeCycle-D shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle-D getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycle-D componentDidUpdate");
  }

  render() {
    console.log("LifeCycleD rendor()");
    return <div>LifeCycleD</div>;
  }
}

export default LifeCycleD;
