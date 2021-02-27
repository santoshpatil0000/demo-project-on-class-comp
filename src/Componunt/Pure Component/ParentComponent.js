import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Santosh'
        }
    }
    componentDidMount() {
        setInterval(() =>{
            this.setState(() =>({
                name: 'Santosh'
            }))
        }, 4000)
    }
    render() {
        console.log('******Parent Component******')
        return (
            <div>
                Parent Component 
                {/* <RegComp myName1={this.state.name} />
                <PureComp myName2 ={this.state.name}/> */}
                <MemoComp myName3 ={this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent
