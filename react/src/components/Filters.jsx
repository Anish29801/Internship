import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted, setFilter } from '../features/todos/todoSlice';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
];

export default function Filters() {
  const dispatch = useDispatch();
  const filter = useSelector((s) => s.todos.filter);
  const items = useSelector((s) => s.todos.items);
  const remaining = items.filter((t) => !t.completed).length;

  return (
    <div className="filters">
      <div className="tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={filter === t.id ? 'active' : ''}
            onClick={() => dispatch(setFilter(t.id))}
          >
            {t.label}
          </button>
        ))}
      </div>

      <span className="count">{remaining} left</span>

      <button className="clear" onClick={() => dispatch(clearCompleted())}>
        Clear Completed
      </button>

      <style jsx="true">{`
        .filters {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 12px;
          flex-wrap: wrap;
        }
        .tabs {
          display: flex;
          gap: 8px;
        }
        .tabs button,
        .clear {
          padding: 8px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 999px;
          background: #fff;
          cursor: pointer;
        }
        .tabs button.active {
          background: #111827;
          color: #fff;
          border-color: #111827;
        }
        .count {
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}
