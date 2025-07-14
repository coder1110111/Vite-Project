import { useState } from 'react'
import ExpenseItem from './components/ExpenseItem'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Checking out VITE</h1>
      <p>We are Learning React</p>
      <ExpenseItem date={new Date()} title="Book" location="Delhi" price="150" />
      <ExpenseItem date={new Date(2025, 6, 14)} title="Pen" location="South Delhi" price="30" />
      <ExpenseItem date={new Date(2025, 6, 14)} title="SweatShirt" location="South Delhi" price="1130" />
      <ExpenseItem date={new Date(2025, 6, 14)} title="Movie Ticket" location="West Delhi" price="360" />
    </>
  )
}

export default App
