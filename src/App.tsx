import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyFirstComponent from './demo.js'
import EricComponent from './second.component.js'
import InputTodo from './todo/input.todo.tsx'


function App() {
  
  const name = "Yen";
  const age = 38;

  const info = {
    name: "Yen",
    age: 38
  };

  return (
    <>
      <div>
        <InputTodo name={name} age={age}  info={info}/>
      </div>     
    </>
  )
}

export default App