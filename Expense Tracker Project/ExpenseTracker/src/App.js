import React, {useState} from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesList from './components/Expenses/ExpensesList/ExpensesList';


const PLACEHOLDER_EXPENSES = [
  { 
    id:'e1',
    title: "Title", 
    amount: 0, 
    date: new Date(2020, 0, 1) 
  },
  { 
    id:'e2',
    title: "Title", 
    amount: 0, 
    date: new Date(2021, 0, 1) 
  },
  { 
    id:'e3',
    title: "Title", 
    amount: 0, 
    date: new Date(2022, 0, 1) 
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
      <div className='designer-tag'>
            <h2> Designed by AlexTch </h2>
      </div>
    </div>
  );
}

export default App;
