import React, { Component } from 'react'
import axios from 'axios'

class GetRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : [],
             errorMsg : ''
        }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) =>{
            console.log(response)
            this.state({
                posts : response.data
            })
        })
        .catch((error) =>{
            console.log(error)
            this.setState({
                errorMsg : "Something went wrong santosh"
            })
        })
    }

    render() {
        const {posts, errorMsg} = this.state
        return (
            <div>
                <h1>List of posts from server</h1>
                {
                    posts.length?
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null
                }
                {
                    errorMsg ?
                    <div>{errorMsg}</div> : null
                }
            </div>
        )
    }
}

export default GetRequest
