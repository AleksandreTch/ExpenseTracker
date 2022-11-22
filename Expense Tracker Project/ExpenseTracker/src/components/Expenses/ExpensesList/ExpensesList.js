import React, {useState} from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import './ExpensesList.css';

const ExpensesList = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
      }

    return(
        <div>
            <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {props.items.map((expense) => 
            <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>)}
            </Card>
        </div>
    )
}

export default ExpensesList;