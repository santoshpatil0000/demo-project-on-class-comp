import React, { Component } from 'react'
import UpdatedComponent from "./withCounter";

class Count extends Component {
    

    render() {
        const {count, increament} = this.props
        return (
            <div>
                <button onClick={increament}>{this.props.name} clicked {count} times </button>
                
            </div>
        )
    }
}

export default UpdatedComponent(Count, 10)
