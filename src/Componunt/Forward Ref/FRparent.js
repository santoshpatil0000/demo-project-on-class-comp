import React, { Component } from 'react'
import FRchild from './FRchild'

class FRparent extends Component {
    constructor(props) {
        super(props)
    
        this.FRinputRef = React.createRef()
    }
    
changeFocus = () => {
    this.FRinputRef.current.focus()
}

    render() {
        return (
            <div>
                <FRchild ref={this.FRinputRef} myName='Santosh' />
                <button onClick = {this.changeFocus}>click</button>
            </div>
        )
    }
}

export default FRparent
