import React, { Component } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css';

const todoURL = "http://localhost:3000/api/v1/todos"

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount(){
    this.getTodos()
  }

  getTodos = () => {
    fetch(todoURL)
      .then(response => response.json())
      .then(todos => this.setState({todos}))
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })

    let newTodo = {
      ...todo,
      user_id: 4
    }

    fetch(todoURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({todo: newTodo})
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  } 
}

export default App;
