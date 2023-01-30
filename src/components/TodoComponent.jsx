import React, { useState } from 'react'

export default function TodoComponent({todo, updateTodo, deleteTodo ,position}) {
  const [isBeingEdited, setIsBeingEdited] = useState(false)
  const [currentText, setCurrentText] = useState(todo)

  const setEditable =()=>{
    setCurrentText(todo)
    setIsBeingEdited(!isBeingEdited)
    updateTodo(currentText, position)
  }

  const handleDelete =()=>{
    deleteTodo(position)
  }

  return (
    <li className={`todo-container ${isBeingEdited ? "ring" : ""}`}>
      <input value={currentText} onChange={e => setCurrentText(e.target.value)} className={isBeingEdited ? "show" : "hidden"} type="text" />
      <p className={isBeingEdited ? "hidden" : "show"}>{todo}</p>
      <div className='todo-buttons-container'>
        <button className={isBeingEdited ? "hidden" : "show"} onClick={handleDelete}>Delete</button>
        <button onClick={setEditable}>Update</button>
      </div>
      </li>
  )
}
