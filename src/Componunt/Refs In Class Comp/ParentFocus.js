import React, { Component } from 'react'
import ChildFocus from './ChildFocus'

class ParentFocus extends Component {
    constructor(props) {
        super(props)
    
       this.focusParentRef = React.createRef()
    }

    changeFocus = () => {
        this.focusParentRef.current.focusByParent()
    }

    
    render() {
        return (
            <div>
                <ChildFocus ref={this.focusParentRef}/>
                <button onClick={this.changeFocus}> Focus </button>
                
            </div>
        )
    }
}

export default ParentFocus
