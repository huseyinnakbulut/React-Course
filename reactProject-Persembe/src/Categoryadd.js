import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import alertify from 'alertifyjs'

export default class Categoryadd extends Component {
  state = {
    categories: [],
  }
  componentDidMount() {
    this.getCategories()
  }
  getCategories = () => {
    fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }))
  }

  getLastId = () => {
    let number = 0
    this.state.categories.map((category) => {
      if (category.id > number) {
        number = category.id
      }
    })
    number++
    return number
  }
  postAttachment = (ctId, ctName) => {
    // let formData = new FormData()
    // formData.append('id', ctId)
    // formData.append('categoryName', ctName)
    let data = { id: ctId, categoryName: ctName }

    return fetch('http://localhost:3000/categories', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }
  render() {
    const checkCategory = (event) => {
      event.preventDefault()
      let ctId = this.getLastId()
      const ctName = event.target.elements.inputCategory.value

      let categoryExist = this.state.categories.filter(
        (x) => x.categoryName === ctName
      )
      console.log(categoryExist)
      if (categoryExist.length > 0) {
        alertify.error('HATA', 2)
      } else {
        //this.props.changeUser(loginUser[0])
        this.postAttachment(ctId, ctName)
        alertify.success(' Kategori Eklendi', 2)
      }
      document.getElementById('form').reset()
    }

    return (
      <>
        <Row>
          <Col sm="3"></Col>
          <Col sm="6">
            <Form id="form" onSubmit={checkCategory}>
              <FormGroup>
                <Label for="category">Category Name</Label>
                <Input
                  type="text"
                  name="category"
                  id="inputCategory"
                  placeholder="Category Name"
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
          <Col sm="3"></Col>
        </Row>
      </>
    )
  }
}
