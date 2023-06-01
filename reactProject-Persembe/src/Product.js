import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardText,
  Button,
  CardTitle,
  CardImg,
  Col,
  CardGroup,
} from 'reactstrap'

export default class Product extends Component {
  state = {
    currentProduct: '',
  }
  changeCurrentProduct = (product) => {
    this.setState({ currentProduct: product.productName })
    // var b = document.getElementById('deneme')
    // b.innerHTML = this.state.currentProduct
  }

  render() {
    const { products } = this.props
    return (
      <div>
        <h1>{this.props.currentCategory}</h1>
        <h2>
          Current Product: <b id="deneme">{this.state.currentProduct}</b>
        </h2>
        <CardGroup>
          {products.map((product) => (
            <Col xs="3">
              <Card
                // onClick={() => this.changeCurrentProduct(product)}
                key={product.id}
                color="light"
                style={{
                  marginLeft: '10px',
                  marginRight: '10px',
                }}
              >
                <CardImg
                  top
                  width="100%"
                  src={product.image}
                  alt={product.productName}
                />
                <CardBody>
                  <CardTitle>{product.productName}</CardTitle>
                  <CardText>{product.desc}</CardText>
                  <Button
                    //onClick={() => this.AddToCart(product)}
                    onClick={() => this.props.addToCart(product)}
                    color="success"
                  >
                    Buy
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </div>
    )
  }
}
