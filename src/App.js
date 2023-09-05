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
      const newMealData = prevMealData.map((data) => {
        if (data.id === mealData.id) {
          return {
            ...data,
            price: data.price + mealData.price,
            amount: data.amount + mealData.amount,
          };
        }
        return data;
      });
      if (!newMealData.some((data) => data.id === mealData.id)) {
        newMealData.push(mealData);
      }
      return newMealData;
    });
  };

  // const totalMealAmount = totalMealData.map((mealData) => {
  //   return mealData.amount;
  // });

  const totalMealAmount = totalMealData.reduce((totalAmount, mealData) => {
    return totalAmount + mealData.amount;
  }, 0);

  console.log(totalMealData);
  console.log(totalMealAmount);

  return (
    <div>
      {cartModal && (
        <Modal onClose={cartCloseHandler} totalMealDatas={totalMealData} />
      )}
      <Header onOpen={cartOpenHandler} mealAmount={totalMealAmount} />
      <MealsSummary />
      <AvailableMeals onTotalMeals={totalMealAmountHandler} />
    </div>
  );
}

export default App;
