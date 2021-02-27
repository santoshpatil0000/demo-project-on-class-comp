import React, { Component } from "react";

class GrretingCond extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Hi Santosh</div>;
  }

  // return(
  //     this.state.isLoggedIn?
  //     <div>Hi Santosh</div>:<div>Hi Guest</div>
  //     )

  //     let massage;
  //     if (this.state.isLoggedIn) {
  //         massage = <div>Hello Santosh</div>
  //     } else {
  //         massage = <div>Hello Guest</div>
  //     }
  //     return <div>{massage}</div>
  // }
  // if(this.state.isLoggedIn) {
  //     return <div>Hello Santosh</div>
  // } else {
  //     return <div>Hello Guest</div>
  // }
  // return (
  //     <div>

  //     </div>
  // )
}

export default GrretingCond;
