import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiFilledInput-root:after': {
    borderBottomColor: 'white',
  },
});
