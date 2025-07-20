import { useState,createElement } from 'react'
import './App.css'

function App() {
  const element = <h1 className='title'>Hello World</h1>
  const element2 = createElement('h1',{className:'title',id:'title'},'Hello world')
  return (
    <>
      {element}
      {element2}
    </>
  )
}

export default App
