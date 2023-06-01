import React, { Component } from 'react'
import { Table } from 'reactstrap'
export default class Orders extends Component {
  render() {
    const { cartProducts } = this.props
    const { user } = this.props

    return (
      <div>
        <h1>Merhaba {user.userName}, Verdiğiniz Siparişlerin Listesi:</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
