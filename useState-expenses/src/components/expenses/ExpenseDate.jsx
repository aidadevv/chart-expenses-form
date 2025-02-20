import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const expenseDate = props.date;
  const year = expenseDate.getFullYear();
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
