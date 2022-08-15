import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';

import { Switch } from './Switch';

/**
 * Header
 *
 */
const Header = () => (
  <Navbar>
    <NavbarBrand href="/">Sensors Management</NavbarBrand>

    <NavbarText>
      <div style={{ display: 'flex', padding: '0 10px' }}>
        {' '}
        Show Conntect <Switch /> Show All
      </div>
    </NavbarText>
  </Navbar>
);

export default Header;
