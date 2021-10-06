
import React from 'react'

import "./ExpenseItem.css";

export default function ExpenseItem({ props }) {

    const { title, amount, date } = props;

    const formatedDate = new Date(date);
    const month = formatedDate.toLocaleString('en-US', { month: 'long' });
    const day = formatedDate.toLocaleString('en-US', { day: '2-digit' });
    const year = formatedDate.getFullYear();

    return (
        <>
            <div className="expense-item">
                <div className="expense-item__date">
                    <div className="expense-item__date__month"> {month} </div>
                    <div className="expense-item__date__year"> {year} </div>
                    <div className="expense-item__date__day"> {day} </div>
                </div>
                <div className="expense-item__description">
                    <div className="expense-item__title"> {title} </div>
                    <div className="expense-item__price">
                        <div className="expense-item__cost">
                            ${amount}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
