import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';

const MobileNavigation = ({ mobileNavActive, toggleMobileNav }) => {
  return (
    <React.Fragment>
      <Hamburger toggleMobileNav={toggleMobileNav} active={mobileNavActive} />
      <MobileMenu toggleMobileNav={toggleMobileNav} active={mobileNavActive} />
    </React.Fragment>
  );
};

export default MobileNavigation;
