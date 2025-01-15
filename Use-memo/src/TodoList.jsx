import React, { useState } from 'react';

const TodoList = React.memo(({ todos, addTodo, removeTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center font-poppins">
        Manage Your Tasks
      </h2>
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-indigo-700 focus:ring-2 focus:ring-indigo-400 font-montserrat"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition"
        >
          Add
        </button>
      </div>
      <ul className="space-y-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-md text-lg font-medium font-poppins"
          >
            <span>{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="bg-red-500 px-2 py-1 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;
