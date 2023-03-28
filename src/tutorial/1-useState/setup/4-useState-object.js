import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: '20',
    message: 'Random message',
  });

  /*
Can be used seperately 
const [name, setName] = useState('peter')
const [age, setAge] = useState(24)
const [message, setMessage] = useState('random message')
*/

  const updateMessage = () => {
    let new_person = {
      ...person,
      message: 'Hello World!',
    };
    setPerson(new_person);
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button
        className='btn'
        onClick={updateMessage}
      >
        Update Message
      </button>
    </>
  );
};

export default UseStateObject;
