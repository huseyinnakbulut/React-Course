import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  Button,
} from 'reactstrap'
function CustomNavbar({ languages, notices }) {
  const noticesCount = notices.length
  return (
    <div>
      <Navbar className="my-2" color="dark" dark expand="md">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="/Images/logo.png"
            style={{
              height: 40,
              width: 40,
            }}
          />
          <b style={{ padding: 7 }}>Hoşgeldiniz</b>
        </NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Hakkımızda</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              İletişim
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Dil
            </DropdownToggle>
            <DropdownMenu right>
              {languages.map((language, index) => (
                <DropdownItem key={index}>{language}</DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <Button color="light" outline>
              Duyurular <Badge color="danger">{noticesCount}</Badge>
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}
export default CustomNavbar
