import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import alertify from 'alertifyjs'

export default class CategoryAdd extends Component {
  render() {
    var { categories } = this.props
    const checkCategory = (event) => {
      event.preventDefault()
      let ctId = getLastId()
      const ctName = event.target.elements.inputCategory.value

      let categoryExist = categories.filter((x) => x.categoryName === ctName)
      console.log(categoryExist)
      if (categoryExist.length > 0) {
        alertify.error('HATA', 2)
      } else {
        //this.props.changeUser(loginUser[0])
        this.props.postAttachment(ctId, ctName)
        alertify.success(' Kategori Eklendi', 2)
      }
      document.getElementById('form').reset()
    }
    const getLastId = () => {
      let number = 0
      categories.map((category) => {
        if (category.id > number) {
          number = category.id
        }
      })
      number++
      return number
    }
    return (
      <>
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
      </>
    )
  }
}
