import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';

import { Switch } from './Switch';

import { useSensorContext } from 'Pages/SensorProvider';

/**
 * Header
 *
 */
const Header = () => {
  const { handleClick, value } = useSensorContext();

  return (
    <Navbar>
      <NavbarBrand href="/">Sensors Management</NavbarBrand>

      <NavbarText style={{ display: 'flex', padding: '0 10px' }}>
        Show All <Switch onClick={handleClick} value={value} /> Show Conntect
      </NavbarText>
    </Navbar>
  );
};

export default Header;
