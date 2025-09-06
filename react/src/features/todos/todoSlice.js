import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [
    // example:
    // { id: '1', title: 'Learn Redux Toolkit', completed: false }
  ],
  filter: 'all', // all | active | completed
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(title) {
        const trimmed = title.trim();
        return {
          payload: {
            id: nanoid(),
            title: trimmed,
            completed: false,
          },
        };
      },
    },
    toggleTodo(state, action) {
      const id = action.payload;
      const t = state.items.find((x) => x.id === id);
      if (t) t.completed = !t.completed;
    },
    deleteTodo(state, action) {
      const id = action.payload;
      state.items = state.items.filter((t) => t.id !== id);
    },
    editTodo(state, action) {
      const { id, title } = action.payload;
      const t = state.items.find((x) => x.id === id);
      if (t) t.title = title.trim();
    },
    clearCompleted(state) {
      state.items = state.items.filter((t) => !t.completed);
    },
    setFilter(state, action) {
      state.filter = action.payload; // 'all' | 'active' | 'completed'
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  clearCompleted,
  setFilter,
} = slice.actions;

export default slice.reducer;
