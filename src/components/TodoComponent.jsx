import React from 'react'

export default function TodoComponent({todo, updateTodo, deleteTodo ,position}) {

  const handleUpdate =()=>{
    updateTodo("aaaaaa", position)
  }

  const handleDelete =()=>{
    deleteTodo(position)
  }

  return (
    <li className='todo-container'>
      <p>{todo}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
      </li>
  )
}