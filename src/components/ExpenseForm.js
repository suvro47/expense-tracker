

import React, { useState } from 'react'
import "./ExpenseForm.css";

export default function ExpenseForm(props) {

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    // managed by one state object 
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangehandler = (event) => {
        // setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        // ensure you are always operating on the latest snapshot 
        setUserInput(pervState => {
            return { ...pervState, enteredTitle: event.target.value };
        });
    }

    const amountChangehandler = (event) => {
        // setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });

        setUserInput(pervState => {
            return { ...pervState, enteredAmount: event.target.value };
        });
    }

    const dateChangehandler = (event) => {
        // setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });

        setUserInput(pervState => {
            return { ...pervState, enteredDate: event.target.value };
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newExpense = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: userInput.enteredDate,
        }
        props.addExpense(newExpense);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        });
    }

    return (
        <div className="new-expense">
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-input__control">
                        <label> Title </label>
                        <input
                            type="text"
                            value={userInput.enteredTitle}  // two way binding
                            onChange={titleChangehandler}
                        />
                    </div>
                    <div className="new-input__control">
                        <label> Amount </label>
                        <input
                            type="number"
                            value={userInput.enteredAmount}  // two way binding 
                            min="0.01"
                            step="0.01"
                            onChange={amountChangehandler}
                        />
                    </div>
                    <div className="new-input__control">
                        <label> Date </label>
                        <input
                            type="date"
                            value={userInput.enteredDate}  // two way binding
                            min="2019-01-01"
                            max="2022-01-01"
                            onChange={dateChangehandler}
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit"> Add Expense </button>
                </div>
            </form>
        </div>
    )
}
