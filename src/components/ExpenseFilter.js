
import React, { useState, useEffect } from 'react';
import Expenses from './Expenses';
import "./ExpenseFilter.css";

export default function ExpensesFilter(props) {

    const [filteredExpenses, setFilteredExpenses] = useState(props.items);

    useEffect(() => {
        setFilteredExpenses(props.items);
    }, [props])

    const onChanageHandler = (event) => {
        alert(event.target.value);
        const selectedYear = event.target.value;
        const originalData = [...props.items];
        const filteredData = originalData.filter(item => {
            const formatedDate = new Date(item.date);
            return (formatedDate.getFullYear().toString() === selectedYear || selectedYear == 0)
        });
        setFilteredExpenses(filteredData);
    }

    return (
        <>
            <div className="filtered-expenses">
                <div className="filtered-expense__heading"> Filter by year </div>
                <div className="filtered-expense__dropdown">
                    <select className="filtered-expense__select" onChange={onChanageHandler}>
                        <option value="0"> Select  </option>
                        <option value="2021"> 2021 </option>
                        <option value="2020"> 2020 </option>
                        <option value="2019"> 2019 </option>
                        <option value="2018"> 2018 </option>
                    </select>
                </div>
            </div>

            <Expenses items={filteredExpenses} />
        </>
    );
}
