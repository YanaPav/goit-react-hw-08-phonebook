// react
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
// libraries
import TextField from '@mui/material/TextField';
// redux-components
import { login } from 'redux/auth/authOperations';
// components
import { StyledForm } from '../Common/StyledForm.styled';
import { CustomBtn } from '../Common/CustomBtn.styled';

//
export const LoginForm = () => {
  const loginForm = useRef(null);
  const dispatch = useDispatch();

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
    <StyledForm ref={loginForm} onSubmit={onSubmit}>
      <TextField
        // id="filled-basic"
        label="Email"
        variant="filled"
        size="small"
        type="email"
        name="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        required
      />

      <TextField
        // id="filled-basic"
        label="Password"
        variant="filled"
        size="small"
        type="password"
        name="password"
        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        required
      />
      <CustomBtn type="submit">
        <span>Log in</span>
      </CustomBtn>
    </StyledForm>
  );
};
