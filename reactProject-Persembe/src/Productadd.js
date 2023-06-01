import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import alertify from 'alertifyjs'

export default class Productadd extends Component {
  state = {
    products: [],
  }
  getProducts = (categoryId) => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
  }
  componentDidMount() {
    this.getProducts()
  }

  getLastId = () => {
    let number = 0
    this.state.products.map((product) => {
      if (product.id > number) {
        number = product.id
      }
    })
    number++
    return number
  }
  postAttachment = (pdId, pdCtg, pdName, pdImage, pdDesc) => {
    // let formData = new FormData()
    // formData.append('id', ctId)
    // formData.append('categoryName', ctName)
    var data = {
      id: pdId,
      categoryId: pdCtg,
      productName: pdName,
      image: pdImage,
      desc: pdDesc,
    }
    console.log(data)
    return fetch('http://localhost:3000/products', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  render() {
    const checkProduct = (event) => {
      event.preventDefault()
      let pdName = event.target.elements.inputproductName.value
      let pdImage = event.target.elements.inputproductImage.value
      let pdDesc = event.target.elements.inputproductDesc.value
      let pdCtg = event.target.elements.inputproductCategory.value
      let productExist = this.state.products.filter(
        (x) => x.productName === pdName
      )
      if (productExist.length > 0) {
        alertify.error('Bu Ürün Zaten Bulunmakta', 2)
      } else {
        let pdId = this.getLastId()

        //this.props.changeUser(loginUser[0])
        this.postAttachment(pdId, pdCtg, pdName, pdImage, pdDesc)

        alertify.success(' Ürün Eklendi', 2)
      }
      document.getElementById('form').reset()
    }
    return (
      <>
        <Row>
          <Col sm="3"></Col>
          <Col sm="6">
            <Form id="form" onSubmit={checkProduct}>
              <FormGroup>
                <Label for="productCategory">Category Id</Label>
                <Input
                  type="text"
                  name="productCategory"
                  id="inputproductCategory"
                  placeholder="Category Id"
                />
              </FormGroup>
              <FormGroup>
                <Label for="productName">Product Name</Label>
                <Input
                  type="text"
                  name="productName"
                  id="inputproductName"
                  placeholder="Product Name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="productImage">Product Image</Label>
                <Input
                  type="text"
                  name="productImage"
                  id="inputproductImage"
                  placeholder="Product Image"
                />
              </FormGroup>
              <FormGroup>
                <Label for="productDesc">Product Desc</Label>
                <Input
                  type="text"
                  name="productDesc"
                  id="inputproductDesc"
                  placeholder="Product Desc"
                />
              </FormGroup>
              <Button
              //   onClick={() => checkUser(inputEmail, inputPassword)}
              >
                Submit
              </Button>
            </Form>
          </Col>
          <Col sm="3"></Col>
        </Row>
      </>
    )
  }
}
