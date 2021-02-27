import React, { Component } from 'react'

class HoverCount extends Component {
    
    render() {
        const {count, increamentCount} = this.props
        return (
            <div>
                <h2 onMouseOver={increamentCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default HoverCount
