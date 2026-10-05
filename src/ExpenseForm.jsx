import { useState, useEffect, useRef } from "react";

export default function ExpenseForm({onAddExpense}) {

    let [title, setTitle] = useState('');
    let [amount, setAmount] = useState('');
    let titleRef = useRef(null);

    let handleSubmit = (e) => {
        e.preventDefault();  //page reload na thay e mate
        
        if(!title || !amount){
            alert("Please fill all the fields");
            return;
        }
        let newExpense = {
            id: Date.now(),
            title,
            amount: parseFloat(amount)
    }
    onAddExpense(newExpense);
    setAmount('');  
    setTitle('');
    titleRef.current.focus();//field khali thaya baad curser ne title field ma focus karva mate
    }
    return (<>
        <form className='expense-form' onSubmit={handleSubmit}>
        <input type="text" placeholder='Expense Title' value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleRef}/>&nbsp;
        
        <input type="number" placeholder='Amount' value={amount}
        onChange={(e) => setAmount(e.target.value)}/><br />
        <button type='submit'> Add Expense</button>
      </form>
    </>);
    
}