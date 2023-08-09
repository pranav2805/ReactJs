import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 30);
  const expenseTitle = "Car Insurance";
  const amount = 300.12;
  const locOfExpense = "Mumbai";
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
        <div className="expense-item__description">{locOfExpense}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
