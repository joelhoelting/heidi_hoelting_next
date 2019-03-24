import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

const Header = () => (
  <HeaderWrapper>
    <h1 key='index'>
      <Link href='/'>
        Heidi Hölting
      </Link>
    </h1>
    <ul>
      <li key='gallery'>
        <Link href='/gallery'>
          <a>Gallery</a>
        </Link>
      </li>
      <li key='about'>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
      <li key='contact'>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </HeaderWrapper>
);

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Alegreya', serif;
  h1 {
    margin: 0 40px;
    cursor: pointer;
    font-weight: normal;
  }
  ul {
    padding: 0;
    display: flex;
    justify-content: center;
    list-style-type: none;
    li {
      margin: 0 40px;
      font-size: 24px;
      cursor: pointer;
      letter-spacing: 2px;
    }
  }
`;