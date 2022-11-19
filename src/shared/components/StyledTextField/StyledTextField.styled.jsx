import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }

  & label.Mui-focused.Mui-error {
    color: #d32f2f;
  }

  & .MuiFilledInput-root:after {
    border-bottom-color: white;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px #8e8890;
    box-shadow: inset 0 0 0 50px #8e8890;
    -webkit-text-fill-color: black;
  }
`;
