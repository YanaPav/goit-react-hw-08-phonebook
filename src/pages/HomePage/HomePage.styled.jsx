import styled from 'styled-components';
// react
import { Link } from 'react-router-dom';

export const HomePageWrap = styled.div`
  img {
    display: block;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 670px) {
    margin-top: 60px;

    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img {
      width: 350px;
    }
  }
`;

export const MobileText = styled.p`
  text-align: center;
  font-weight: 600;
`;

export const HomePageText = styled.div`
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-bottom: 40px;

  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.5;
  }

  a {
    margin-top: 8px;
    display: block;
  }

  @media screen and (min-width: 670px) {
    width: 250px;
  }
`;

export const StyledLink = styled(Link)`
  appearance: none;
  background-color: transparent;
  color: #000000;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 6px;

  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  text-transform: uppercase;
  transition: opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  &:before {
    animation: opacityFallbackOut 0.5s step-end forwards;
    backface-visibility: hidden;
    background-color: rgba(246, 238, 242, 0.56);
    clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateZ(0);
    transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
      -webkit-clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 100%;
  }

  &:hover:before {
    animation: opacityFallbackIn 0s step-start forwards;
    clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
  }

  &:after {
    background-color: #ffffff;
  }

  span {
    z-index: 1;
    position: relative;
    border-bottom: 2px solid black;
  }
`;
