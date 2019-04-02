import styled from 'styled-components';
import Link from 'next/link';

import { pages } from '../../../data/pages';
import { capitalizeFirstLetter } from '../../../helpers/strings';
import { mediaMin } from '../../../styles/mediaQueries';

const MobileMenu = ({ active, toggleMobileNav }) => (
  <MobileMenuWrapper active={active}>
    <ul>
      {pages.map(page => (
        <li key={`page-${page}`}>
          <Link href={`/${page}`}>
            <a onClick={toggleMobileNav} role="link" tabIndex={0}>
              {capitalizeFirstLetter(page)}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </MobileMenuWrapper>
);

export default MobileMenu;

const MobileMenuWrapper = styled.div`
  background: grey;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  opacity: ${props => (props.active ? 1 : 0)};
  transform: ${props => (props.active ? 'translateX(0)' : 'translateX(100%)')};
  transition: all 200ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mediaMin.tabletLandscape`
    display: none;
  `}
  ul {
    padding-left: 0;
    li {
      list-style-type: none;
      text-align: center;
      font-size: 1.8em;
      margin: 1em 0;
      opacity: ${props => (props.active ? 1 : 0)};
      transform: ${props => (props.active ? 0 : 'translateY(-10px)')};
      &:nth-child(1) {
        ${props => props.active && 'transition: transform 300ms ease-in-out 100ms, opacity 1000ms ease 100ms'};
      }
      &:nth-child(2) {
        ${props => props.active && 'transition: transform 300ms ease-in-out 100ms, opacity 1000ms ease 200ms'};
      }
      &:nth-child(3) {
        ${props => props.active && 'transition: transform 300ms ease-in-out 100ms, opacity 1000ms ease 300ms'};
      }
    }
  }
`;
