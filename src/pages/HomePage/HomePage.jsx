// components
import {
  HomePageWrap,
  StyledLink,
  HomePageText,
  MobileText,
} from './HomePage.styled';
import { Logo } from 'components/Logo/Logo';
// images
import qr_code_desktop from 'images/qr_code_desktop.png';
import qr_code_mobile from 'images/qr_code_mobile.png';

//
export const HomePage = () => {
  const screenWidth = window.innerWidth;

  return (
    <HomePageWrap>
      <HomePageText>
        <p>Keep important contacts with you all the time with</p> <Logo />
        <StyledLink to={'/contacts'}>
          <span>Get started!</span>
        </StyledLink>
      </HomePageText>

      {screenWidth > 670 ? (
        <img src={qr_code_desktop} alt="qr-code" />
      ) : (
        <>
          <img src={qr_code_mobile} alt="qr-code" />
          <MobileText>Share width friends :)</MobileText>
        </>
      )}
    </HomePageWrap>
  );
};
