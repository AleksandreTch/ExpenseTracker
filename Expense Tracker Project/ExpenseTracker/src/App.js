import React, {useState} from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesList from './components/Expenses/ExpensesList/ExpensesList';


const PLACEHOLDER_EXPENSES = [
  { 
    id:'e1',
    title: "Title", 
    amount: 99.99, 
    date: new Date(2020, 0, 1) 
  },
  { 
    id:'e2',
    title: "Title 3", 
    amount: 99.99, 
    date: new Date(2021, 0, 1) 
  },
  { 
    id:'e3',
    title: "Title 6", 
    amount: 99.99, 
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
          <a href='http://www.alextch.com'>
            <h2> Designed by AlexTch </h2>
          </a>
      </div>
    </div>
  );
}

export default App;
