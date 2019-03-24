import styled from 'styled-components';
import { mediaMin } from '~/styles/mediaQueries';

const MobileNavigation = props => {
  console.log('hello world')
  return (
    <HamburgerDiv onClick={props.toggleMobileNav}>
      <Line top='35%' topHover='30%'/>
      <Line top='60%' topHover='60%'/>
    </HamburgerDiv>
  );
};

export default MobileNavigation;

const HamburgerDiv = styled.div`
  width: 25px;
  position: relative;
  margin: 0 20px;
  cursor: pointer;
  height: 50px;
  ${mediaMin.tabletLandscape`
    display: none;
  `}
`;

const Line = styled.div`
  position: absolute;
  background: black;
  height: 2px;
  display: block;
  width: 100%;
  top: ${props => props.top};
  transition: top 300ms ease;
`;