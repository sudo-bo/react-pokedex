import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Pokedex from './Pokedex'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pokedex/>
    </>
  )
}

export default App
