import { useState } from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({expenses, onDelete}) {

    if (expenses.length === 0) {
          return (<p className="no-expense">NO more expenses</p>)  
    }

    return(<div className="expense-list">
        {expenses.map((item) => (
            <ExpenseItem key={item.id} Item={item} Delete = {onDelete}/>//Delete and Item che e prop che 
        ))}
    </div>
    );
}