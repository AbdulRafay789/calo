import React, { useEffect, useState } from "react";
import ChefQueue from "./components/ChefQueue";
import MealDetailPane from "./components/MealDetailPane";

export default function App() {
  const [requests, setRequests] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [text, setText] = useState("");

  // Load existing requests
  useEffect(() => {
    fetch("http://localhost:5000/api/requests")
      .then((res) => res.json())
      .then(setRequests);
  }, []);

  const sendMessage = async () => {
    const res = await fetch("http://localhost:5000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setRequests((prev) => [...prev, data]);
    setText("");
  };

  return (
    <div className="flex h-screen">
      {/* Left: Meal Queue */}
      <div className="w-1/3 bg-white border-r overflow-y-auto flex flex-col">
        <h2 className="text-xl font-bold p-4 border-b">Meal Requests</h2>
        <ChefQueue meals={requests} onSelect={setSelectedMeal} />
        <div className="p-4 border-t mt-auto">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message..."
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Send
          </button>
        </div>
      </div>

      {/* Right: Details */}
      <div className="flex-1">
        {selectedMeal ? (
          <MealDetailPane meal={selectedMeal} />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Select a meal request to view details
          </div>
        )}
      </div>
    </div>
  );
}
