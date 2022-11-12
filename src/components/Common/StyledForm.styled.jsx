import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    align-self: flex-start;
  }

  input {
    margin-top: 6px;
    width: 100%;
  }
`;
