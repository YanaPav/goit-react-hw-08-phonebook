import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* input border */
  .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:after {
    border-color: white;
  }

  /* input label */
  .css-11qvwfa-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: white;
  }

  button {
    align-self: flex-start;
  }

  label {
    display: block;
  }

  label:not(:last-child) {
    margin-bottom: 10px;
  }

  input {
    margin-top: 6px;
    width: 100%;
  }
`;
