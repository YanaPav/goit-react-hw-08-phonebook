// react
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// libraries
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useFormik } from 'formik';
// redux-components
import { login } from 'redux/auth/authOperations';
import { selectAuthError, selectIsLoading } from 'redux/auth/authSelectors';
// shared-components
import { StyledForm } from 'shared/components/StyledForm/StyledForm.styled';
import { CustomBtn } from 'shared/components/Button/CustomBtn.styled';
import { StyledTextField } from 'shared/components/StyledTextField/StyledTextField.styled';

//
export const LoginForm = () => {
  const loginForm = useRef(null);
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const loading = useSelector(selectIsLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    error?.type === 'login' && Notify.failure(`${error.message.message}`);
  }, [error]);

  const initialValues = {
    email,
    password,
  };

  const formik = useFormik({
    initialValues,
    validate: validateUserValues,
    enableReinitialize: true,
    onSubmit: ({ email, password }, { resetForm }) => {
      setEmail(email);
      setPassword(password);
      dispatch(login({ email, password }));
      if (!formik.errors.email && !formik.errors.password)
        resetForm({ initialValues });
    },
  });

  const { handleSubmit, handleChange, touched, errors } = formik;

  return (
    <>
      <StyledForm ref={loginForm} onSubmit={handleSubmit}>
        <StyledTextField
          label="Email"
          variant="filled"
          size="small"
          type="email"
          name="email"
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          required
        />

        <StyledTextField
          label="Password"
          variant="filled"
          size="small"
          type="password"
          name="password"
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          required
        />
        <CustomBtn type="submit">
          <span>{loading === 'login' ? 'Loading...' : 'Log in'}</span>
        </CustomBtn>
      </StyledForm>
    </>
  );
};

function validateUserValues({ email, password }) {
  const errors = {};

  if (!email) {
    errors.email = 'Type email';
  } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(email)) {
    errors.name = 'Invalid email address ';
  }

  if (!password) {
    errors.password = 'Type password';
  } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i.test(password)) {
    errors.password =
      'Must contain at least one number and one uppercase and lowercase letter, and at least 8 characters';
  }

  return errors;
}
