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
      }
      {
        id: 2,
        name: 'name2',
        email: 'email2@gmail.com',
        phone: '123-456-7890',
        type: 'business'
      }
      {
        id: 3,
        name: 'name3',
        email: 'email3@gmail.com',
        phone: '123-456-7890',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initalState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value=({
        contacts: state.contacts
      })>
      {props.children}
    </ContactContext.Provider>
  )
};

export default ContactState;
