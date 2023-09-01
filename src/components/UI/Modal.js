import React from "react";

import Cart from "../Cart/Cart";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes.modal}>
        <Cart onClose={props.onClose} />
      </div>
    </div>
  );
};

export default Modal;
