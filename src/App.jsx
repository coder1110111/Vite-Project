import { useState } from 'react'
import Expenses from './components/Expenses';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const expenses = [{ id: "1", date: new Date(2023, 7, 15), location: "Bangalore", title: "Insurance", price: 100 },
    { id: "2", date: new Date(2023, 3, 25), location: "Delhi", title: "Book", price: 10 },
    { id: "3", date: new Date(2023, 10, 11), location:"Hyderabad", title: "Pen", price: 1 },
    { id: "4", date: new Date(2023, 1, 14), location: "Mumbai", title: "Laptop", price: 200 },]

  return (
    <>
      <h1>Checking out VITE</h1>
      <p>We are Learning React</p>
      {/* We can only do this if we know exactly how many (limited amount) of elements will be created but for 100s or 1000s we need to do in different way */}
      {/* <ExpenseItem date={new Date()} title="Book" location="Delhi" price="150" />       
      <ExpenseItem date={new Date(2025, 6, 14)} title="Pen" location="South Delhi" price="30" />
      <ExpenseItem date={new Date(2025, 6, 14)} title="SweatShirt" location="South Delhi" price="1130" />
      <ExpenseItem date={new Date(2025, 6, 14)} title="Movie Ticket" location="West Delhi" price="360" /> */}

      {/*Reintroducing Maps */}
      <Expenses expenses={expenses} />


    </>
  )
}

export default App
