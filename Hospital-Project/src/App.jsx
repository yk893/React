import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
     <Home/>
     </div>
    </>
  )
}

export default App
