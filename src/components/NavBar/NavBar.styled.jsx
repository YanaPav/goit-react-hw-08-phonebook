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
  align-items: flex-start;
`;
