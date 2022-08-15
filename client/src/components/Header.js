import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';

import { Switch } from './Switch';

/**
 * Header
 *
 */
const Header = () => (
  <Navbar>
    <NavbarBrand href="/">Sensors Management</NavbarBrand>

    <NavbarText style={{ display: 'flex', padding: '0 10px' }}>
      Show Conntect <Switch /> Show All
    </NavbarText>
  </Navbar>
);

export default Header;
