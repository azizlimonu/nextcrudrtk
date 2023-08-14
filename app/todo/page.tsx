"use client";

import { addTodo, deleteTodo, editTodo, toggleCompleteTodo } from '@/redux/features/todoSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { useState } from 'react'

const Page = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todo.todos);
  console.log("TODOSS", todos);

  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      dispatch(addTodo(newTodoText));
      setNewTodoText("");
    }
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleCompleteTodo(id));
  };

  const handleEditTodo = (id: number, newText: string) => {
    dispatch(editTodo({ id, text: newText }));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
        <div className="flex mb-4">
          <input
            className="border rounded py-2 px-3 mr-2 w-full text-black"
            type="text"
            placeholder="Enter a new todo..."
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-3 rounded mb-2"
            >
              <div className="flex items-center">
                <input
                  className="mr-3"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                />
                <input
                  className={`text-black ${todo.completed ? "line-through text-gray-500" : ""
                    }`}
                  type="text"
                  value={todo.text}
                  onChange={(e) => handleEditTodo(todo.id, e.target.value)}
                />
              </div>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Page;