import React from 'react'

export default function TodoItem({title,content, urgent}) {

    const isUrgent = () => urgent ? "todo-item urgent" : "todo-item"

    return (
        <li className={isUrgent()}>
            <h3>{title}</h3>
            <p>{content}</p>
        </li>
    )
}
