import { useRef, useState, useEffect } from 'react';

const UseRefExample2 = () => {
  const [name, setName] = useState();
  const renders = useRef(1);
  const prevState = useRef('');

  useEffect(() => {
    renders.current = renders.current + 1;
    prevState.current = name;
  }, [name]);

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev State: {prevState.current}</h2>
      <input
        className="form-control mb-3"
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
        name="name"
      />
    </div>
  );
};

export default UseRefExample2;
