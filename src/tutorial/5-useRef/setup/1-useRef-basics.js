import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    // Doesn't trigger re-render
    console.log(refContainer.current.value);
    refContainer.current.focus();
  });

  return (
    <>
      <form
        className='form'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          ref={refContainer}
        />
        <button
          type='submit'
          className='btn'
        >
          Submit
        </button>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  );
};

export default UseRefBasics;
