import React from "react";

import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <p>Amount</p>
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
