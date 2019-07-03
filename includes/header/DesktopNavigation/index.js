import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';

import pages from '../../../data/pages';
import { capitalizeFirstLetter } from '../../../helpers/strings';
import { mediaMax, mediaMin } from '../../../styles/mediaQueries';

const StyledNav = styled.nav`
  ${mediaMax.tabletLandscape`
    display: none;
  `}
  ul {
    padding: 0;
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding-right: 40px;
    li {
      font-size: 1.4rem;
      cursor: pointer;
      letter-spacing: 2px;
      color: ${props => props.textColor};
      transition: color 400ms ease;
      &:nth-child(1),
      &:nth-child(2) {
        margin-right: 1.4em;
      }
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
        transform: scaleX(1);
      }
      a.active:before {
        ${mediaMin.tabletLandscape`
          visibility: visible;
          transform: scaleX(1);
        `}
      }
    }
  }
`;

const DesktopNavigation = ({ textColor, router }) => {
  const route = router.pathname.replace('/', '');

  return (
    <StyledNav textColor={textColor}>
      <ul>
        {pages.map(page => (
          <li key={`page-${page}`}>
            <Link href={`/${page}`}>
              <a className={route === page ? 'active' : null}>{capitalizeFirstLetter(page)}</a>
            </Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default withRouter(DesktopNavigation);
