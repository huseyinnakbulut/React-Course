import React, { Component } from 'react'
import Navbar from './Navbar'
import Classes from './Classes'
import Student from './Student'
import { Col, Container, Row } from 'reactstrap'

export default class App extends Component {
  state = {
    students: [],
    currentClass: 'Seçilmedi',
  }
  getStudents = (classId) => {
    var url = 'http://localhost:3000/students'
    if (classId != null) {
      url += '?classId=' + classId
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ students: data }))
  }

  changeClass = (sinif) => {
    this.setState({ currentClass: sinif.className })
    this.getStudents(sinif.id)
  }

  componentDidMount() {
    this.getStudents()
  }
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <Col sm="3">
              <Classes
                changeClass={this.changeClass}
                currentClass={this.state.currentClass}
              />
            </Col>
            <Col sm="9">
              <Student
                students={this.state.students}
                currentClass={this.state.currentClass}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
