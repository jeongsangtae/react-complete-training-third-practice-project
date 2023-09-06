import React from "react";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  console.log(props.mealPrice);

  return (
    <div>
      <ul className={classes["cart-items"]}>
        {props.totalMealDatas.map((totalMealData) => {
          return (
            <CartItem
              key={totalMealData.id}
              id={totalMealData.id}
              name={totalMealData.name}
              price={totalMealData.price}
              amount={totalMealData.amount}
              // onRemove={removeHandler}
              // totalMealData={totalMealData}
              onAdd={props.onAdd}
            />
          );
        })}
      </ul>

      <div className={classes.total}>
        <p>Total Amount</p>
        <p>${props.mealPrice.toFixed(2)}</p>
      </div>

      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          type="button"
          onClick={props.onClose}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
