import styled from 'styled-components';
import { mediaMin } from '../../../styles/mediaQueries';

const Hamburger = ({ mobileNavActive, toggleMobileNav }) => {
  return (
    <HamburgerDivContainer onClick={toggleMobileNav}>
      <HamburgerDiv>
        <Line
          active={mobileNavActive}
          rotate="-45deg"
          top="35%"
          topHover="30%"
          transformOrigin="right"
        />
        <Line
          active={mobileNavActive}
          rotate="45deg"
          top="70%"
          topHover="60%"
          transformOrigin="right"
        />
      </HamburgerDiv>
    </HamburgerDivContainer>
  );
};

export default Hamburger;

const HamburgerDivContainer = styled.div`
  cursor: pointer;
`;

const HamburgerDiv = styled.div`
  width: 25px;
  position: relative;
  margin: 0 20px;
  height: 50px;
  ${mediaMin.tabletLandscape`
    display: none;
  `}
`;

const Line = styled.div`
  background: black;
  display: block;
  height: 2px;
  position: absolute;
  top: ${props => props.top};
  transition: all 200ms ease;
  transform-origin: ${props => props.transformOrigin};
  transform: ${props => (props.active ? `rotate(${props.rotate})` : 'rotate(0)')};
  width: 100%;
`;
