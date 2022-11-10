import qr_code from '../../images/qr_code.png';
import { HomePageWrap, DarkLogo, StyledLink } from './HomePage.styled';

export const HomePage = () => {
  return (
    <HomePageWrap>
      <span>
        Keep important contacts with you all the time with <DarkLogo /> account!
        <StyledLink to={'/contacts'}>
          <span>Get started!</span>
        </StyledLink>
      </span>

      <img src={qr_code} alt="qr-code" width={350} />
    </HomePageWrap>
  );
};
