import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

var people, setPeople;

const removePerson = (id) => {
  setPeople((people) => {
    return people.filter((person) => person.id !== id);
  });
};

const ContextAPI = () => {
[people, setPeople] = useState(data);
  return (
    <>
      <h3>prop drilling</h3>
      <List people={people} />
    </>
  );
};

const List = ({ people}) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name}) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
