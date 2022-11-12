// components
import {
  HomePageWrap,
  StyledLink,
  HomePageText,
  MobileText,
  HomePageLogo,
} from './HomePage.styled';
import { LogoIcon } from 'components/Logo/Logo.styled';
// images
import qr_code_desktop from 'images/qr_code_desktop.png';
import qr_code_mobile from 'images/qr_code_mobile.png';

//
export const HomePage = () => {
  const screenWidth = window.innerWidth;

  return (
    <HomePageWrap>
      <HomePageText>
        <p>Keep important contacts with you all the time with</p>
        <HomePageLogo>
          Ph
          <LogoIcon />
          neBOOK
        </HomePageLogo>
        <StyledLink to={'/contacts'}>
          <span>Get started!</span>
        </StyledLink>
      </HomePageText>

      {screenWidth > 670 ? (
        <img src={qr_code_desktop} alt="qr-code" />
      ) : (
        <>
          <img src={qr_code_mobile} alt="qr-code" />
          <MobileText>Share with friends :)</MobileText>
        </>
      )}
    </HomePageWrap>
  );
};
