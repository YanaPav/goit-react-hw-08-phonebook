// react
import { Link } from 'react-router-dom';
// libraries
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//
export const StyledLogoLink = styled(Link)`
  display: flex;
  align-items: baseline;
  color: white;
  font-weight: 800;
  text-decoration: none;

  @media screen and (min-width: 780px) {
    font-size: 24px;
  }
`;

export const LogoIcon = styled(AccountCircleIcon)`
  &.MuiSvgIcon-root {
    display: flex;
    align-items: flex-end;
    width: 16px;
    height: 16px;

    @media screen and (min-width: 780px) {
      width: 20px;
      height: 20px;
    }
  }
`;
