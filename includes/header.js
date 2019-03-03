import React from 'react';
import Link from 'next/link';

const Header = () => {
  const HeaderInline = {
    main: {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'baskerville',
      fontWeight: 'bold',
      heading: {
        margin: '0 40px',
        cursor: 'pointer'
      },
      list: {
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        listStyleType: 'none',
        listItem: {
          margin: '0 40px',
          fontSize: '20px',
          cursor: 'pointer',
        }
      }
    }
  };
  
  const { main } = HeaderInline;
  const { listItem } = main.list;

  return (
    <header style={main}>
      <Link href='/'>
        <h1 key='index' style={main.heading}>Heidi Hölting</h1>
      </Link>
      <ul style={main.list}>
        <Link href='/gallery'>
          <li key='gallery' style={listItem}>Gallery</li>
        </Link>
        <Link href='/about'>
          <li key='about' style={listItem}>About</li>
        </Link>
        <Link href='/contact'>
          <li key='contact' style={listItem}>Contact</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;