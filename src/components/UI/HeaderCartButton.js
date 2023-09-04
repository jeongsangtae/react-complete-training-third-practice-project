import React from "react";

import CartIcon from "../../assets/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <div>
      <button className={classes.button} type="button" onClick={props.onOpen}>
        <CartIcon className={classes.icon} />
        Your Cart
        <div className={classes.badge}>{props.mealAmount()}</div>
      </button>
    </div>
  );
};

export default HeaderCartButton;
