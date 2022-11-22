import React, {useState} from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesList from './components/Expenses/ExpensesList/ExpensesList';

const PLACEHOLDER_EXPENSES = [
  { 
    id:'e1',
    title: "Toilet Paper", 
    amount: 94.12, 
    date: new Date(2020, 7, 14) 
  },
  { 
    id:'e2',
    title: "Car Insurance", 
    amount: 294.67, 
    date: new Date(2021, 2, 28) 
  },
  { 
    id:'e3',
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  { 
    id:'e5',
    title: "Gas", 
    amount: 46.74, 
    date: new Date(2021, 7, 26) 
  },
];


const App = (props) => {
  const [expenses, setExpenses] = useState(PLACEHOLDER_EXPENSES);


  const addExpenseHandler = expense => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpensesList items={PLACEHOLDER_EXPENSES}/>
    </div>
  );
}

export default App;
