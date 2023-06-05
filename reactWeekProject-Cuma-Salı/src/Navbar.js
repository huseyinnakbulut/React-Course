import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
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
    const { cartItems } = this.props
    const { user } = this.props
    let logLink=null;
    if (user.id != 0) {
      logLink = (
        <NavItem>
          <NavLink>
            <Button onClick={this.props.Logout}>Çıkış Yap</Button>
          </NavLink>
        </NavItem>
      );
    } else {
      logLink = (
        <NavItem>
          <NavLink>
            <Link to="/LoginRegister">Giriş Yap</Link>
          </NavLink>
        </NavItem>
      );
    }
    return (
      <div>
        <Navbar className="my-2" color="dark" dark expand="md">
          <NavbarBrand>
            <b style={{ padding: 7 }}>Hoşgeldiniz {user.userName}</b>
          </NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/Homepage">Anasayfa</Link>
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink>
                <Link to="/LoginRegister">Giriş Yap</Link>
              </NavLink>
            </NavItem> */}
            {logLink}
            <NavItem>
              <NavLink>
                <Link to="/Cart">Sepet</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/Orders">Orders</Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar right>
              <DropdownToggle nav caret>
                Sepet -<b>{cartItems.length}</b>
              </DropdownToggle>
              <DropdownMenu right>
                {cartItems.map((cartItem) => (
                  <DropdownItem key={cartItem.product.id}>
                    {cartItem.product.productName}
                    <Badge color="success">{cartItem.quantity}</Badge>
                    <span
                      color="danger"
                      className="badge badge-danger"
                      onClick={() => this.props.removeFromCart(cartItem)}
                      style={{ marginRight: '10px', backgroundColor: 'red' }}
                    >
                      Azalt
                    </span>
                  </DropdownItem>
                ))}
                <DropdownItem divider />
                <DropdownItem>
                  {
                    <Button color="success">
                      <Link to="/Cart" style={{ color: 'white' }}>
                        Go To Cart
                      </Link>
                    </Button>
                  }
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink>
                <Link to="/CategoryAdd">Category Add</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/ProductAdd">Product Add</Link>
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <Button color="light" outline>
                Sepet <Badge color="danger">3</Badge>
              </Button>
            </NavItem> */}
          </Nav>
        </Navbar>
      </div>
    )
  }
}
