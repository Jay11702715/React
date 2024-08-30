import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
      <div style={{width:"100%",
      color:"red",
      background:color}}>hell0</div>
      <button onClick={()=>setColor("black")}>Button 1</button>
      <button onClick={()=>setColor("pink")}>Button 2</button>
    </>
  )
}

export default App
