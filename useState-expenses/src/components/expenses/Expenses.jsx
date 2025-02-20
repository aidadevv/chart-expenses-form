import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState(2025);

  const selectYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter((el) => {
    return el.date.getFullYear().toString() === selectedYear;
  });
  let expensesContent = <p style={{ color: "red" }}>No expenses found</p>;

  if (selectedYear === "all") {
    expensesContent = props.expenses.map((el) => (
      <ExpenseItem
        key={el.id}
        title={el.title}
        price={el.price}
        date={el.date}
      />
    ));
  }

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((el) => (
      <ExpenseItem
        key={el.id}
        title={el.title}
        price={el.price}
        date={el.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelect={selectYearHandler}
        selectedYear={selectedYear}
      />
      <ExpensesChart expenses = {props.expenses}/>  
      {expensesContent} 
    </Card>
  );
}

export default Expenses;
