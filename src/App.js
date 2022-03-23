import { useEffect, useState } from 'react';
import styles from './App.module.css';
import BannerError from './components/BannerError/BannerError';
import BannerInfo from './components/BannerInfo/BannerInfo';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import useTodos from './hooks/useTodos';
import useFilter from './hooks/useFilter';
import { filtersValue, FILTER_COMPLETED, FILTER_PENDING } from './lib/filter';

function App() {
  const {todos, loading, error} = useTodos();
  const {filter, handleFilter} = useFilter();
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  useEffect(() => {
    let newTodos = [];

    if (!filter.completed && !filter.pending) {
      newTodos = todos;
    } else {
      todos.forEach(todo => {
        if (filter.completed && todo.status === FILTER_COMPLETED) {
          newTodos.push(todo);
        }
        if (filter.pending && todo.status === FILTER_PENDING) {
          newTodos.push(todo);
        }
      });
    }

    setFilteredTodos(newTodos);
  }, [filter, todos]);

  if (error) {
    return (
      <div className={styles.app}>
        <Header title="Todos" />
        <BannerError message={error} />
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.app}>
        <Header title="Todos" />
        <BannerInfo message="Loading data, please wait..." />
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <Header title="Todos" />
      <Main filtersValue={filtersValue} todos={filteredTodos} handleFilter={handleFilter} />
    </div>
  );
}

export default App;
