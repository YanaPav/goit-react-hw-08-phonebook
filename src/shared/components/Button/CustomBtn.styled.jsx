import styled from 'styled-components';

export const CustomBtn = styled.button`
  appearance: none;
  background-color: transparent;
  color: #000000;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  border: none;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 6px;
  background-color: rgba(246, 238, 242, 0.56);

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
    background-color: rgba(246, 238, 242, 0.586);
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
    display: flex;
    align-items: center;
  }

  svg {
    width: 16px;
    margin-left: 4px;
  }
`;
