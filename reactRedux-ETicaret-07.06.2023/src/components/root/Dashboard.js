import Categories from '../categories/Categories'
import Products from '../products/Products'
import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

export default class Dashboard extends Component {
  render() {
    return (
      <Row>
        <Col sm="4">
          <Categories />
        </Col>
        <Col sm="8">
          <Products />
        </Col>
      </Row>
    )
  }
}
