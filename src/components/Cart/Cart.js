import React from "react";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <div>
      <ul className={classes["cart-items"]}>{/* <CartItem /> */}</ul>

      <div className={classes.total}>
        <p>Total Amount</p>
        <p>$88.99</p>
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
