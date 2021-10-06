
import React from 'react'
import ExpenseItem from './ExpenseItem';

import "./Expenses.css";

export default function Expenses(props) {

    return (
        <>
            <div className="expense-item__container">
                {props.items.map(item => (
                    <ExpenseItem
                        key={item.id}
                        props={item}
                    />))
                }
            </div>
        </>
    );
}
