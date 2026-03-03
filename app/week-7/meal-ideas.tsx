"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export default function MealIdeas({ ingredient }: { ingredient: any }) {
  const [meals, setMeals] = useState<Meal[]>([]);

  async function loadMealIdeas() {
    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="mx-4">
      <h1 className="font-bold text-2xl">Made with {ingredient}:</h1>
      <ul className="bg-zinc-800 rounded-sm p-2 mt-2">
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <Image
              className="mb-4"
              src={meal.strMealThumb}
              alt={"Image did not load properly"}
              width={50}
              height={50}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

async function fetchMealIdeas(ingredient: any) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const data = await response.json();
    return data.meals ? data.meals : [];
  } catch (error) {
    console.error("Error calling API:", error);
    return [];
  }
}
