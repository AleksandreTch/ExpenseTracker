import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [addClicked, setAddClicked] = useState(false);


    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setAddClicked(false);
    }

    const addClickedHandler = () => {
        setAddClicked(true);
    };

    const stopAddHandler = () => {
        setAddClicked(false);
    }

    return(
        <div className="new-expense">
            {!addClicked && <button onClick={addClickedHandler}>Add New Expense</button>}
            {addClicked && 
            <ExpenseForm 
                onSaveExpenseData={onSaveExpenseDataHandler}
                onCancel={stopAddHandler}/>}
        </div>
    )
}

export default NewExpense;