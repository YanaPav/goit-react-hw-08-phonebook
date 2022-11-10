import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';
import { StyledForm } from '../Common/StyledForm.styled';
import { CustomBtn } from '../Common/CustomBtn.styled';

export const SignupForm = () => {
  const signUpForm = useRef(null);
  const dispatch = useDispatch();

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
        <label>
          Name
          <input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
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
          <span>Sign up</span>
        </CustomBtn>
      </StyledForm>
    </>
  );
};
