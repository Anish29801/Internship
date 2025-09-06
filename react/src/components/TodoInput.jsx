import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

export default function TodoInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        aria-label="Todo text"
      />
      <button type="submit">Add</button>
      <style jsx="true">{`
        .todo-input {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }
        input {
          flex: 1;
          padding: 10px 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          outline: none;
        }
        button {
          padding: 10px 16px;
          border-radius: 8px;
          border: none;
          background: #111827;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </form>
  );
}
