import ExpenseItem from "./components/Expenses/ExpenseItem/ExpenseItem";
import Card from "./components/UI/Card/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter/ExpensesFilter";

const App = () => {
  const expenses = [
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

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Card className='expenses'>
      <ExpensesFilter/>
      {expenses.map((data) => <ExpenseItem 
      key={data.id} 
      title={data.title}
      amount={data.amount}
      date={data.date}/>)}
      </Card>
    </div>
  );
}

export default App;
