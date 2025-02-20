import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpenses from "./components/newExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  { id: "el1", title: "Groceries", price: 300, date: new Date(2024, 11, 10) },
  {
    id: "el2",
    title: "Education",
    price: 3000,
    date: new Date(2024, 12, 15),
  },
  { id: "el3", title: "Utilities", price: 100, date: new Date(2025, 1, 1) },
  {
    id: "el4",
    title: "Healthcare",
    price: 1200,
    date: new Date(2025, 2, 10),
  },
]; 
function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpense = (expensesData) => {
    setExpenses([expensesData, ...expenses])
  };
  return (
    <div className="App">
      <NewExpenses onAdd={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
