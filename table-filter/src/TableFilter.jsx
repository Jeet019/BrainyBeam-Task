// src/TableFilter.jsx
import React, { useState } from "react";

const generateData = () => {
  const categories = ["Fruit", "Vegetable", "Grain", "Dairy", "Meat"];
  const names = [
    "Apple", "Carrot", "Banana", "Tomato", "Grapes", "Potato", "Onion",
    "Mango", "Peach", "Strawberry", "Pineapple", "Chicken", "Milk",
    "Rice", "Bread", "Cheese", "Beef", "Lettuce", "Cabbage", "Corn",
  ];

  const items = [];
  for (let i = 1; i <= 100; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    items.push({ id: i, name, category });
  }
  return items;
};

const TableFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items] = useState(generateData);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gradient bg-gradient-to-r from-indigo-500 to-purple-500">
        Stylish Table Filter
      </h1>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="🔍 Search items by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-sm text-gray-500">Category: {item.category}</p>
              <p className="text-sm text-gray-400 mt-2">ID: {item.id}</p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg">
            No items found.
          </div>
        )}
      </div>
    </div>
  );
};

export default TableFilter;
