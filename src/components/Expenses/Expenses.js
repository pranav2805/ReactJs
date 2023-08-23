import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {props.items.map((item) => {
        return (
          <ExpenseItem
            // id={item.id}
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            location={item.location}
          />
        );
      })} */}
      {filteredExpenses.map((item) => {
        return (
          <ExpenseItem
            // id={item.id}
            key={item.id}
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
