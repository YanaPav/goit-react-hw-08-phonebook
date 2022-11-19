// react
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// libraries
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useFormik } from 'formik';
// shared-components
import { validateContact } from 'shared/newContactSettings/formValidation';
import { isDuplicate } from 'shared/newContactSettings/isDuplicate';
import { StyledForm } from 'shared/components/StyledForm/StyledForm.styled';
import { StyledTextField } from 'shared/components/StyledTextField/StyledTextField.styled';
import { CustomBtn } from 'shared/components/Button/CustomBtn.styled';
// redux-components
import { add } from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectLoading,
  selectContactsError,
} from 'redux/contacts/contactsSelectors';

//
export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const formik = useFormik({
    initialValues,
    validate: validateContact,
    enableReinitialize: true,
    onSubmit: ({ name, number }, { resetForm }) => {
      addContactToStore({ name, number });
      if (!formik.errors.name && !formik.errors.number)
        resetForm({ initialValues });
    },
  });

  useEffect(() => {
    error?.type === 'add' && Notify.failure(`${error.message}`);
  }, [error]);

  function addContactToStore(contactObject) {
    if (isDuplicate(contactObject, contacts)) {
      Notify.warning(`${contactObject.name} is alredy in contacts`);
      return;
    }

    dispatch(add(contactObject));
  }

  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextField
        id="contactFormName"
        label="Name"
        variant="filled"
        type="text"
        name="name"
        size="small"
        required
        value={values.name}
        onChange={handleChange}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
      />

      <StyledTextField
        id="contactFormNumber"
        label="Number"
        type="tel"
        variant="filled"
        name="number"
        size="small"
        required
        value={values.number}
        onChange={handleChange}
        error={touched.number && Boolean(errors.number)}
        helperText={touched.number && errors.number}
      />

      <CustomBtn type="submit" disabled={isLoading === 'add'}>
        <span>{isLoading === 'add' ? 'Adding...' : 'Add contact'}</span>
      </CustomBtn>
    </StyledForm>
  );
};
