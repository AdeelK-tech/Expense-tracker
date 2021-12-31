import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState('')
  const titleHandler = ({ target }) => {
    const { value } = target
    setenteredTitle(value)
  }

  const [enteredAmount, setenteredAmount] = useState('')
  const amountHandler = ({ target }) => {
    const { value } = target
    setenteredAmount(value)
  }
  const [enteredDate, setenteredDate] = useState('')
  const dateHandler = ({ target }) => {
    const { value } = target
    setenteredDate(value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const Data = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveData(Data);
    setenteredTitle('');
    setenteredAmount('');
    setenteredDate('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
export default ExpenseForm
