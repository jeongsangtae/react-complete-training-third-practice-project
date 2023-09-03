import React, { useState } from "react";

import AvailableMeals from "./components/Meal/AvailableMeals";
import MealsSummary from "./components/Meal/MealsSummary";
import Header from "./components/UI/Header";
import Modal from "./components/UI/Modal";

function App() {
  const [cartModal, setCartModal] = useState();

  const cartOpenHandler = () => {
    setCartModal(true);
  };

  const cartCloseHandler = () => {
    setCartModal(null);
  };

  return (
    <div>
      {cartModal && <Modal onClose={cartCloseHandler} />}
      <Header onOpen={cartOpenHandler} />
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
}

export default App;
