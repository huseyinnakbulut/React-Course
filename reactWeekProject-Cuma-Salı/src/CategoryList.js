import React, { Component } from 'react'

export default class CategoryAdd extends Component {
  render() {
    var { categories } = this.props
    return (
      <>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li>{category.categoryName}</li>
          ))}
        </ul>
      </>
    )
  }
}
