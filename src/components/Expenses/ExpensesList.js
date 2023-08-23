import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  if (props.items.length > 0) {
    return (
      <ul className="expenses-list">
        {props.items.map((item) => (
          <ExpenseItem
            // id={item.id}
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            location={item.location}
          />
        ))}
        ;
      </ul>
    );
  }
};

export default ExpensesList;
