import React, { useState } from 'react';
// useSate -> Function
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  const [cnt, setText] = useState(0);

  const addCount = () => {
    let new_cnt = cnt + 1;
    setText(new_cnt);
  };

  const resetCount = () => {
    setText(0);
  };

  return (
    <React.Fragment>
      <h1>{cnt}</h1>
      <div>
        <button
          className='btn'
          onClick={addCount}
        >
          Add
        </button>
      </div>
      <div>
        <button
          className='btn'
          onClick={resetCount}
        >
          Reset
        </button>
      </div>
    </React.Fragment>
  );
};

export default UseStateBasics;
