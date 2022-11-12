// react
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// libraries
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircularProgress from '@mui/material/CircularProgress';
// redux-components
import {
  selectContacts,
  selectLoading,
  selectContactsError,
} from 'redux/contacts/contactsSelectors';
import { edit } from 'redux/contacts/contactsOperations';
// components
import {
  StyledForm,
  EditIcon,
  DeleteIcon,
  ButtonWrap,
  MobileInputsWrap,
} from './EditForm.styled';
import { StyledTextField } from '../Common/StyledTextField.styled';

//
export const EditForm = ({ id, name, number, closeEditForm }) => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const editFormBtn = document.getElementById(`editFormBtn${id}`);
  const editFormBtnText = document.getElementById(`editFormBtnText${id}`);

  console.log(isLoading);

  useEffect(() => {
    error?.type === 'edit' && Notify.failure(`${error.message}`);
  }, [error]);

  useEffect(() => {
    window.addEventListener('click', editFormClickHandler);

    const editFormName = document.getElementById(`editFormName${id}`);
    const editFormNumber = document.getElementById(`editFormNumber${id}`);
    const closeEditFormBtn = document.getElementById(`closeEditFormBtn${id}`);
    const submitEditFormBtn = document.getElementById(`submitEditFormBtn${id}`);
    const editFormCloseIcon = document.getElementById(`editFormCloseIcon${id}`);
    const editFormSubmitIcon = document.getElementById(
      `editFormSubmitIcon${id}`
    );

    function editFormClickHandler({ target }) {
      const isClickOutEditForm =
        target !== editFormName &&
        target !== editFormNumber &&
        target !== closeEditFormBtn &&
        target !== submitEditFormBtn &&
        target !== editFormBtn &&
        target !== editFormBtnText &&
        target !== editFormCloseIcon &&
        target !== editFormSubmitIcon &&
        target !== editFormSubmitIcon.children[0];
      // остання умова - обробка бага при натисканні на path елемента svg

      if (isClickOutEditForm) closeEditForm();
    }

    return () => window.removeEventListener('click', editFormClickHandler);
  }, [closeEditForm, editFormBtn, editFormBtnText, id]);

  const isDuplicate = newName => {
    const result = contacts?.find(contactItem => contactItem.name === newName);
    return result;
  };

  const addContactToStore = async contactObject => {
    if (isDuplicate(contactObject.name)) {
      Notify.warning(`${contactObject.name} is alredy in contacts`);
      return;
    }

    const result = await dispatch(edit({ id: id, body: contactObject }));

    if (!result.error) closeEditForm();
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

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <AccountCircleIcon />
        <MobileInputsWrap>
          <StyledTextField
            id={`editFormName${id}`}
            variant="filled"
            size="small"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={newName}
            onChange={handleChange}
          />

          <StyledTextField
            id={`editFormNumber${id}`}
            variant="filled"
            size="small"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={newNumber}
            onChange={handleChange}
          />
        </MobileInputsWrap>
        {isLoading === 'edit' ? (
          <CircularProgress />
        ) : (
          <ButtonWrap>
            <button
              id={`closeEditFormBtn${id}`}
              type="button"
              disabled={isLoading === 'edit'}
              onClick={closeEditForm}
            >
              <DeleteIcon id={`editFormCloseIcon${id}`} />
            </button>
            <button
              id={`submitEditFormBtn${id}`}
              type="submit"
              disabled={isLoading === 'edit'}
            >
              <EditIcon id={`editFormSubmitIcon${id}`} />
            </button>
          </ButtonWrap>
        )}
      </StyledForm>
    </>
  );
};

EditForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  closeEditForm: PropTypes.func.isRequired,
};
