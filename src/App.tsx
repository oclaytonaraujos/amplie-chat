import { useState } from 'react'
import amplielogo from './assets/amplie-icon-black.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href=".assets/amplie-chat.png" target="_blank">
          <img src={amplielogo} className="logo" alt="Amplie Logo" />
        </a>
      </div>
      <h1>Amplie Chat</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
