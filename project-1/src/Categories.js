import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class Categories extends Component {
  state = {
    categories: [],
  }

  getCategories = () => {
    fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }))
  }

  componentDidMount() {
    this.getCategories()
  }

  render() {
    return (
      <>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem key={category.id}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </>
    )
  }
}
