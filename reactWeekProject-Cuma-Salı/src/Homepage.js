import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Categories from './Categories'
import Products from './Products'
export default class Homepage extends Component {
  state = {
    currentCategory: '',
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.props.getProducts(category.id)
  }
  render() {
    const { products } = this.props
    const { categories } = this.props
    return (
      <div>
        <Container>
          <Row>
            <Col sm="4">
              <Categories
                changeCategory={this.changeCategory}
                categories={categories}
                currentCategory={this.state.currentCategory}
              />
            </Col>
            <Col sm="8">
              <Products
                products={products}
                currentCategory={this.state.currentCategory}
                addToCart={this.props.addToCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
