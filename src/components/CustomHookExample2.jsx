import useLocalStorage from '../hooks/useLocalStorage';

const CustomHookExample2 = () => {
  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const submitTask = e => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <form onSubmit={submitTask} className="w-50">
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            className="form-control"
            type="text"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
      <hr />
      {tasks && tasks.map(item => <h3 key={item.date}>{item.task}</h3>)}
    </>
  );
};

export default CustomHookExample2;
