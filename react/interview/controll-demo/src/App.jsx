import { useState,useRef } from 'react'
import './App.css'

function ControlledInput({onSubmit}) {
  const[value,setValue] = useState('')// 响应式状态
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value,'//////')
    onSubmit(value)
  }
  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="controlled-input">受控组件</label>
      <input 
      type="text" 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" value="提交" />
    </form>
  )
}

function UncontrolledInput({onSubmit}) {
  const inputRef = useRef(null)
  const handleSubmit = () => {
    const value = inputRef.current.value
    console.log(value,'????????')
    onSubmit(value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <labe htmlFor="uncontrolled-input">非受控组件</labe >
      <input 
      type="text" 
      id="uncontrolled-input" 
      ref={inputRef}
      />
      <input type="submit" value="提交" />
    </form>
  )
}

function App() {
  const handleSubmit = (value) => {
    console.log(value,'?????????')
  }
  return (
    <>
      <ControlledInput onSubmit={handleSubmit} />
      <UncontrolledInput onSubmit={handleSubmit} />
    </>
  )
}

export default App
