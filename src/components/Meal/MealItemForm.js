import React, { useState } from "react";
import Input from "../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAmount(amount);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input onAmountChange={amountChangeHandler} />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
