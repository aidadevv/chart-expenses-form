import React from 'react'
import ExpensesForm from './ExpensesForm'
import './NewExpenses.css'
import Card from '../ui/Card';



function NewExpenses(props) {
  const onGetExpense = (expenseDate) => {
    props.onAdd({
      id: Math.random().toString(),
      ...expenseDate
    })
  }
  return (
    <Card className='new-expense'>
        <ExpensesForm  onGet = {onGetExpense}/>
    </Card>
  )
}

export default NewExpenses