import React, { Component } from 'react'
import UpdatedComponent from './withCounter' 

class HoverCounter extends Component {
   

    render() {
        const {count, increament} = this.props
        return (
            <div>
                <h1 onMouseOver={increament}>{this.props.name} Hovered {count} times </h1>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter, 5)
