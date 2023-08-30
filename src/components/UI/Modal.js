import React from "react";
import Card from "./Card";

import classes from "./Modal.module.css";

const Modal = () => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}></Card>
    </div>
  );
};

export default Modal;
