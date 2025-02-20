import React from "react";
import './ExpensesFilter.css'

function ExpensesFilter(props) {
  const selectChangeHandler = (e) => {
    props.onSelect(e.target.value)
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="">Select by year</label>
        <select onChange={selectChangeHandler} value={props.selectedYear}>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="all">All</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
