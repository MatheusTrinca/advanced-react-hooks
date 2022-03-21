import { useState, useEffect, useRef, useMemo } from 'react';

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);

  useEffect(() => {
    renders.current += 1;
  });

  const reRender = () => {
    setInc(prevState => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  const sqrt = useMemo(() => getSqrt(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        className="form-control w-25"
      />

      <h2 className="my-3">Expensive Funcion Call {sqrt}</h2>
      <h3>Renders: {renders.current}</h3>
      <button onClick={reRender} className="btn btn-primary">
        ReRender
      </button>
    </div>
  );
};

const getSqrt = num => {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }
  return Math.sqrt(num);
};

export default UseMemoExample;
