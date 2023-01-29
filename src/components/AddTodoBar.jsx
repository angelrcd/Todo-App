import React, { useState } from 'react'

export default function AddTodoBar({ addNewTodo }) {
  const [todoBarValue, setTodoBarValue] = useState("")

  const handleNewTodo =()=>{
    if(!todoBarValue) return;

    addNewTodo(todoBarValue)
    setTodoBarValue("")
  }

  return (
    <>
      <input value={todoBarValue} onChange={e => setTodoBarValue(e.target.value)} type="text" />
      <button onClick={handleNewTodo}>Add Todo</button>
    </>
  )
}
