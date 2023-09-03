import React from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const mealAmount = (amount) => {
    const totalPrice = props.dummyMealData.price * amount;

    const mealData = {
      name: props.dummyMealData.name,
      price: +totalPrice,
      amount: +amount,
    };

    // console.log(totalAmount);
    props.onTotalAmount(mealData);
  };

  return (
    <div>
      <div className={classes.meal}>
        <div>
          <h3>{props.dummyMealData.name}</h3>
          <p className={classes.description}>
            {props.dummyMealData.description}
          </p>
          <div className={classes.price}>${props.dummyMealData.price}</div>
        </div>
        <div>
          <MealItemForm onAmount={mealAmount} />
        </div>
      </div>
    </div>
  );
};

export default MealItem;
