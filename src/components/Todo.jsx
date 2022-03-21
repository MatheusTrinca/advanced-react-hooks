import { useEffect, useState, useRef } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);

  const isMounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      const data = await response.json();
      setTodo(data);
    };
    setTimeout(() => {
      if (isMounted.current) {
        fetchData();
        setLoading(false);
      }
    }, 3000);

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return <div>{loading ? <h4>Loading...</h4> : <h4>{todo.title}</h4>}</div>;
};

export default Todo;
