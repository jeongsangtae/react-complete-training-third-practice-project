import React from "react";

import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = () => {
  return (
    <Card className={classes.meals}>
      <ul>
        <MealItem />
      </ul>
    </Card>
  );
};

export default AvailableMeals;
