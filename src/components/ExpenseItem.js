import "./ExpenseItem.css";

function ExpenseItem(props) {
  const locOfExpense = "Mumbai";
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <div className="expense-item__description">{locOfExpense}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;