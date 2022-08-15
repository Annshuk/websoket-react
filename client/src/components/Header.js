import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

/**
 * Header
 *
 */
const Header = () => (
  <Navbar>
    <NavbarBrand href="/">Sensors Management</NavbarBrand>
    <NavbarToggler />
    <Collapse navbar>
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink href="/components/">Components</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
      <NavbarText>Simple Text</NavbarText>
    </Collapse>
  </Navbar>
);

export default Header;
