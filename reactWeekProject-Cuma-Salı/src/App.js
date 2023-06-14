import React, { Component } from 'react'
import { Row, Container } from 'reactstrap'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import alertify from 'alertifyjs'
import Notfound from './Notfound'
import Homepage from './Homepage'
import CategoryAdd from './CategoryAdd'
import ProductAdd from './ProductAdd'
import Cart from './Cart'
import LoginRegister from './LoginRegister'
import Login from './Login'
import Register from './Register'
import Orders from './Orders'

export default class App extends Component {
  state = {
    products: [],
    categories: [],
    cartItems: [],
    currentUser: {
      id: 0,
      userMail: '',
      userPassword: '',
      userName: '',
      userRole: '',
      userImage: '',
    },
    orders: [],
    orderid: 1,
  }
  Logout = () => {
    var tempUser = {
      id: 0,
      userMail: '',
      userPassword: '',
      userName: '',
      userRole: '',
      userImage: '',
    }
    this.setState({ currentUser: tempUser })
  }
  ClearCartItems = () => {
    this.setState({ cartItems: [] })
  }
  addToOrders = (products, user) => {
    if (user.id != 0) {
      let newOrders = this.state.orders
      newOrders.push({
        products: products,
        user: user,
        orderId: this.state.orderid,
      })
      this.setState({ orders: newOrders })
      this.setState({ orderid: this.state.orderid + 1 })
      alertify.success('Sipariş Oluşturulmuştur', 2)
    } else {
      alertify.error('Sipariş Oluşturmak için lütfen üye girişi yapınız')
    }
  }
  changeUser = (user) => {
    this.setState({ currentUser: user })
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  }
  componentDidMount() {
    this.getCategories()
    this.getProducts()
  }
  getCategories = () => {
    fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }))
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

  addToCart = (product) => {
    let newCart = this.state.cartItems
    var addedItem = newCart.find((c) => c.product.id == product.id)
    if (addedItem) {
      addedItem.quantity += 1
    } else {
      newCart.push({ product: product, quantity: 1 })
    }
    this.setState({ cartItems: newCart })
    alertify.success(product.productName + ' added to cart', 2)
    console.log(this.state.orders)
  }
  removeFromCart = (product) => {
    product.quantity -= 1
    if (product.quantity <= 0) {
      console.log('deneme')
      let newCart = this.state.cartItems.filter(
        (c) => c.product.id !== product.product.id
      )
      this.setState({ cartItems: newCart })
    } else {
      let newCart = this.state.cartItems
      this.setState({ cartItems: newCart })
    }
    alertify.error(product.product.productName + ' removed from cart', 2)
  }
  AddToJson = (ctId, ctName) => {
    let data = { id: ctId, categoryName: ctName }

    return fetch('http://localhost:3000/categories', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }
  postAttachment = (ctId, ctName) => {
    this.AddToJson(ctId, ctName)
    this.getCategories()
    this.render()
  }
  render() {
    return (
      <>
        <Navbar
          cartItems={this.state.cartItems}
          removeFromCart={this.removeFromCart}
          user={this.state.currentUser}
          Logout={this.Logout}
        />
        <Container>
          <Row>
            <Routes>
              <Route
                path="/Homepage"
                element={
                  <Homepage
                    products={this.state.products}
                    categories={this.state.categories}
                    currentCategory={this.state.currentCategory}
                    getProducts={this.getProducts}
                    addToCart={this.addToCart}
                  />
                }
              />

              <Route
                path="/CategoryAdd"
                element={
                  <CategoryAdd
                    categories={this.state.categories}
                    postAttachment={this.postAttachment}
                  />
                }
              />
              <Route path="/ProductAdd" element={<ProductAdd />} />
              <Route path="/LoginRegister" element={<LoginRegister />} />
              <Route
                path="/Login"
                element={<Login changeUser={this.changeUser} />}
              />
              <Route path="/Register" element={<Register />} />
              <Route
                path="/Orders"
                element={
                  <Orders
                    orders={this.state.orders}
                    user={this.state.currentUser}
                  />
                }
              />
              <Route
                path="/Cart"
                element={
                  <Cart
                    cartProducts={this.state.cartItems}
                    removeFromCart={this.removeFromCart}
                    addToOrders={this.addToOrders}
                    user={this.state.currentUser}
                    ClearCartItems={this.ClearCartItems}
                  />
                }
              />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </Row>
        </Container>
      </>
    )
  }
}
