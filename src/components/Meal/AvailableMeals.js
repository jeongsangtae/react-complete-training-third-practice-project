import React from "react";

import dummyData from "../../assets/dummy-meals";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  return <Card className={classes.meals}></Card>;
};

export default AvailableMeals;
