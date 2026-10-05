
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({expenses, onDelete, onUpdate}) {

    if (expenses.length === 0) {
          return (<p className="no-expense">NO more expenses</p>)  
    }

    return(<div className="expense-list">
        {expenses.map((item) => (
            <ExpenseItem key={item.id} 
            Item ={item} 
            Delete = {onDelete}
            Update = {onUpdate}/>//Delete and Item che e prop che 
        ))}
    </div>
    );
}