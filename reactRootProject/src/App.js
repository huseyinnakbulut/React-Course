import React, { Component } from 'react'
import Categories from './Categories'
import Product from './Product'
import Navbar from './Navbar'
import Login from './Login'
import { Row, Col, Container } from 'reactstrap'

export default class App extends Component {
  state = {
    currentCategory: '',
    products: [],
    //cartCount: 0,
    cartProducts: [],
    login: false,
    currentUser: {
      id: 0,
      userMail: '',
      userPassword: '',
      userName: '',
    },
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  }
  changeUser = (user) => {
    this.setState({ currentUser: user })
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
  // addToCart = (product) => {
  //   if (this.state.cartProducts.find((c) => c.product.id == product.id)) {
  //     product.quantity += 1
  //   } else {
  //     product.quantity = 1
  //     this.state.cartProducts.push(product)
  //   }
  // }

  addToCart = (product) => {
    let newCart = this.state.cartProducts
    var addedItem = newCart.find((c) => c.product.id == product.id)
    if (addedItem) {
      addedItem.quantity += 1
    } else {
      newCart.push({ product: product, quantity: 1 })
    }
    this.setState({ cartProducts: newCart })
  }
  removeFromCart = (product) => {
    product.quantity -= 1
    if (product.quantity <= 0) {
      console.log('deneme')
      let newCart = this.state.cartProducts.filter(
        (c) => c.product.id !== product.product.id
      )
      this.setState({ cartProducts: newCart })
    } else {
      let newCart = this.state.cartProducts
      this.setState({ cartProducts: newCart })
    }
  }
  render() {
    return (
      <>
        <Navbar
          products={this.state.cartProducts}
          removeFromCart={this.removeFromCart}
        />
        <Container>
          <Row>
            <Col sm="4">
              <Categories
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}
                currentCartProducts={this.state.cartProducts}
              />
            </Col>
            <Col sm="8">
              <Product
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                addToCart={this.addToCart}
              />
            </Col>
          </Row>
        </Container>
        <Login changeUser={this.changeUser} />
      </>
    )
  }
}
