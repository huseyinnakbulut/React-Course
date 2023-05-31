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
export default class Example extends React.Component {
  render() {
    const { products } = this.props
    //const { productsCount } = this.props.length
    // getproducts = (products) => {
    //   products.map((product) => console.log(product))
    // }

    return (
      <div>
        {console.log(products)}

        <Navbar className="my-2" color="dark" dark expand="md">
          <NavbarBrand>
            <b style={{ padding: 7 }}>Hoşgeldiniz</b>
          </NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Giriş Yap</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                İletişim
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar right>
              <DropdownToggle nav caret>
                Sepet - <b>{products.length}</b>
              </DropdownToggle>
              <DropdownMenu right>
                {products.map((product) => (
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
                    <Button
                      color="danger"
                      //onClick={() => this.props.removeFromCart(product)}
                    >
                      Confirm Purchese
                    </Button>
                  }
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
