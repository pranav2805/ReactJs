import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            // id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            location={item.location}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
