export function parseMessage(message) {
  if (message.toLowerCase().includes("pasta")) {
    return {
      mealName: "Vegan Pasta",
      servings: 2,
      time: "19:00",
      priority: "normal",
      instructions: "No dairy, extra garlic"
    };
  } else if (message.toLowerCase().includes("curry")) {
    return {
      mealName: "Chicken Curry",
      servings: 4,
      time: "20:00",
      priority: "high",
      instructions: "Less spicy"
    };
  }
  return {
    mealName: "Salad Bowl",
    servings: 1,
    time: "18:30",
    priority: "low",
    instructions: "Add avocado"
  };
}
