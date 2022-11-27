import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesLists from "../ExpensesLists/ExpensesLists";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesLists items={filteredExpenses}/>
      </Card>
    </li>
  );
};

export default ExpensesList;
