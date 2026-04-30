import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(true)

  return (
    <body style={{ backgroundColor: isDark ? "rgb(110, 16, 180)" : "rgb(20, 236, 146)"}}>
    <section style={{
      backgroundColor: isDark ? "rgb(100, 16, 180)" : "rgb(50, 245, 164)", height: "100vh"
    }} id="center">
      <div>
        <h2 style={{ color: isDark ? "white" : "black" }}>Times "The Button" has been pushed {count}</h2>
        <br />
        <br />
      </div>

      <button
        type="button"
        className="counter"
        style={{ background: isDark ? "rgba(170, 59, 255, 0.1)" : "rgba(202, 243, 226, 0.2)", color: isDark ? "#aa3bff" : "#176939" }}
        onClick={() =>{setCount(count + 1) 
          if((count+1)%10 === 0 )alert("Congrats you clicked "+ (count+1) + " times")
        }}
      >
        The Button
      </button>

      <button
        type="button"
        className="counter"
        style={{ background: isDark ? "rgba(170, 59, 255, 0.1)" : "rgba(202, 243, 226, 0.2)", color: isDark ? "#aa3bff" : "#176939" }}

        onClick={() =>
          setIsDark(prev => !prev)
        }
      >
        Change Background
      </button>
    </section>
    </body>
  )
}

export default App