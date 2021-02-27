import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             UserName : '',
             Comments : '',
             Topic : 'react'
        }
    }

    handlerUsername = (events) => {
        this.setState(() => ({
            UserName : events.target.value
        }))
    }

    handlerComments = (event) => {
        this.setState(() => ({
            Comments : event.target.value
        }))
    }

    handlerTopic = (event) => {
        this.setState(() => ({
            Topic : event.target.value
        }))
    }

    handlerSubmit = (event) => {
       alert(`${this.state.UserName} ${this.state.Comments} ${this.state.Topic}`)
       event.preventDefault()
    }
    
    render() {
        const {UserName, Comments, Topic} = this.state
        return (
            <form onSubmit = {this.handlerSubmit}>
                <div >
                    <label>
                        Username
                    </label>
                    <input input = 'text' value = {UserName} onChange = {this.handlerUsername} />
                </div>
                <div>
                    <label>
                        Comments
                    </label>
                    <textarea value = {Comments} onChange = {this.handlerComments}/>
                </div>
                <div>
                    <label>
                       Topic
                    </label>
                    <select value = {Topic} onChange = {this.handlerTopic}>
                        <option value = 'react'>React</option>
                        <option value = 'angular'>Angular</option>
                        <option value = 'vue' >Vue</option>
                    </select>
                </div>
                <button type = 'submit'>Submitt</button>
            </form>
        )
    }
}

export default Form
