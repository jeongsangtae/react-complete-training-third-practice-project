import AvailableMeals from "./components/Meal/AvailableMeals";
import MealsSummary from "./components/Meal/MealsSummary";
import Header from "./components/UI/Header";

function App() {
  return (
    <div>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
}

export default App;
