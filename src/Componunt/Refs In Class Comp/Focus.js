import React, { Component } from 'react'

class Focus extends Component {
    constructor(props) {
        super(props)
    
        this.focusRef = React.createRef()
    }

    changeFocus = () => {
        this.focusRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.focusRef} />
                <button onClick = {this.changeFocus} >click</button>
            </div>
        )
    }
}

export default Focus
