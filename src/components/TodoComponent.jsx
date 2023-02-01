import React, { useEffect, useRef, useState } from 'react'

export default function TodoComponent({todo, updateTodo, deleteTodo ,position}) {
  const [isBeingEdited, setIsBeingEdited] = useState(false)
  const [currentText, setCurrentText] = useState(todo)
  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  })

  const setEditable =()=>{
    setCurrentText(todo)
    setIsBeingEdited(!isBeingEdited)
    updateTodo(currentText, position)
  }

  const handleDelete =()=>{
    deleteTodo(position)
  }

  const handleEnter = (e) => {
    if(e.key == "Enter"){
      setEditable()
    }
  }

  return (
    <div key={position} className={`todo-container ${isBeingEdited ? "ring" : ""}`}>
      <input ref={inputRef} onKeyPress={e => handleEnter(e)} value={currentText} onChange={e => setCurrentText(e.target.value)} className={isBeingEdited ? "show" : "hidden"} type="text" />
      <p className={isBeingEdited ? "hidden" : "show"}>{todo}</p>
      <div className='todo-buttons-container'>
        <button className={isBeingEdited ? "hidden" : "show"} onClick={handleDelete}>Delete</button>
        <button onClick={setEditable}>Update</button>
      </div>
      </div>
  )
}
