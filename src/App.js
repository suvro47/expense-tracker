
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';
import Expenses from './components/Expenses';

function App() {

  console.log("App re-rendered")

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
  const [filteredExpenses, setFilteredExpenses] = useState(DUMMY_EXPENSES);
  const [selectedYear, setSelectedYear] = useState(0);

  const addExpenseHandler = (enteredExpenseData) => {
    setExpenses(prevExpenses => {
      return [...prevExpenses, { id: prevExpenses.length + 1, ...enteredExpenseData }];
    });
  }

  // getting filtered data from child component ExpenseFilter
  const filterHandler = (filteredItems) => {
    console.log(filteredItems);
    setFilteredExpenses(filteredItems);
  }

  // getting selected Year from child component ExpenseFilter
  const yearHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  }

  return (
    <div className="App">
      <ExpenseForm addExpense={addExpenseHandler} />
      <ExpenseFilter items={expenses} doFilter={filterHandler} setYear={yearHandler} />
      {!selectedYear ? <Expenses items={expenses} /> : <Expenses items={filteredExpenses} />}
    </div>
  );
}

export default App;
