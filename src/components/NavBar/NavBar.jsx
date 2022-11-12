// react
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// redux-components
import { SelectIsLoggedIn } from '../../redux/auth/authSelectors';
// components
import { UserMenu } from '../UserMenu/UserMenu';
import { Header, HeaderWrap } from './NavBar.styled';
import { GuestMenu } from '../GuestMenu/GuestMenu';
import { Container } from '../Common/Container.styled';
import { Logo } from '../Logo/Logo';
import { Loader } from '../Common/Loader.styled';

//
export const NavBar = () => {
  const isLoggedIn = useSelector(SelectIsLoggedIn);

  return (
    <>
      <Header>
        <Container>
          <HeaderWrap>
            <Logo />
            {isLoggedIn ? <UserMenu /> : <GuestMenu />}
          </HeaderWrap>
        </Container>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
