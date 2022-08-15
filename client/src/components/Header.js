import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';

/**
 * Header
 *
 */
const Header = () => (
  <Navbar>
    <NavbarBrand href="/">Sensors Management</NavbarBrand>

    <NavbarText>Show Conntect: </NavbarText>
  </Navbar>
);

export default Header;
