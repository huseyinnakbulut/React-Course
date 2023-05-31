import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'

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

  //   checkUser = (mail, password) => {
  //     let hatali = 'Hatalı Giriş'
  //     let dogru = 'Giriş Başarılı'
  //     let loginUser = users.find(
  //       (x) => x.userMail == mail && x.userPassword == password
  //     )
  //     if (loginUser != null) {
  //       this.state.loginDurum = dogru
  //       this.props.changeUser(loginUser)
  //     } else {
  //       this.state.loginDurum = hatali
  //     }
  //   }

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
      } else {
        this.state.loginDurum = hatali
      }
    }
    return (
      <>
        <Row>
          <Col sm="3"></Col>
          <Col sm="6">
            <h2>{this.state.loginDurum}</h2>
            <Form onSubmit={checkUser}>
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
