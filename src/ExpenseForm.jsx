import { useState, useEffect, useRef } from "react";

export default function ExpenseForm({onAddExpense}) {

    let [title, setTitle] = useState('');
    let [amount, setAmount] = useState('');
    let [category, setCategory] = useState('');
    let titleRef = useRef(null);

    let handleSubmit = (e) => {
        e.preventDefault();  //page reload na thay e mate
        
        if(!title || !amount || !category){
            alert("Please fill all the fields");
            return;
        }
        let newExpense = {
            id: Date.now(),
            title,
            amount: parseFloat(amount),
            category
    }
    onAddExpense(newExpense);
    setAmount('');  
    setTitle('');
    setCategory('');
    titleRef.current.focus();//field khali thaya baad curser ne title field ma focus karva mate
    }
    return (<>
        <form className='expense-form' onSubmit={handleSubmit}>
        <input type="text" placeholder='Expense Title' value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleRef}/>&nbsp;
        
        <input type="number" placeholder='Amount' value={amount}
        onChange={(e) => setAmount(e.target.value)}/><br />
        <div className="form-botton"></div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Food"> Food </option>
            <option value="study"> Study </option>
            <option value="Travel"> Travel </option>
            <option value="Bill"> Bill </option>
            <option value="Other"> Other </option>
        </select>
         <button type='submit'> Add Expense</button>
      </form>
    </>);
    
}