import React, { useState } from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const [amount, setAmount] = useState("");

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const amountSubmit = () => {
    props.onAmount(amount);
  };

  return (
    <div className={classes.input} onAmountData={amountSubmit}>
      <labal>Amount</labal>
      <input type="number" onChange={amountChangeHandler} />
    </div>
  );
};

export default Input;
