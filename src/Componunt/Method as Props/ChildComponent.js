import React, { Component } from 'react'

class ChildComponent extends Component {
    render() {
        return (
            <div>
                <button onClick ={() => this.props.info('and have tea and come back for work')}>click me</button>
            </div>
        )
    }
}

export default ChildComponent
