import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';
import { StyledForm } from '../Common/StyledForm.styled';
import { CustomBtn } from '../Common/CustomBtn.styled';

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
    <>
      <StyledForm ref={loginForm} onSubmit={onSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
        </label>
        <CustomBtn type="submit">
          <span>Log in</span>
        </CustomBtn>
      </StyledForm>

      <div>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};
