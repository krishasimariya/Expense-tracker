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
  }, [expenses]) 

  let addExpenses = (expense) => {
    setExpenses((prevExpenses)=> [...prevExpenses, expense])
  }
  let deleteExpenses = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((item) => item.id !== id))
  }
  let updateExpenses = (id, updateTitle, updateAmount, updateCategory) => {
    setExpenses((prevExpenses) => prevExpenses.map((item) => {
      if (item.id === id) {
        return { ...item, title: updateTitle, amount: parseFloat(updateAmount), category: updateCategory}
      }
      return item
    }))
  }

  let totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0)

  return (<div>
    <h1>Expense Tracker</h1>
    <ExpenseForm onAddExpense ={addExpenses}/>
    <h3 className='Total'> Total Expense: ₹. {totalExpenses.toFixed(2)} </h3>
    <ExpenseList expenses = {expenses} onDelete ={deleteExpenses} onUpdate={updateExpenses}/>
  </div>
  )
}

export default App
