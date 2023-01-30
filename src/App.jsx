import { useEffect, useState } from 'react'
import './App.css'
import AddTodoBar from './components/AddTodoBar'
import TodoList from './components/TodoList'

const store = window.localStorage
const initial = store["todolist"] ?? "[]"

function App() {
  const [todoList, setTodoList] = useState(JSON.parse(initial))

  const addNewTodo =(newTodo)=>{
    const nextTodo = [...todoList, newTodo]
    setTodoList(nextTodo)
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

  useEffect(()=>{
    store.setItem("todolist", JSON.stringify(todoList))
  }, [todoList])

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodoBar addNewTodo={addNewTodo} />
      <TodoList list={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
