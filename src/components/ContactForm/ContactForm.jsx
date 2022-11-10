import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { StyledForm } from '../Common/StyledForm.styled';
import {
  selectContacts,
  selectLoading,
  selectContactsError,
} from 'redux/contacts/contactsSelectors';
import { add } from 'redux/contacts/contactsOperations';
import TextField from '@mui/material/TextField';
import { CustomBtn } from '../Common/CustomBtn.styled';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const isDuplicate = name => {
    const result = contacts?.find(
      contactItem => contactItem.name?.toLowerCase() === name.toLowerCase()
    );
    return result;
  };

  useEffect(() => {
    error?.type === 'add' && Notify.failure(`${error.message}`);
  }, [error]);

  const addContactToStore = contactObject => {
    if (isDuplicate(contactObject.name)) {
      Notify.warning(`${contactObject.name} is alredy in contacts`);
      return;
    }

    dispatch(add(contactObject));
    resetState();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactObj = {
      name,
      number,
    };

    addContactToStore(contactObj);
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        size="small"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />

      <TextField
        id="outlined-basic"
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
        size="small"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />

      <CustomBtn type="submit" disabled={isLoading === 'add'}>
        <span>{isLoading === 'add' ? 'Adding...' : 'Add contact'}</span>
      </CustomBtn>
    </StyledForm>
  );
};
