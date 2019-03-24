import styled from 'styled-components';
import { mediaMin } from '~/styles/mediaQueries';

import Hamburger from './Hamburger';

const MobileNavigation = props => {
  return (
    <React.Fragment>
      <Hamburger 
        toggleMobileNav={props.toggleMobileNav} 
        mobileNavActive={props.mobileNavActive}
      />
      {/* <MobileMenu /> */}
    </React.Fragment>
  );
};

export default MobileNavigation;