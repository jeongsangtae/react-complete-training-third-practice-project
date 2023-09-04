import React, { useState } from "react";

import AvailableMeals from "./components/Meal/AvailableMeals";
import MealsSummary from "./components/Meal/MealsSummary";
import Header from "./components/UI/Header";
import Modal from "./components/UI/Modal";

function App() {
  const [cartModal, setCartModal] = useState();
  const [totalMealData, setTotalMealData] = useState([]);

  const cartOpenHandler = () => {
    setCartModal(true);
  };

  const cartCloseHandler = () => {
    setCartModal(null);
  };

  const totalMealAmountHandler = (mealData) => {
    // console.log(mealData);
    setTotalMealData((prevMealData) => {
      return [...prevMealData, mealData];
    });
  };

  console.log(totalMealData);

  return (
    <div>
      {cartModal && (
        <Modal onClose={cartCloseHandler} totalMealDatas={totalMealData} />
      )}
      <Header onOpen={cartOpenHandler} />
      <MealsSummary />
      <AvailableMeals onTotalMeals={totalMealAmountHandler} />
    </div>
  );
}

export default App;
