import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* input border */
  .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:after,
  .css-17spqnz::after {
    border-color: white;
  }

  /* input label */
  .css-11qvwfa-MuiFormLabel-root-MuiInputLabel-root.Mui-focused,
  .css-s21qj8.Mui-focused {
    color: white;
  }

  button {
    align-self: flex-start;
  }

  input {
    margin-top: 6px;
    width: 100%;
  }
`;
