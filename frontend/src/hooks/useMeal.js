import { useState } from "react";

export default function useMeal() {
  const [meal, setMeal] = useState([]);

  return {
    meal,
    setMeal,
  };
}