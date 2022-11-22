import React, {useState} from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesList from './components/Expenses/ExpensesList/ExpensesList';

const PLACEHOLDER_EXPENSES = [
  { 
    id:'e1',
    title: "Title", 
    amount: 99.99, 
    date: new Date(2020, 1, 1) 
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(PLACEHOLDER_EXPENSES);


  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpensesList items={expenses}/>
    </div>
  );
}

export default App;
