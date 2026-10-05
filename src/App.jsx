import { useState, useEffect } from 'react'

import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState(() => {
    let save = localStorage.getItem('Budget')
    return save ? JSON.parse(save) : []
  });
  useEffect(() => {
    localStorage.setItem('Budget', JSON.stringify(expenses))
  }, [expenses]) //expenses ma koi pan change thay tyare localStorage ma save karva mate 

  let addExpenses = (expense) => {
    setExpenses((prevExpenses)=> [...prevExpenses, expense])
  }
  let deleteExpenses = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((item) => item.id !== id))
  }
  let totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0)

  return (<div>
    <h1>Expense Tracker</h1>
    <ExpenseForm onAddExpense ={addExpenses}/>
    <h3 className='Total'> Total Expense: {totalExpenses.toFixed(2)} Rs.</h3>
    <ExpenseList expenses = {expenses} onDelete ={deleteExpenses}/>
  </div>
  )
}

export default App
