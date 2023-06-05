import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import alertify from 'alertifyjs'

export default class Login extends Component {
  state = {
    users: [],
    loginDurum: 'Henüz Giriş Yapmadınız',
  }
  getUsers = () => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
  }
  componentDidMount() {
    this.getUsers()
  }

  render() {
    const checkUser = (event) => {
      event.preventDefault()

      const mail = event.target.elements.inputEmail.value
      const password = event.target.elements.inputPassword.value
      let hatali = 'Hatalı Giriş'
      let dogru = 'Giriş Başarılı'
      let loginUser = this.state.users.filter(
        (x) => x.userMail == mail && x.userPassword == password
      )
      if (loginUser.length > 0) {
        this.state.loginDurum = dogru
        this.props.changeUser(loginUser[0])
        alertify.success(' Giriş Başarılı', 2)
      } else {
        this.state.loginDurum = hatali
        alertify.error('Giriş Yapılamadı', 2)
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
