import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import { mediaMin } from '~/styles/mediaQueries';

class Header extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      mobileNavActive: false
    };
  }

  render() {
    return (
      <HeaderWrapper>
        <h1 key='index'>
          <Link href='/'>
            Heidi Hölting
          </Link>
        </h1>
        <MobileNavigation 
          mobileNavActive={this.state.mobileNavActive}
          toggleMobileNav={() => this.setState({ mobileNavActive: !this.state.mobileNavActive })} 
        />
        <DesktopNavigation />
      </HeaderWrapper>
    );
  }
}

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: 50px;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Alegreya', serif;
  ${mediaMin.tabletLandscape`
    height: 100px;
  `}
  h1 {
    margin: 0 20px;
    cursor: pointer;
    font-weight: normal;
    font-size: 1.4rem;
    ${mediaMin.tabletLandscape`
      font-size: 2rem;
      margin: 0 40px;
    `}
  }
`;


