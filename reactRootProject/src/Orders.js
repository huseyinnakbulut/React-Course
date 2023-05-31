import React, { Component } from 'react'
import { Table } from 'reactstrap'
export default class Orders extends Component {
  render() {
    const { cartProducts } = this.props.cartProducts
    const { user } = this.props.user

    return (
      <div>
        <h1>Merhaba {user}, Verdiğiniz Siparişlerin Listesi:</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cartProducts.map((cartItem, index) => (
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
