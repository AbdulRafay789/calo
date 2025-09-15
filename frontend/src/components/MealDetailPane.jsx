import React from "react";

export default function MealDetailPane({ meal }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{meal.mealName}</h2>
      <p className="text-gray-600 mb-4">
        {meal.servings} servings • {meal.time}
      </p>
      <p className="mb-4">
        <strong>Instructions:</strong> {meal.instructions}
      </p>

      <div className="flex gap-2">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Accept
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Start
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
          Mark Ready
        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">
          Complete
        </button>
      </div>
    </div>
  );
}
