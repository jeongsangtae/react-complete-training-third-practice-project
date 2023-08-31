import React from "react";
import Input from "../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  const amountHandler = () => {};

  return (
    <form className={classes.form} onSubmit={amountHandler}>
      <Input />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
