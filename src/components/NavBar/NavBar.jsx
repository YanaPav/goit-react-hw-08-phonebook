// react
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// redux-components
import { SelectIsLoggedIn } from 'redux/auth/authSelectors';
// shared-components
import { Container } from 'shared/components/Container/Container.styled';
import { Logo } from 'shared/components/Logo/Logo';
// components
import { UserMenu } from '../UserMenu/UserMenu';
import { Header, HeaderWrap, MenuWrap } from './NavBar.styled';
import { GuestMenu } from '../GuestMenu/GuestMenu';

//
export const NavBar = () => {
  const isLoggedIn = useSelector(SelectIsLoggedIn);

  return (
    <>
      <Header>
        <HeaderWrap>
          <Logo />
          <MenuWrap>{isLoggedIn ? <UserMenu /> : <GuestMenu />}</MenuWrap>
        </HeaderWrap>
      </Header>
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
