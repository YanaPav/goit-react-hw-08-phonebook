// components
import { StyledNavLink } from './GuestMenu.styled';

export const GuestMenu = () => {
  return (
    <>
      <StyledNavLink to="/login">
        <span>Log in</span>
      </StyledNavLink>
      <StyledNavLink to="/signup">
        <span>Sign up</span>
      </StyledNavLink>
    </>
  );
};
