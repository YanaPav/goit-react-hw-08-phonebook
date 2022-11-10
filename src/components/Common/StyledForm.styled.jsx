import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 250px;

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
