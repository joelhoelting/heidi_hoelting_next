import React from 'react';
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ThreeDotsWrapper = styled.div`
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  div {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: ${props => props.color || '#000'};
    animation: ${fade} 0.8s ease-in-out alternate infinite;
    &:nth-of-type(1) {
      animation-delay: -0.4s;
    }
    &:nth-of-type(2) {
      animation-delay: -0.2s;
    }
  }
`;

const ThreeDots = ({ color }) => {
  return (
    <ThreeDotsWrapper color={color}>
      <div />
      <div />
      <div />
    </ThreeDotsWrapper>
  );
};

export default ThreeDots;
