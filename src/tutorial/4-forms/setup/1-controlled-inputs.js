import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [fName, setFName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello');
    console.log(e);
  };
  return (
    <>
      <article>
        <form
          className='form'
          // onSubmit={handleSubmit}
          onSubmit={handleSubmit}
        >
          <div className='form-control'>
            <label htmlFor='firstName'>
              Name:
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              name='email'
            ></input>
          </div>
          <button
            type='submit'
            onSubmit={handleSubmit}
          >
            {' '}
            Add person
          </button>
        </form>
      </article>
      <article></article>
    </>
  );
};

export default ControlledInputs;
