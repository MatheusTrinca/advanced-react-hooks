import { useRef } from 'react';

const UseRefExample1 = () => {
  const inputRef = useRef();
  const paraRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    alert(inputRef.current.value);
    inputRef.current.value = '';
  };

  const paraHandler = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'red';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input ref={inputRef} type="text" className="form-control mb-2" />
        <button className="btn btn-primary">Submit</button>
      </form>
      <p onClick={paraHandler} ref={paraRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        illum illo in saepe accusantium odit dolorem beatae dolor perspiciatis
        quisquam!
      </p>
    </div>
  );
};

export default UseRefExample1;
