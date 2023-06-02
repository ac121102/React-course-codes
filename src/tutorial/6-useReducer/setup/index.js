import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return { ...state, people: newPeople, isModalOpen: true, modalContent: 'Item Added!' };
  } else if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'Please enter an item!' };
  } else if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false, modalContent: '' };
  }
  throw new Error('No matching action found!');
};

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: 'Hello World',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      setName('');
      dispatch({ type: 'ADD_ITEM', payload: newItem });
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal
          modalContent={state.modalContent}
          closeModal={closeModal}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className='form'
      >
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button
          type='submit'
          className='btn'
        >
          Add
        </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4> {person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
