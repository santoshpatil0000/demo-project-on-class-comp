import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             massage : 'Santosh'
        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(moreInfo) {
        alert(`Hi ${this.state.massage} good evening ${moreInfo}`)
    }
    
    render() {
        // const {massage} = this.state
        return (
            <div>
               <ChildComponent info = {this.changeHandler}/>
            </div>
        )
    }
}

export default ParentComponent
