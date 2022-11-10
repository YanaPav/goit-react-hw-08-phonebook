import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  selectContacts,
  selectLoading,
  selectContactsError,
} from 'redux/contacts/contactsSelectors';
import { edit } from '../../redux/contacts/contactsOperations';

export const EditForm = ({ id, name, number, closeEditForm }) => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const isDuplicate = newName => {
    const result = contacts?.find(
      contactItem => contactItem.name?.toLowerCase() === newName?.toLowerCase()
    );
    return result;
  };

  useEffect(() => {
    error?.type === 'edit' && Notify.failure(`${error.message}`);
  }, [error]);

  const addContactToStore = contactObject => {
    if (isDuplicate(contactObject.name)) {
      Notify.warning(`${contactObject.name} is alredy in contacts`);
      return;
    }

    dispatch(edit({ id: id, body: contactObject }));
    resetState();
    closeEditForm();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') setNewName(value);
    if (name === 'number') setNewNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactObj = {
      name: newName,
      number: newNumber,
    };

    addContactToStore(contactObj);
  };

  const resetState = () => {
    setNewName('');
    setNewNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={newName}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={newNumber}
          onChange={handleChange}
        />
      </label>
      <button type="submit" disabled={isLoading === 'edit'}>
        Сonfirm
      </button>
      <button
        type="button"
        onClick={closeEditForm}
        disabled={isLoading === 'edit'}
      >
        Cancel
      </button>
    </form>
  );
};
