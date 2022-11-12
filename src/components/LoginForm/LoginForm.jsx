// react
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// libraries
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// redux-components
import { login } from 'redux/auth/authOperations';
import { selectAuthError } from 'redux/auth/authSelectors';
// components
import { StyledForm } from '../Common/StyledForm.styled';
import { CustomBtn } from '../Common/CustomBtn.styled';
import { StyledTextField } from '../Common/StyledTextField.styled';

//
export const LoginForm = () => {
  const loginForm = useRef(null);
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  useEffect(() => {
    error?.type === 'login' && Notify.failure(`${error.message.message}`);
  }, [error]);

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData(loginForm.current);
    let userInfo = {};
    for (const [key, value] of formData) {
      userInfo[key] = value;
    }
    dispatch(login(userInfo));
    loginForm.current.reset();
  };

  return (
    <>
      {/* {error?.type === 'login' && <p>{error.message.message}</p>} */}
      <StyledForm ref={loginForm} onSubmit={onSubmit}>
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
          label="Password"
          variant="filled"
          size="small"
          type="password"
          name="password"
          required
        />
        <CustomBtn type="submit">
          <span>Log in</span>
        </CustomBtn>
      </StyledForm>
    </>
  );
};
