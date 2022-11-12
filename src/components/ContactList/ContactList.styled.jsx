import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

export const StyledList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

export const StyledCircularLoader = styled(CircularProgress)`
  &.MuiCircularProgress-root {
    color: white;
  }
`;
