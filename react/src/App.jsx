import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

export default function App() {
  return (
    <div className="container">
      <h1>Redux Toolkit Todo</h1>
      <TodoInput />
      <TodoList />
      <Filters />
      <footer>
        <a href="https://redux.js.org/tutorials/essentials/part-1-overview-concepts" target="_blank" rel="noreferrer">
          Redux Essentials (Docs)
        </a>
      </footer>

      <style jsx="true">{`
        .container {
          max-width: 720px;
          margin: 40px auto;
          padding: 0 16px 40px;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
            'Apple Color Emoji', 'Segoe UI Emoji';
        }
        h1 {
          font-size: 28px;
          margin-bottom: 16px;
        }
        footer {
          margin-top: 24px;
        }
        footer a {
          color: #2563eb;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
