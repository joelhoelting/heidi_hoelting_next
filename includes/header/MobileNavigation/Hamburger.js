import styled from 'styled-components';
import { mediaMin } from '~/styles/mediaQueries';

const Hamburger = props => {
  return (
    <HamburgerDivContainer onClick={props.toggleMobileNav}>
      <HamburgerDiv>
        <Line top='35%' active={props.mobileNavActive} topHover='30%' rotate='-45deg' transformOrigin='right'/>
        <Line top='65%' active={props.mobileNavActive} topHover='60%' rotate='45deg' transformOrigin='right'/>
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
  transform: ${props => props.active ? `rotate(${props.rotate})` : 'rotate(0)'};
  width: ${props => props.active ? '80%' : '100%'};
`;