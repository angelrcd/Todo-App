import React, { useState } from 'react'

export default function AddTodoBar({ addNewTodo }) {
  const [todoBarValue, setTodoBarValue] = useState("")

  const handleNewTodo =()=>{
    if(!todoBarValue) return;

    addNewTodo(todoBarValue)
    setTodoBarValue("")
  }

  const handleEnter = (e) => {
    if(e.key == "Enter"){
      handleNewTodo()
    }
  }

  return (
    <div className='add-todo-bar-container'>
      <input onKeyPress={e => handleEnter(e)} className='add-todo-bar' value={todoBarValue} onChange={e => setTodoBarValue(e.target.value)} type="text" />
      <button className='add-todo-button' onClick={handleNewTodo}>Add Todo</button>
    </div>
  )
}
