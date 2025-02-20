import React, { useState } from "react";
import "./ExpensesForm.css";

function ExpensesForm(props) {
  // slice :
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || amount.length === 0 || date.length === 0) {
      alert("you need fill the inputs");
      return;
    }
    props.onGet({
      title: title,
      date: new Date(date),
      price: Number(amount),
    });

    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            value={title}
            name="title"
            onChange={titleChangeHandler}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Price</label>
          <input
            min={"1"}
            value={amount}
            name="amount"
            onChange={amountChangeHandler}
            type="number"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            min={"2022-01-01"}
            max={"2026-01-01"}
            value={date}
            name="date"
            onChange={dateChangeHandler}
            type="date"
          />
        </div>
        <div className="new-expense__actions">
          <button> Add expenses</button>
        </div>
      </div>
    </form>
  );
}

export default ExpensesForm;
