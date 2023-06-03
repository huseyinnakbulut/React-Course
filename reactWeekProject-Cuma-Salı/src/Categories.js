import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class Categories extends Component {
  render() {
    const { categories } = this.props
    return (
      <>
        <h1>Categories</h1>
        <hr />
        <ListGroup>
          {categories.map((category) => (
            <ListGroupItem
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </>
    )
  }
}
