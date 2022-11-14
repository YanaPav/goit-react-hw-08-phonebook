// react
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// libraries
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// redux-components
import { add } from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectLoading,
  selectContactsError,
} from 'redux/contacts/contactsSelectors';
// components
import { StyledForm } from '../Common/StyledForm.styled';
import { CustomBtn } from '../Common/CustomBtn.styled';
import { StyledTextField } from '../Common/StyledTextField.styled';

//
export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const namePattern =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

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
      <StyledTextField
        id="contactFormName"
        label="Name"
        variant="filled"
        type="text"
        name="name"
        size="small"
        pattern={namePattern}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />

      <StyledTextField
        id="contactFormNumber"
        label="Number"
        variant="filled"
        name="number"
        size="small"
        inputProps={{
          // pattern: /\+\d{1,9}/,
          title:
            'number  must be digits and can contain spaces, dashes, parentheses and can start with +',
        }}
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
