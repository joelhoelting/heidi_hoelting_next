import styled from 'styled-components';
import Link from 'next/link';

import pages from '../../../data/pages';
import { capitalizeFirstLetter } from '../../../helpers/strings';
import { mediaMin } from '../../../styles/mediaQueries';

const MobileMenuWrapper = styled.div`
  background: #fff;
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
      font-family: 'Alegreya', serif;
      list-style-type: none;
      text-align: center;
      font-size: 2.4em;
      margin: 1em 0;
      opacity: ${props => (props.active ? 1 : 0)};
      text-transform: uppercase;
      &:nth-child(1) {
        ${props => props.active && 'transition: opacity 1000ms ease 200ms'};
      }
      &:nth-child(2) {
        ${props => props.active && 'transition: opacity 1000ms ease 300ms'};
      }
      &:nth-child(3) {
        ${props => props.active && 'transition: opacity 1000ms ease 400ms'};
      }
      a {
        text-decoration: none;
      }
    }
  }
  #instagram-link {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    opacity: ${props => (props.active ? 1 : 0)};
    ${props => props.active && 'transition: opacity 1000ms ease 500ms'};
    img {
      width: 40px;
      height: 40px;
    }
    ${mediaMin.tabletLandscape`
      display: none;
    `}
  }
`;

const MobileMenu = ({ active }) => (
  <MobileMenuWrapper active={active}>
    <ul>
      {pages.map(page => (
        <li key={`page-${page}`}>
          <Link href={`/${page}`}>
            <a>{capitalizeFirstLetter(page)}</a>
          </Link>
        </li>
      ))}
    </ul>
    <a id="instagram-link" href="https://www.instagram.com/heidi_c_nyc/" target="_blank" rel="noopener noreferrer">
      <img src="/static/images/logos/instagram_black.svg" alt="instagram_logo" />
    </a>
  </MobileMenuWrapper>
);

export default MobileMenu;
