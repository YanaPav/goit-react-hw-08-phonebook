import { StyledNavLink } from './GuestMenu.styled';
import { MenuBox } from '../Common/MenuBox.styled';

export const GuestMenu = () => {
  return (
    <MenuBox>
      <StyledNavLink to="/login">
        <span>Log in</span>
      </StyledNavLink>
      <StyledNavLink to="/signup">
        <span>Sign up</span>
      </StyledNavLink>
    </MenuBox>
  );
};
