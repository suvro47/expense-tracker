
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';
import Expenses from './components/Expenses';

function App() {

  const DUMMY_EXPENSES = [
    {
      id: 1,
      title: "Car",
      amount: 249.98,
      date: "2021-04-10",
    },
    {
      id: 2,
      title: "TV",
      amount: 39.98,
      date: "2020-03-20",
    },
    {
      id: 3,
      title: "iPhone",
      amount: 149.98,
      date: "2021-05-10",
    },
  ]

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (enteredExpenseData) => {
    setExpenses(prevExpenses => {
      return [...prevExpenses, { id: prevExpenses.length + 1, ...enteredExpenseData }];
    });
  }

  return (
    <div className="App">
      <ExpenseForm addExpense={addExpenseHandler} />
      <ExpenseFilter items={expenses} />
    </div>
  );
}

export default App;
