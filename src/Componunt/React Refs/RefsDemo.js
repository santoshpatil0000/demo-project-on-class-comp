import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
       this.inputReference = React.createRef()
    }
    
    componentDidMount() {
        this.inputReference.current.focus()
        console.log(`ref in React ${this.inputReference}`)
    }

    changeHandler = () => {
        alert(`${this.inputReference.current.value}`)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputReference} ></input>
                <button onClick={this.changeHandler} >click</button>
            </div>
        )
    }
}

export default RefsDemo
