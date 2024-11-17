import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [countPlayerOne, setCountPlayerOne] = useState(0)
  const [countPlayerTwo, setCountPlayerTwo] = useState(0)

  return (
    <>

      <h1>Guess War</h1>
      <div className="card">
        <button onClick={() => setCountPlayerOne((countPlayerOne) => countPlayerOne + 1)}>
          count is {countPlayerOne}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCountPlayerTwo((countPlayerTwo) => countPlayerTwo + 1)}>
          count is {countPlayerTwo}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
