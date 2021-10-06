
import React from 'react';
import "./ExpenseFilter.css";

export default function ExpensesFilter(props) {

    console.log("Filtered Expenses re-rendered")

    const onChanageHandler = (event) => {
        alert(event.target.value);
        const selectedYear = event.target.value;
        const temp = [...props.items];
        props.doFilter(temp);
        props.setYear(selectedYear);
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
        </>
    );
}
