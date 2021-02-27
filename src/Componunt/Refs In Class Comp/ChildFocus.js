import React, { Component } from 'react'

class ChildFocus extends Component {
    constructor(props) {
        super(props)
    
       this.childFocusRef = React.createRef()
    }

    focusByParent () {
        this.childFocusRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <input type= 'text' ref={this.childFocusRef} />
            </div>
        )
    }
}

export default ChildFocus
