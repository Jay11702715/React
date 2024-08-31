import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  const increaseCount = ()=>{
  setCount(prevCounter => prevCounter + 1)
  setCount(prevCounter => prevCounter + 1)
  setCount(prevCounter => prevCounter + 1)
}

const decreaseCount = ()=> {
  setCount(count-1)
}
  return (
    <>
      <button onClick={increaseCount}>{count}</button>
      <button onClick={decreaseCount}>{count}</button>
    </>
  )
}

export default App
