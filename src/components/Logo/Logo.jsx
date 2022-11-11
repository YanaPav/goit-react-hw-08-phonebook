// libraries
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// components
import { StyledLogoLink } from './Logo.styled';

export const Logo = () => {
  return (
    <StyledLogoLink to="/">
      Ph
      <AccountCircleIcon />
      neBOOK
    </StyledLogoLink>
  );
};
