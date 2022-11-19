// react
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// libraries
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useFormik } from 'formik';
// redux-components
import { signUp } from 'redux/auth/authOperations';
import { selectAuthError, selectIsLoading } from 'redux/auth/authSelectors';
// shared-components
import { StyledForm } from 'shared/components/StyledForm/StyledForm.styled';
import { CustomBtn } from 'shared/components/Button/CustomBtn.styled';
import { StyledTextField } from 'shared/components/StyledTextField/StyledTextField.styled';

//
const SignupForm = () => {
  const signUpForm = useRef(null);
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    error?.type === 'signUp' && Notify.failure(`${error.message}`);
  }, [error]);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validate: validateUserValues,
    enableReinitialize: true,
    onSubmit: ({ name, email, password }, { resetForm }) => {
      dispatch(signUp({ name, email, password }));
      if (
        !formik.errors.name &&
        !formik.errors.email &&
        !formik.errors.password
      )
        resetForm({ initialValues });
    },
  });

  const { handleSubmit, handleChange, touched, errors } = formik;

  return (
    <>
      <StyledForm ref={signUpForm} onSubmit={handleSubmit}>
        <StyledTextField
          label="Name"
          variant="filled"
          size="small"
          type="text"
          name="name"
          onChange={handleChange}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
          required
        />
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
          id="filled-basic"
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
          <span>{loading === 'signUp' ? 'Loading...' : 'Sign up'}</span>
        </CustomBtn>
      </StyledForm>
    </>
  );
};

function validateUserValues({ name, email, password }) {
  const errors = {};

  if (!name) {
    errors.name = 'Type name';
  } else if (
    !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(name)
  ) {
    errors.name = 'Invalid name';
  }

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

export default SignupForm;
