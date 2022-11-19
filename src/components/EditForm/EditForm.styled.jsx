import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`;

export const MobileInputsWrap = styled.div`
  .MuiFormControl-root {
    display: block;
  }
  @media screen and (min-width: 670px) {
    display: flex;
    gap: 10px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: transparent;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const DeleteIcon = styled(ClearIcon)`
  color: #b13232;
`;

export const EditIcon = styled(DoneIcon)`
  color: #1a450c;
`;
