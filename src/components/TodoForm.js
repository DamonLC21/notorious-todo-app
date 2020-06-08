import React, { Component } from 'react'

const initialState = {
    title: "",
    content: "",
    urgent: false
}

export default class TodoForm extends Component {

    state = initialState

    handleChange = (event) => {
        let {name, value, checked} = event.target
        value = name === "urgent" ? checked : value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
        this.setState(initialState)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="todo-form">
                <h2>Add Todo</h2>
                <label>Title</label>
                <input name="title" value={this.state.title} onChange={this.handleChange}/>
                <label>Content</label>
                <input name="content" value={this.state.content} onChange={this.handleChange}/>
                <div>
                    <label>Urgent?</label>
                    <input type="checkbox" name="urgent" checked={this.state.urgent} onChange={this.handleChange}/>
                </div>
                <input type="submit" />
            </form>
        )
    }
}