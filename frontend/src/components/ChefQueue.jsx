import React from "react";

export default function ChefQueue({ meals, onSelect }) {
  return (
    <div>
      {meals.map((meal) => (
        <div
          key={meal.id}
          onClick={() => onSelect(meal)}
          className="p-4 border-b hover:bg-gray-50 cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">{meal.mealName}</h3>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                meal.priority === "high"
                  ? "bg-red-100 text-red-600"
                  : meal.priority === "low"
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {meal.priority}
            </span>
          </div>
          <p className="text-sm text-gray-500">
            {meal.servings} servings • {meal.time}
          </p>
          <p className="text-sm text-gray-400 truncate">
            {meal.instructions}
          </p>
        </div>
      ))}
    </div>
  );
}
