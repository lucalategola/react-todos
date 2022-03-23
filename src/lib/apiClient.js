const API_ENDPOINT_URL = 'https://gorest.co.in/public/v2/todos';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

const getTodos = async () => {
  try {
    const todos = await fetchData(API_ENDPOINT_URL);
    return todos;
  } catch (error) {
    throw new Error('There is a problem to fetch the todos');
  }
}

export { getTodos };
