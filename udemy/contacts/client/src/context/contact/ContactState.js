import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'name1',
        email: 'email1@gmail.com',
        phone: '123-456-7890',
        type: 'personal'
      },
      {
        id: 2,
        name: 'name2',
        email: 'email2@gmail.com',
        phone: '123-456-7890',
        type: 'professional'
      },
      {
        id: 3,
        name: 'name3',
        email: 'email3@gmail.com',
        phone: '123-456-7890',
        type: 'personal'
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  }

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  }

  // Set Current Contact
  const setCurent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  }

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  }

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurent,
        clearCurrent
      }}>
      {props.children}
    </ContactContext.Provider>
  )
};

export default ContactState;
