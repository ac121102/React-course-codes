import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] =
    React.useState(data);

  const removeAll = () => {
    setPeople([]);
  };

  const removeItem = (id) => {
    let newPeople = people.filter(
      (person) => person.id !== id
    );
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div
            key={id}
            className='item'
          >
            <h3>{name}</h3>
            <button
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        className='btn'
        onClick={() => removeAll()}
      >
        Clear items
      </button>
    </>
  );
};

export default UseStateArray;
