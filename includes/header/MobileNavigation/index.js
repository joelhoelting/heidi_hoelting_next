import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';

const MobileNavigation = ({ mobileNavActive, toggleMobileNav, textColor }) => {
  return (
    <React.Fragment>
      <Hamburger textColor={textColor} toggleMobileNav={toggleMobileNav} active={mobileNavActive} />
      <MobileMenu toggleMobileNav={toggleMobileNav} active={mobileNavActive} />
    </React.Fragment>
  );
};

export default MobileNavigation;
