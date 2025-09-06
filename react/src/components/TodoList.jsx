import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function selectVisibleTodos({ items, filter }) {
  switch (filter) {
    case 'active':
      return items.filter((t) => !t.completed);
    case 'completed':
      return items.filter((t) => t.completed);
    default:
      return items;
  }
}

export default function TodoList() {
  const { items, filter } = useSelector((s) => s.todos);
  const visible = selectVisibleTodos({ items, filter });

  if (!visible.length) {
    return <p className="empty">No todos to show.</p>;
  }

  return (
    <ul className="todo-list">
      {visible.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
      <style jsx="true">{`
        .todo-list {
          list-style: none;
          margin: 0;
          padding: 0;
          border: 1px solid #eee;
          border-radius: 10px;
          overflow: hidden;
        }
        .empty {
          color: #6b7280;
          text-align: center;
          padding: 16px 0;
        }
      `}</style>
    </ul>
  );
}
