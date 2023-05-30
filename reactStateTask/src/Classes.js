import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class Classes extends Component {
  state = {
    classes: [],
  }

  getClasses = () => {
    fetch('http://localhost:3000/classes')
      .then((response) => response.json())
      .then((data) => this.setState({ classes: data }))
  }

  componentDidMount() {
    this.getClasses()
  }

  render() {
    return (
      <>
        <ListGroup>
          {this.state.classes.map((sinif) => (
            <ListGroupItem
              onClick={() => this.props.changeClass(sinif)}
              key={sinif.id}
            >
              {sinif.className}
            </ListGroupItem>
          ))}
        </ListGroup>
      </>
    )
  }
}
