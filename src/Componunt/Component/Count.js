import React, { Component } from 'react'

class Count extends Component {

constructor(props) {
    super(props)

    this.state = {
         Count : 0,
         Massage: 'Hi this is another state for trial'
    }
}

increase() {
    this.setState((prevStates, props) =>({
        Count :prevStates.Count + 1,
        Massage : 'Hello buddy'
    }), () =>  {console.log(`call back value`, this.state.Count)})
    console.log(this.state.Count);
}

increaseFive() {
    this.increase()
    this.increase()
    this.increase()
    this.increase()
    this.increase()
}

    render() {
        const {name, sirName, id} = this.props
        const {Count, Massage} = this.state
        return (
            <div>
            <div>
                Count - {Count} {name} {sirName} {id}
                
            </div>
            <button onClick = {() => this.increase()}>Increament</button>
            <div>
                {Massage}
            </div>
            </div>
        )
    }
}

export default Count
