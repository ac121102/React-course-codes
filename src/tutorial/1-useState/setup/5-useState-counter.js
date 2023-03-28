import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexInrease = () => {
    setTimeout(() => {
      /* Getting the incorrect older value when updating
      setValue(value + 1);
      */

      /* Getting the correct value right before the update */
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      {/* Complex Counter*/}
      <section style={{ margin: '4em 0' }}>
        <h2> Complex Counter</h2>
        <h1> {value}</h1>
        <button
          className='btn'
          onClick={complexInrease}
        >
          Increase Later
        </button>
      </section>

      {/* Regular Counter*/}
      <section style={{ margin: '4em 0' }}>
        <h2> Regular Counter</h2>
        <h1> {value}</h1>
        <button
          className='btn'
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
        <button
          className='btn'
          onClick={() => setValue(0)}
        >
          Reset
        </button>
        <button
          className='btn'
          onClick={() => setValue(value + 1)}
        >
          Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
