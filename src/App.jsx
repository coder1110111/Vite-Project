import { useState } from 'react'
import ExpenseItem from './components/ExpenseItem'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Checking out VITE</h1>
      <p>We are Learning React</p>
      <ExpenseItem />
    </>
  )
}

export default App
