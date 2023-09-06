import React, { useState } from "react";
import Input from "../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(0);

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAmount(amount);
  };

  const amountChangeHandler = (event) => {
    const amountValue = event.target.value;

    if (amountValue < 0) {
      setAmount(0);
    } else {
      setAmount(amountValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input value={amount} onAmountChange={amountChangeHandler} />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
