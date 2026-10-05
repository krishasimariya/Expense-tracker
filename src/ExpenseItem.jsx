import { useState } from "react";

export default function ExpenseItem({ Item, Delete, Update }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(Item.title);
    const [editAmount, setEditAmount] = useState(Item.amount);
    const [editCategory, setEditCategory] = useState(Item.category);

    function handleUpdate() {
        console.log("SAVE BUTTON CLICKED");

        if (editTitle.trim() === "" || editAmount === "") {
            alert("Please fill all the fields");
            return;
        }

        if (parseFloat(editAmount) <= 0) {
            alert("Amount must be greater than 0");
            return;
        }

        Update(Item.id,
            editTitle,
            parseFloat(editAmount),
            editCategory
        );
        setIsEditing(false);
    }

    function handleCancel() {
        console.log("CANCEL BUTTON CLICKED");
        setEditTitle(Item.title);
        setEditAmount(Item.amount);
        setEditCategory(Item.category);
        setIsEditing(false); 
    }
    return (
        <div className="expense-Item">
            {isEditing ? (<>
                <input type="text" value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)} />
                <input type="number" value={editAmount}
                    onChange={(e) => setEditAmount(e.target.value)} />
                <select
                        value={editCategory}
                        onChange={(e) => setEditCategory(e.target.value)}>
                        <option value="Food">Food</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Study">Study</option>
                        <option value="Travel">Travel</option>
                        <option value="Bill">Bill</option>
                        <option value="Other">Other</option>
                    </select>
                <button type="button" onClick={handleUpdate}> Save </button>
                <button type="button" onClick={handleCancel}>Cancel</button></>
            ) : (
                <>
                <span>{Item.title}</span>
                <span>{Item.category}</span>
                <span>₹ {Item.amount.toFixed(2)}</span>
                
                <button type="button" onClick={() => Delete(Item.id)}>Delete</button>
                <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
        </div>
    );
}