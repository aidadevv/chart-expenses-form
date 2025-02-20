import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prevState) => !prevState)
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__description">{props.title}</h2>
      <button onClick={toggleHandler}>{!toggle ? 'Show' : 'Hide'} price</button>
      {toggle && <div className="expense-item__price">{props.price}</div>}
    </div>
  );
}

export default ExpenseItem;
