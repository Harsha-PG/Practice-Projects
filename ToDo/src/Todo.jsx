import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  return (
    <>
    <input type="text" onChange={(event) => setTodo(event.target.value)} ></input>
    <button onClick={()=> setTodos([...todos, todo])}>Add</button>
    <TodoList todos={todos}/>
    </>
  )
}

export default Todo