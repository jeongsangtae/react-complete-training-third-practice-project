import React, { useState } from "react";

import CartIcon from "../../assets/CartIcon";
import Modal from "./Modal";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [cartModal, setCartModal] = useState();

  const cartOpenHandler = () => {
    setCartModal(true);
  };

  const cartCloseHandler = () => {
    setCartModal(null);
  };

  return (
    <div>
      {cartModal && <Modal onClose={cartCloseHandler} />}
      <button
        className={classes.button}
        type="button"
        onClick={cartOpenHandler}
      >
        <CartIcon className={classes.icon} />
        Your Cart
        <div className={classes.badge}>0</div>
      </button>
    </div>
  );
};

export default HeaderCartButton;
