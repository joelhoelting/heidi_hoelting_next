import Hamburger from './Hamburger';

const MobileNavigation = ({ mobileNavActive, toggleMobileNav }) => {
  return (
    <React.Fragment>
      <Hamburger toggleMobileNav={toggleMobileNav} mobileNavActive={mobileNavActive} />
      {/* <MobileMenu /> */}
    </React.Fragment>
  );
};

export default MobileNavigation;
