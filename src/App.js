import React, { Component } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Login from './components/Login'
import { Route } from 'react-router-dom'
import './App.css';

const todoURL = "http://localhost:3000/api/v1/todos/"

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount(){
    this.getTodos()
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => todo.id !== id )
    
    this.setState({todos})

    fetch(`${todoURL}${id}`, {
      method: "DELETE"
    })
  }

  updateTodo = (updatedTodo) => {
    let todos = this.state.todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
    this.setState({todos})

    fetch(`${todoURL}${updatedTodo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({todo: updatedTodo})
    })
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
      user_id: 5
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
        <Route exact path="/" render={(routerProps) => {
          return (
            <>
              <TodoForm submitAction={this.addTodo} />
              <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} submitAction={this.updateTodo} />
            </>
          )
        }}/>
        <Route path="/login" render={(routerProps) => <Login {...routerProps} />} />
      </div>
    );
  } 
}

export default App;
