// react
import { Link } from 'react-router-dom';
// libraries
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//
export const StyledLogoLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  color: white;
  font-weight: 800;
  text-decoration: none;
`;

export const LogoIcon = styled(AccountCircleIcon)`
  &.MuiSvgIcon-root {
    width: 16px;
    height: 16px;
  }
`;
