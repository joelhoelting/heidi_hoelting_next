import Link from 'next/link';
import styled from 'styled-components';

import { pages } from '../../../data/pages';
import { capitalizeFirstLetter } from '../../../helpers/strings';
import { mediaMax } from '../../../styles/mediaQueries';

const DesktopNavigation = () => {
  return (
    <StyledUl>
      {pages.map(page => (
        <li key={`page-${page}`}>
          <Link href={`/${page}`}>
            <a>{capitalizeFirstLetter(page)}</a>
          </Link>
        </li>
      ))}
    </StyledUl>
  );
};

export default DesktopNavigation;

const StyledUl = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  list-style-type: none;
  ${mediaMax.tabletLandscape`
    display: none;
  `}
  li {
    margin: 0 40px;
    font-size: 1.4rem;
    cursor: pointer;
    letter-spacing: 2px;
  }
`;
