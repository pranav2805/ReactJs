import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const locOfExpense = "Mumbai";
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  // function clickHandler(id) {
  //   // console.log(id);
  //   const child = document.getElementById(id);
  //   console.log(child);
  //   child.parentElement.removeChild(child);
  //   console.log("Deletion was successful");
  // }

  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("Updated!!!");
    console.log(title);
  }

  const [amount, setAmount] = useState(props.amount);

  function amountUpdateHandler() {
    setAmount(amount + 100);
    console.log("amount updated!!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={amount} location={props.location} title={title} />
      <button onClick={clickHandler}>Change</button>
      {/* <button onClick={amountUpdateHandler}>Update amount</button> */}
    </Card>
  );
};

export default ExpenseItem;
