import React, { Component } from 'react'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../../redux/actions/productActions'
import * as categoryActions from '../../redux/actions/categoryActions'
class Categories extends Component {
  componentDidMount() {
    this.props.actions.getCategories()
  }
  seceltCategory = (category) => {
    this.props.actions.changeCategory(category)
    this.props.actions.getProducts(category.id)
  }
  render() {
    return (
      <div>
        <h2>
          <Badge color="warning">Categories</Badge>
        </h2>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={
                category.categoryName ===
                this.props.currentCategory.categoryName
                  ? true
                  : false
              }
              onClick={() => this.seceltCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoriesReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
