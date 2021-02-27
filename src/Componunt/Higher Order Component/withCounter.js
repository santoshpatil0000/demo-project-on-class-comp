import React from 'react';

const UpdatedComponent = (OriginalComponemt, IncreamentNumber) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
        }
        
        increament = () => {
            this.setState((prevState, props) =>({
                count : prevState.count + IncreamentNumber
            }))
        }
        render() {
            return <OriginalComponemt count = {this.state.count} increament = {this.increament}
            {...this.props}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent