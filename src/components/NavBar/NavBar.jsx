import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
import { SelectIsLoggedIn } from '../../redux/auth/authSelectors';
import { Header, HeaderWrap } from './NavBar.styled';
import { GuestMenu } from '../GuestMenu/GuestMenu';
import { Container } from '../Common/Container.styled';
import { Logo } from '../Logo/Logo';

export const NavBar = () => {
  const isLoggedIn = useSelector(SelectIsLoggedIn);

  return (
    <>
      <Header>
        <Container>
          <HeaderWrap>
            <Link to="/">
              <Logo />
            </Link>
            {isLoggedIn ? <UserMenu /> : <GuestMenu />}
          </HeaderWrap>
        </Container>
      </Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
