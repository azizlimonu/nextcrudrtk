import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      };
      state.todos.push(newTodo);
    },
    toggleCompleteTodo: (state, action: PayloadAction<number>) => {
      // Find the todo
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        // toggle todo
        todo.completed = !todo.completed
      }
    },
    editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const { id, text } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = text
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

export const {
  addTodo,
  editTodo,
  toggleCompleteTodo,
  deleteTodo
} = todoSlice.actions;

export default todoSlice.reducer;