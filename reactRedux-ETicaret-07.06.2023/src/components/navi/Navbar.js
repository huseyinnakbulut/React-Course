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
  Button,
  Badge,
} from 'reactstrap'
import { Link } from 'react-router-dom'

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="my-2" color="dark" dark expand="md">
          <NavbarBrand>
            <Link to="/">
              <b style={{ padding: 7 }}>Hoşgeldiniz </b>
            </Link>
          </NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/Homepage">React-Redux</Link>
              </NavLink>
            </NavItem>
            <NavItem style={{ marginRight: 3 }}>
              <NavLink>
                <Link to="/Detail">Cart Detail</Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sepet -<b>3</b>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Elma
                  <Badge color="success">3</Badge>
                  <span
                    color="danger"
                    className="badge badge-danger"
                    style={{ marginRight: '10px', backgroundColor: 'red' }}
                  >
                    Azalt
                  </span>
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem>
                  <Button color="success">
                    <Link to="/Cart" style={{ color: 'white' }}>
                      Go To Cart
                    </Link>
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
