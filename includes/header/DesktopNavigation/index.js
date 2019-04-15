import Link from 'next/link';
import styled from 'styled-components';

import pages from '../../../data/pages';
import { capitalizeFirstLetter } from '../../../helpers/strings';
import { mediaMax } from '../../../styles/mediaQueries';

const DesktopNavigation = ({ textColor }) => {
  return (
    <StyledNav textColor={textColor}>
      <ul>
        {pages.map(page => (
          <li key={`page-${page}`}>
            <Link href={`/${page}`}>
              <a>{capitalizeFirstLetter(page)}</a>
            </Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default DesktopNavigation;

const StyledNav = styled.nav`
  ${mediaMax.tabletLandscape`
    display: none;
  `}
  ul {
    padding: 0;
    display: flex;
    justify-content: center;
    list-style-type: none;
    li {
      margin: 0 1.4em;
      font-size: 1.4rem;
      cursor: pointer;
      letter-spacing: 2px;
      color: ${props => props.textColor};
      transition: color 300ms ease 200ms;
      a {
        position: relative;
        text-decoration: none;
      }
      a:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: -10px;
        left: 0;
        background-color: ${props => props.textColor};
        visibility: hidden;
        transform: scaleX(0);
        transform-origin: right;
        transition: all 0.3s ease-in-out 0s;
      }
      a:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
  }
`;
