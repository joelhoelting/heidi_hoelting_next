import Link from 'next/link';
import styled from 'styled-components';

import { mediaMax } from '../../../styles/mediaQueries';

const DesktopNavigation = () => {
  return (
    <StyledUl>
      <li key="gallery">
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
      </li>
      <li key="about">
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li key="contact">
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
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
