import { useState, useEffect } from "react";

export default function ExpenseItem({Item, Delete}) {
    return(<div>
        <div className="expense-Item">
            <span>{Item.title}</span><span>{Item.amount}Rs.</span>&nbsp; &nbsp;
            <button onClick={() => Delete(Item.id)}>Delete</button>
        </div>
    </div>)
}