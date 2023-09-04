import React from "react";

import dummyMeals from "../../assets/dummy-meals";

import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = (props) => {
  const totalMealAmount = (mealData) => {
    // console.log(mealData);
    props.onTotalMeals(mealData);
  };

  return (
    <Card className={classes.meals}>
      <ul>
        {dummyMeals.map((dummyMeal) => (
          <MealItem
            key={dummyMeal.id}
            onTotalAmount={totalMealAmount}
            dummyMealData={dummyMeal}
          />
        ))}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
