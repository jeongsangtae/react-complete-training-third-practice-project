import React, { useState } from "react";
import Input from "../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (amount > 0) {
      props.onAmount(amount);
      setAmount("");
    } else {
      // 0 이하의 값이 입력된 경우 여기에서 처리할 수 있습니다.
      alert("0 이하의 값을 입력할 수 없습니다.");
    }
  };

  const amountChangeHandler = (event) => {
    const amountValue = event.target.value;

    if (amountValue <= 0) {
      setAmount("");
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
