import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label>Amount</label>
      <input
        value={props.value}
        type="number"
        onChange={props.onAmountChange}
      />
    </div>
  );
};

export default Input;
