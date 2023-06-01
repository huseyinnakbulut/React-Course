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
    const { products } = this.props.products
    const { user } = this.props.user
    //const { productsCount } = this.props.length
    // getproducts = (products) => {
    //   products.map((product) => console.log(product))
    // }

    return (
      <div>
        <Navbar className="my-2" color="dark" dark expand="md">
          <NavbarBrand>
            <b style={{ padding: 7 }}>Hoşgeldiniz</b>
          </NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/Login">Giriş Yap</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/Products">Ürünler</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/Cartdetail">Cart</Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar right>
              <DropdownToggle nav caret>
                {this.props.user.userName} Sepet -{' '}
                <b>{this.props.products.length}</b>
              </DropdownToggle>
              <DropdownMenu right>
                {this.props.products.map((product) => (
                  <DropdownItem key={product.product.id}>
                    {product.product.productName}
                    <Badge color="success">{product.quantity}</Badge>
                    <Button
                      color="danger"
                      onClick={() => this.props.removeFromCart(product)}
                    >
                      Çıkar
                    </Button>
                  </DropdownItem>
                ))}
                <DropdownItem divider />
                <DropdownItem>
                  {
                    <Button color="danger">
                      <Link to="/Orders">Confirm Purchese</Link>
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
