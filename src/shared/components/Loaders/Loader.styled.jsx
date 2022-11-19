import styled from 'styled-components';
import LinearProgress from '@mui/material/LinearProgress';

export const Loader = styled(LinearProgress)`
  margin-top: 40px;

  &.MuiLinearProgress-root {
    background-color: #c89ce6;
  }

  .MuiLinearProgress-bar {
    background-color: white;
  }
`;
