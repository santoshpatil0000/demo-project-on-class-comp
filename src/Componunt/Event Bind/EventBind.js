import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             massage : 'Hello!!!'
        }
    //    this.changeMas = this.changeMas.bind(this) 
    }
    changeMas () {
        this.setState((prevState)=>({
            massage:'Good Evevning!!!'
        }))
    }


    render() {
        const {massage} = this.state
        return (
            <div>
                <h1>{massage}</h1>
                <button onClick={() =>{this.changeMas()}}>click</button>
            </div>
        )
    }
}

export default EventBind
