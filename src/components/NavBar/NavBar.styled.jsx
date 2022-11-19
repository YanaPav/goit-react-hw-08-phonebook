import styled from 'styled-components';

export const Header = styled.header`
  padding: 14px 0;
  background-color: rgba(105, 105, 105, 0.5);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  margin-bottom: 30px;

  p {
    margin: 0;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 320px) {
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 780px) {
    width: 780px;
  }
`;

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
