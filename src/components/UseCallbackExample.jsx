import React, { useState, useCallback } from 'react';

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks(prevState => [...prevState, 'Some new task']);
  }, []);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

const Button = React.memo(({ addTask }) => {
  console.log('Button Rendered');
  return <button onClick={addTask}>Add Task</button>;
});

export default UseCallbackExample;
