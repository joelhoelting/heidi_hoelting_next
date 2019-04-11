import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

import styled from 'styled-components';

import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

import { mediaMin } from '../../styles/mediaQueries';
import routerColors from '../../data/routeColors';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNavActive: false
    };
  }

  render() {
    const { mobileNavActive } = this.state;
    const { router } = this.props;
    const route = router.pathname.replace('/', '').toLowerCase() || 'home';
    const textColor = routerColors[route].color;

    return (
      <HeaderWrapper mobileNavActive={mobileNavActive} textColor={textColor}>
        <Link href="/">
          <a className="main-logo">Heidi Hölting</a>
        </Link>
        <MobileNavigation
          textColor={textColor}
          mobileNavActive={mobileNavActive}
          toggleMobileNav={() => this.setState({ mobileNavActive: !mobileNavActive })}
        />
        <DesktopNavigation textColor={textColor} />
      </HeaderWrapper>
    );
  }
}

export default withRouter(Header);

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
  .main-logo {
    margin: 0 20px;
    cursor: pointer;
    font-weight: normal;
    font-size: 1.8rem;
    color: ${props => (props.mobileNavActive ? 'black' : props.textColor)};
    transition: color 300ms ease;
    z-index: 999;

    ${mediaMin.tabletLandscape`
      font-size: 2rem;
      margin: 0 40px;
    `}
  }
`;
