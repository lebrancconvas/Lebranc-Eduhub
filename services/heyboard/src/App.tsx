import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hey Board!</h1>
      <h2>Webboard for Learning Community</h2> 
    </div>
  )
}

export default App
