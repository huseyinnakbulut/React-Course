import React, { Component } from 'react'
import Categories from './Categories'
import Product from './Product'
import Navbar from './Navbar'
import { Row, Col, Container } from 'reactstrap'

export default class App extends Component {
  state = {
    currentCategory: '',
    products: [],
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  }
  getProducts = (categoryId) => {
    let url = 'http://localhost:3000/products'
    if (categoryId != null) {
      url += '?categoryId=' + categoryId
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
  }

  componentDidMount() {
    this.getProducts()
  }

  render() {
    return (
      <>
        <Navbar />
        <Container>
          <Row>
            <Col sm="4">
              <Categories
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}
              />
            </Col>
            <Col sm="8">
              <Product
                products={this.state.products}
                currentCategory={this.state.currentCategory}
              />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
