import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <labal>Amount</labal>
      <input type="number" onChange={props.onAmountChange} />
    </div>
  );
};

export default Input;
