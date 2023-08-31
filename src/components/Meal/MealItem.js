import React from "react";

import dummyMeals from "../../assets/dummy-meals";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = () => {
  return (
    <div>
      {dummyMeals.map((dummyMeal) => (
        <div className={classes.meal}>
          <div key={dummyMeal.id}>
            <h3>{dummyMeal.name}</h3>
            <p className={classes.description}>{dummyMeal.description}</p>
            <div className={classes.price}>${dummyMeal.price}</div>
          </div>
          <div>
            <MealItemForm />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealItem;
