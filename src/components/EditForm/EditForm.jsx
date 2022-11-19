// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// libraries
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useFormik } from 'formik';
// shared-components
import { validateContact } from 'shared/newContactSettings/formValidation';
import { isDuplicate } from 'shared/newContactSettings/isDuplicate';
import { CircularLoader } from 'shared/components/Loaders/CircularLoader.styled';
import { StyledTextField } from 'shared/components/StyledTextField/StyledTextField.styled';
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

//
export const EditForm = ({ id, startName, startNumber, closeEditForm }) => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  const initialValues = {
    name: startName,
    number: startNumber,
  };

  const formik = useFormik({
    initialValues,
    validate: validateContact,
    enableReinitialize: true,
    onSubmit: ({ name, number }) => {
      if (name === startName && number === startNumber) {
        closeEditForm();
        return;
      }
      addContactToStore({ name, number });
    },
  });

  useEffect(() => {
    error?.type === 'edit' && Notify.failure(`${error.message}`);
  }, [error]);

  const editFormBtn = document.getElementById(`editFormBtn${id}`);
  const editFormBtnText = document.getElementById(`editFormBtnText${id}`);

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
      // the last condition is the bug processing on svg element path click

      if (isClickOutEditForm) closeEditForm();
    }

    return () => window.removeEventListener('click', editFormClickHandler);
  }, [closeEditForm, editFormBtn, editFormBtnText, id]);

  const addContactToStore = async contactObject => {
    if (isDuplicate(contactObject, contacts)) {
      Notify.warning(`${contactObject.name} is alredy in contacts`);
      return;
    }

    const result = await dispatch(edit({ id: id, body: contactObject }));

    if (!result.error) closeEditForm();
  };

  const { handleSubmit, handleChange, values, touched, errors } = formik;

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
            required
            value={values.name}
            onChange={handleChange}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />

          <StyledTextField
            id={`editFormNumber${id}`}
            variant="filled"
            size="small"
            type="tel"
            name="number"
            required
            value={values.number}
            onChange={handleChange}
            error={touched.number && Boolean(errors.number)}
            helperText={touched.number && errors.number}
          />
        </MobileInputsWrap>
        {isLoading === 'edit' ? (
          <CircularLoader />
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
  startName: PropTypes.string.isRequired,
  startNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  closeEditForm: PropTypes.func.isRequired,
};
