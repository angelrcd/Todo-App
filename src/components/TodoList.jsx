import React from 'react'
import TodoComponent from './TodoComponent'

export default function TodoList({list, updateTodo, deleteTodo}) {
  return (
    <ul className='todo-list-container'>
      {list.map((element, index) =>{  
        return (
        <li key={index}>
          <TodoComponent todo={element} updateTodo={updateTodo} deleteTodo={deleteTodo} position={index} />
        </li>
        )
      })}
    </ul>
  )
}
