import React, {Component} from 'react'
import TodoForm from './TodoForm'

export default class TodoItem extends Component{

    state = {
        toggleForm: false
    }

    isUrgent = (urgent) => urgent ? "todo-item urgent" : "todo-item"

    toggleOn = () => this.setState({toggleForm: true})
    toggleOff = () => this.setState({toggleForm: false})

    render(){
        const {id,title,content,urgent,deleteTodo,submitAction} = this.props
        const todo = {id, title, content, urgent}

        return this.state.toggleForm 
                ? <TodoForm {...todo} toggleOff={this.toggleOff} submitAction={submitAction}/>
                : (
                <li className={this.isUrgent(urgent)}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <button className="delete" onClick={() => deleteTodo(id)}>Delete</button>
                    <button className="edit" onClick={this.toggleOn}>Edit</button>     
                </li>
                )
    }
}
