import React, { useState, useCallback } from 'react';
import './App.css';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((newTodo) => {
    if (newTodo.trim()) {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  }, []);

  const removeTodo = useCallback((indexToRemove) => {
    setTodos((prevTodos) => prevTodos.filter((_, index) => index !== indexToRemove));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500 flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl font-extrabold mb-6 font-poppins">To-Do List</h1>
      <TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
