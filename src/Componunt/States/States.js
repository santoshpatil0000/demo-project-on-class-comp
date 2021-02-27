import React, { Component } from 'react'



export class States extends Component {
    constructor() {
        super() 
        this.state = {
            massage : 'Welcome to Visitors'
        }
        // this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler =()=> {
        this.setState({
            massage:`Thank you for having patience to subscribe`
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.massage}</h1>
                {/* <h1>Welvbjhfvjxdfv</h1> */}
                <button onClick = {() => this.changeHandler()}>Subscribe</button>
            </div>
        )
    }
}

export default States
