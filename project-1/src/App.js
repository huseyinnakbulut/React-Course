import React from 'react'
import Navbar from './Navbar'
import Categories from './Categories'
import Products from './Products'
import { Col, Container, Row } from 'reactstrap'

function App() {
  state = {
    products: [],
    currentCategory: '',
  }
  getProducts = () => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => ({ products: data }))
  }
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col sm="3">
            <Categories />
          </Col>
          <Col sm="9">
            <Products />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
