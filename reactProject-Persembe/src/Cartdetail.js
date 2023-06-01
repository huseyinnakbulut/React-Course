import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
export default class Cartdetail extends Component {
  render() {
    const { cartProducts } = this.props

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product Quantity</th>
              <th>Product Quantity</th>
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
                <td>{cartItem.quantity}</td>

                <Button
                  color="danger"
                  onClick={() => this.props.removeFromCart(cartItem)}
                >
                  Ürün eksilt
                </Button>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
