import React from "react";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  // const totalPrice = props.totalMealDatas
  //   .filter((totalMealData) => {
  //     return totalMealData.price === ;
  //   })
  //   .reduce((a, b) => {
  //     return a + b.price;
  //   });

  // console.log(totalPrice);

  const totalMealPrice = props.totalMealDatas.reduce((totalPrice, mealData) => {
    return totalPrice + mealData.price;
  }, 0);

  console.log(totalMealPrice);

  return (
    <div>
      <ul className={classes["cart-items"]}>
        {props.totalMealDatas.map((totalMealData) => {
          return (
            <CartItem totalMealData={totalMealData} key={totalMealData.id} />
          );
        })}
      </ul>

      <div className={classes.total}>
        <p>Total Amount</p>
        <p>${totalMealPrice}</p>
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
