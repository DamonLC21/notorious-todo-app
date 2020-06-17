import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, deleteTodo, submitAction}){

    const showTodos = todos.map(todo => <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} submitAction={submitAction}/>)

    return (
        <>
            <h2>Todo List</h2>
            <ul className="todo-list">
                {showTodos}
            </ul>
        </>
    )
}
