import React from "react";
import Input from "../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const amountDataHandler = (amountData) => {
    console.log(amountData);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input onAmount={amountDataHandler} />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
