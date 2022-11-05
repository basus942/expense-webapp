import React, { useState } from "react"
import ExpenseFilter from "./ExpenseFilter"
import ExpenseList from "./ExpenseList"
import "./Expense.css"
import Card from "../UI/Card"
import ExpenseChart from "../Chart/ExpenseChart"
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = selectedYear => {
        console.log("In Expense Js");
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>

            <Card className="expenses">
                <ExpenseFilter value={props.selected} selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpenseList item={filteredExpenses} />


            </Card>
        </div>
    );

}
export default Expenses