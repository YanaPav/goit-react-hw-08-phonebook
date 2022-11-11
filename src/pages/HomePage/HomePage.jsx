// components
import { HomePageWrap, StyledLink, HomePageText } from './HomePage.styled';
import { Logo } from 'components/Logo/Logo';
// images
import qr_code from 'images/qr_code.png';

//
export const HomePage = () => {
  return (
    <HomePageWrap>
      <HomePageText>
        Keep important contacts with you all the time with <Logo /> account!
        <StyledLink to={'/contacts'}>
          <span>Get started!</span>
        </StyledLink>
      </HomePageText>

      <img src={qr_code} alt="qr-code" width={350} />
    </HomePageWrap>
  );
};
