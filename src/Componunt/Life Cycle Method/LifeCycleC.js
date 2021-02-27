import React, { Component } from "react";
import LifeCycleD from "./LifeCycleD";

class LifeCycleC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Santosh",
    };
    console.log("LifeCycle-C constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle-C getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycle-C componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycle-C shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle-C getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycle-C componentDidUpdate");
  }

  changeStatus = () => {
    this.setState(() => ({
      name: "You have changed the states",
    }));
  };

  render() {
    console.log("LifeCycleC rendor()");
    return (
      <div>
        <div>LifeCycleC</div>
        <button
          onClick={() => {
            this.changeStatus();
          }}
        >
          change status
        </button>
        <LifeCycleD />
      </div>
    );
  }
}

export default LifeCycleC;
