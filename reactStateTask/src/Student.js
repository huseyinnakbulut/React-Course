import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardText,
  Button,
  CardTitle,
  CardImg,
  Col,
  CardGroup,
} from 'reactstrap'

export default class Student extends Component {
  render() {
    const { students } = this.props
    return (
      <div>
        <h1>Sınıf: {this.props.currentClass}</h1>
        <CardGroup>
          {students.map((student) => (
            <Col xs="4">
              <Card
                key={student.id}
                color="light"
                style={{
                  marginLeft: '10px',
                  marginRight: '10px',
                  marginTop: '10px',
                }}
              >
                <CardImg
                  top
                  height="300px"
                  width="100%"
                  src={student.image}
                  alt={student.studentName}
                />
                <CardBody>
                  <CardTitle>{student.studentName}</CardTitle>
                  {/* <CardText>{student.desc}</CardText> */}
                  <Button color="success">Details</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </div>
    )
  }
}
