import React from "react";
import meals from "../../assets/meals.jpg";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <div className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton onOpen={props.onOpen} />
      </div>
      <div className={classes["main-image"]}>
        <img src={meals} alt="meals" />
      </div>
    </div>
  );
};

export default Header;
