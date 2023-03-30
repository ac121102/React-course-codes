import React, {
  useState,
  useEffect,
} from 'react';

// by default runs after every re-render
// cleanup function
// second parameter -> Dependency Array
// can't make useEffect an async await

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  /* runs on rendering of value */
  useEffect(() => {
    console.log('Effect');
    if (value) {
      document.title = `New Messgaes(${value})`;
    }
  }, [value]);

  /* Only runs on re-render */
  useEffect(() => {
    console.log('Welcome!');
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button
        className='btn'
        onClick={() => setValue(value + 1)}
      >
        Click ME!
      </button>
    </>
  );
};

export default UseEffectBasics;
