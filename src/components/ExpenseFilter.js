
import React, { useState } from 'react';
import Expenses from './Expenses';
import "./ExpenseFilter.css";

export default function ExpensesFilter(props) {

    const [filteredExpenses, setFilteredExpenses] = useState(props.items);
    const [selectedYear, setSelectedYear] = useState(0);

    const onChanageHandler = (event) => {
        alert(event.target.value);
        const selectedYear = event.target.value;
        const temp = [...props.items];
        // do filter here..
        // temp.splice(0, 1);
        setFilteredExpenses(temp);
        setSelectedYear(selectedYear);
    }

    return (
        <>
            <div className="filtered-expenses">
                <div className="filtered-expense__heading"> Filter by year </div>
                <div className="filtered-expense__dropdown">
                    <select className="filtered-expense__select" onChange={onChanageHandler}>
                        <option value="0">  </option>
                        <option value="2021"> 2021 </option>
                        <option value="2020"> 2020 </option>
                        <option value="2019"> 2019 </option>
                        <option value="2018"> 2018 </option>
                    </select>
                </div>
            </div>

            {!selectedYear ? <Expenses items={props.items} /> : <Expenses items={filteredExpenses} />}
        </>
    );
}
