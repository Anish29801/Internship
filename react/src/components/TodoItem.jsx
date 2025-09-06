import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../features/todos/todoSlice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [val, setVal] = useState(todo.title);

  function saveEdit() {
    const t = val.trim();
    if (t && t !== todo.title) {
      dispatch(editTodo({ id: todo.id, title: t }));
    }
    setIsEditing(false);
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        aria-label={`Toggle ${todo.title}`}
      />

      {isEditing ? (
        <input
          autoFocus
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
          onBlur={saveEdit}
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          className={todo.completed ? 'done' : ''}
          title="Double-click to edit"
        >
          {todo.title}
        </span>
      )}

      <button onClick={() => dispatch(deleteTodo(todo.id))} aria-label="Delete">
        ✕
      </button>

      <style jsx="true">{`
        .todo-item {
          display: grid;
          grid-template-columns: 24px 1fr auto;
          align-items: center;
          gap: 8px;
          padding: 10px 8px;
          border-bottom: 1px solid #eee;
        }
        span.done {
          text-decoration: line-through;
          color: #6b7280;
        }
        input[type='text'] {
          padding: 6px 8px;
          border: 1px solid #ddd;
          border-radius: 6px;
          outline: none;
        }
        button {
          background: transparent;
          border: none;
          font-size: 18px;
          line-height: 1;
          cursor: pointer;
          color: #ef4444;
        }
      `}</style>
    </li>
  );
}
