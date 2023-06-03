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
  render() {
    const { products } = this.props
    return (
      <div>
        <h1>
          <b>Current Category: </b>
          {this.props.currentCategory}
        </h1>
        <CardGroup>
          {products.map((product) => (
            <Col xs="3">
              <Card
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
