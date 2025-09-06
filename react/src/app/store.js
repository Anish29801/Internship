import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/todoSlice';

// (Optional) persist to localStorage
const PERSIST_KEY = 'rtk_todos';

const loadState = () => {
  try {
    const s = localStorage.getItem(PERSIST_KEY);
    return s ? JSON.parse(s) : undefined;
  } catch {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  try {
    localStorage.setItem(PERSIST_KEY, JSON.stringify(store.getState()));
  } catch {}
});

export default store;
