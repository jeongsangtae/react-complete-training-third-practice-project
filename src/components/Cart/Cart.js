import React from "react";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Card className={classes["cart-items"]}>
      <CartItem />
      <div className={classes.total}>
        <p>Total Amount</p>
        <p>$88.99</p>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Card>
  );
};

export default Cart;
