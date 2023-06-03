import React, { Component } from 'react'
import { Table, Button, Row, Col } from 'reactstrap'
export default class Cart extends Component {
  render() {
    const { cartProducts } = this.props

    return (
      <div>
        <Row>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Product Quantity</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((cartItem, index) => (
                <tr>
                  <th scope="row" key={cartItem.product.id}>
                    {index + 1}
                  </th>
                  <td>{cartItem.product.productName}</td>
                  <td>{cartItem.quantity}</td>
                  <td>
                    {' '}
                    <Button
                      color="danger"
                      style={{ marginRight: '10px', backgroundColor: 'red' }}
                      onClick={() => this.props.removeFromCart(cartItem)}
                    >
                      Ürün eksilt
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
        <hr />
        <Row>
          <Col sm="3"></Col>
          <Col sm="6">
            <Button
              color="success"
              //style={{ marginRight: '10px', backgroundColor: 'red' }}
              //onClick={() => this.props.removeFromCart(cartItem)}
            >
              Sepeti Onayla
            </Button>
          </Col>
          <Col sm="3"></Col>
        </Row>
      </div>
    )
  }
}
