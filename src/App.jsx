import { useState } from 'react'
import './App.css'
import AddTodoBar from './components/AddTodoBar'
import TodoList from './components/TodoList'

function App() {
  const [todoList, setTodoList] = useState([])

  const addNewTodo =(newTodo)=>{
    const nextTodo = [...todoList, newTodo]
    setTodoList(nextTodo)
    console.log(todoList);
  }

  const updateTodo =(newTodoText, position)=>{
    const newTodoList = todoList.slice()
    newTodoList[position] = newTodoText
    setTodoList(newTodoList)
  }

  const deleteTodo =(position)=>{
    console.log(position);
    const newTodoList = todoList.slice()
    newTodoList.splice(position, 1)
    setTodoList(newTodoList)
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodoBar addNewTodo={addNewTodo} />
      <TodoList list={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
