import { useState } from 'react'
import './App.css'
import {
  TodoContext,
} from './TodoContext'
import { useTodos } from './hooks/useTodos'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
function App() {
  const todoHook = useTodos([]);
  return (
    // APP 状态管理
    <TodoContext.Provider value={todoHook}>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList/>
    </TodoContext.Provider>
  )
}

export default App
