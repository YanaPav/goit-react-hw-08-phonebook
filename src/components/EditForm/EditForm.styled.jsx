import styled from 'styled-components';
// libraries
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;

  /* input border */
  .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:after {
    border-color: white;
  }

  /* input label */
  .css-11qvwfa-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: white;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    padding: 0;
    color: transparent;
    border: none;
    background-color: transparent;
    transition: color 500ms linear;
    cursor: pointer;
  }
`;

export const DeleteIcon = styled(ClearIcon)`
  color: #b13232;
`;

export const EditIcon = styled(DoneIcon)`
  color: #1a450c;
`;
