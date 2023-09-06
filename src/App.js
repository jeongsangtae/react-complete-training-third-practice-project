import React, { useState } from "react";

import dummyMeals from "./assets/dummy-meals";
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

  const AddHandler = (mealDataId) => {
    setTotalMealData((prevMealData) => {
      const updateMealData = prevMealData.map((data) => {
        if (data.id === mealDataId) {
          const originPrice = dummyMeals.find(
            (meal) => meal.id === mealDataId
          ).price;
          return {
            ...data,
            price: data.price + originPrice,
            amount: data.amount + 1,
          };
        }
        return data;
      });
      return updateMealData;
    });
  };

  const RemoveHandler = (mealDataId) => {
    setTotalMealData((prevMealData) => {
      const RemoveMealData = prevMealData.map((data) => {
        if (data.id === mealDataId) {
          const originPrice = dummyMeals.find(
            (meal) => meal.id === mealDataId
          ).price;
          return {
            ...data,
            price: data.price - originPrice,
            amount: data.amount - 1,
          };
        }
        return data;
      });
      const filterMealData = RemoveMealData.filter((data) => data.amount > 0);

      return filterMealData;
    });
  };

  const totalMealAmount = totalMealData.reduce((totalAmount, mealData) => {
    return totalAmount + mealData.amount;
  }, 0);

  const totalMealPrice = totalMealData.reduce((totalPrice, mealData) => {
    return totalPrice + mealData.price;
  }, 0);

  console.log(totalMealData);
  console.log(totalMealAmount);

  return (
    <div>
      {cartModal && (
        <Modal
          onClose={cartCloseHandler}
          totalMealDatas={totalMealData}
          mealPrice={totalMealPrice}
          onAdd={AddHandler}
          onRemove={RemoveHandler}
        />
      )}
      <Header onOpen={cartOpenHandler} mealAmount={totalMealAmount} />
      <MealsSummary />
      <AvailableMeals onTotalMeals={totalMealAmountHandler} />
    </div>
  );
}

export default App;
