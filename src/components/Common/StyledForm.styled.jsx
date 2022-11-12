import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* input border */
  .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:after {
    -o-border-color: white;
    -moz-border-color: white;
    -ms-border-color: white;
    -webkit-border-color: white;
    -icab-border-color: white;
    border-color: white;
  }

  /* input label */
  .css-11qvwfa-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    -o-color: white;
    -moz-color: white;
    -ms-color: white;
    -webkit-color: white;
    -icab-color: white;
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
