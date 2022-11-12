// react
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// libraries
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// redux-components
import { signUp } from 'redux/auth/authOperations';
import { selectAuthError } from 'redux/auth/authSelectors';
// components
import { StyledForm } from '../Common/StyledForm.styled';
import { CustomBtn } from '../Common/CustomBtn.styled';
import { StyledTextField } from '../Common/StyledTextField.styled';

//
const SignupForm = () => {
  const signUpForm = useRef(null);
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  useEffect(() => {
    error?.type === 'signUp' && Notify.failure(`${error.message}`);
  }, [error]);

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData(signUpForm.current);
    let newUserInfo = {};
    for (const [key, value] of formData) {
      newUserInfo[key] = value;
    }
    dispatch(signUp(newUserInfo));
    signUpForm.current.reset();
  };

  return (
    <>
      <StyledForm ref={signUpForm} onSubmit={onSubmit}>
        <StyledTextField
          label="Name"
          variant="filled"
          size="small"
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
        <StyledTextField
          label="Email"
          variant="filled"
          size="small"
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
        <StyledTextField
          id="filled-basic"
          label="Password"
          variant="filled"
          size="small"
          type="password"
          name="password"
          required
        />
        <CustomBtn type="submit">
          <span>Sign up</span>
        </CustomBtn>
      </StyledForm>
    </>
  );
};

export default SignupForm;
