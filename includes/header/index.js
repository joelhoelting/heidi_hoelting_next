import React from 'react';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';

import styled from 'styled-components';

import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

import { mediaMin } from '../../styles/mediaQueries';
import routerColors from '../../data/routeColors';

const HeaderWrapper = styled.header`
  ${props => (props.route === 'gallery' ? 'background: white' : null)};
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
    position: relative;
    text-decoration: none;
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: -8px;
      left: 0;
      background-color: ${props => props.textColor};
      visibility: hidden;
      transform: scaleX(0);
      transform-origin: right;
      transition: all 0.3s ease-in-out 0s;
    }
    &:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    ${mediaMin.tabletLandscape`
      font-size: 2rem;
      margin: 0 40px;
    `}
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNavActive: false
    };
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', () => {
      const { mobileNavActive } = this.state;
      if (mobileNavActive) {
        this.timerCloseMobileMenu = setTimeout(() => {
          this.setState({ mobileNavActive: false });
        }, 200);
      }
    });
  }

  componentWillUnmount() {
    if (this.timerCloseMobileMenu) {
      clearTimeout(this.timerCloseMobileMenu);
    }
  }

  render() {
    const { mobileNavActive } = this.state;
    const { router } = this.props;
    const route = router.pathname.replace('/', '').toLowerCase() || 'home';
    const textColor = routerColors[route] ? routerColors[route].color : undefined;

    return (
      <HeaderWrapper mobileNavActive={mobileNavActive} textColor={textColor} route={route}>
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
