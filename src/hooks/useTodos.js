import { useEffect, useState } from 'react';
import { getTodos } from '../lib/apiClient';

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await getTodos();
        setTodos(todos);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    setLoading(true);
    fetchTodos();
  }, []);

  return {
    todos,
    loading,
    error
  }
}

export default useTodos;
