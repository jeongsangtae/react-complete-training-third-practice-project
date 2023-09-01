import React from "react";

import classes from "./Modal.module.css";

const Modal = () => {
  return (
    <div>
      <div className={classes.backdrop} />
      <div className={classes.modal}></div>
    </div>
  );
};

export default Modal;
