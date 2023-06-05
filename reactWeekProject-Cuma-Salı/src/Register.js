import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import alertify from 'alertifyjs'

export default class Login extends Component {
  state = {
    users: [],
    imageUrl: '',
  }
  GetImage = (event) => {
    const tempFile = event.target.files[0]
    this.setState({ imageUrl: URL.createObjectURL(tempFile) })
  }
  getUsers = () => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
  }
  componentDidMount() {
    this.getUsers()
  }
  getLastId = () => {
    let number = 0
    this.state.users.map((user) => {
      if (user.id > number) {
        number = user.id
      }
    })
    number++
    return number
  }

  postAttachment = (id, name, mail, password, image) => {
    let data = {
      id: id,
      userMail: mail,
      userPassword: password,
      userName: name,
      userRole: 'Customer',
      userImage: image,
    }
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }
  render() {
    const checkUser = (event) => {
      event.preventDefault()

      const id = this.getLastId()
      const name = event.target.elements.inputName.value
      const mail = event.target.elements.inputEmail.value
      const password = event.target.elements.inputPassword.value
      const image = this.state.imageUrl
      let userExist = this.state.users.filter((x) => x.userMail == mail)
      if (userExist.length > 0) {
        alertify.error('Bu mail adresi kullanılamaz!', 2)
      } else {
        this.postAttachment(id, name, mail, password, image)
        alertify.success('Kaydınız başarıyla oluşturulmuştur.', 2)
      }
      document.getElementById('form').reset()
    }
    return (
      <>
        <Row>
          <Col sm="3"></Col>
          <Col sm="6">
            <h2>{this.state.loginDurum}</h2>
            <Form id="form" onSubmit={checkUser}>
              <FormGroup>
                <Label for="name">Name-Surname</Label>
                <Input
                  type="text"
                  name="email"
                  id="inputName"
                  placeholder="Name Surname"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="inputEmail"
                  placeholder="Mail"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="inputPassword"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">Image</Label>
                <Input
                  type="file"
                  name="image"
                  id="inputImage"
                  onChange={this.GetImage}
                />
              </FormGroup>
              <Button
              //   onClick={() => checkUser(inputEmail, inputPassword)}
              >
                Submit
              </Button>
            </Form>
          </Col>
          <Col sm="3"></Col>
        </Row>
      </>
    )
  }
}
