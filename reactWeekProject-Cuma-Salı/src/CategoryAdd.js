import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import alertify from 'alertifyjs'
import CategoryList from './CategoryList'
import CategoryForm from './CategoryForm'
export default class CategoryAdd extends Component {
  render() {
    var { categories } = this.props
    return (
      <>
        {console.log(this.props.categories)}
        <Row>
          <Col sm="3">
            <CategoryList categories={categories} />
          </Col>
          <Col sm="6">
            <CategoryForm
              postAttachment={this.props.postAttachment}
              categories={categories}
            />
          </Col>
          <Col sm="3"></Col>
        </Row>
      </>
    )
  }
}
