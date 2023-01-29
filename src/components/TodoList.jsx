import React from 'react'
import TodoComponent from './TodoComponent'

export default function TodoList({list, updateTodo, deleteTodo}) {
  return (
    <ul>
      {list.map((element, index) =>{
        return <TodoComponent todo={element} updateTodo={updateTodo} deleteTodo={deleteTodo} position={index} />
      })}
    </ul>
  )
}
