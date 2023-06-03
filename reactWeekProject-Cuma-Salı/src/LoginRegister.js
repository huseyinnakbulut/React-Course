import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
export default class LoginRegister extends Component {
  render() {
    return (
      <div>
        <Row style={{ height: '200px' }}></Row>
        <Row>
          <Col sm="2"></Col>
          <Col sm="4">
            <h2>Hesabın var mı?</h2>
            <Button
              color="success"
              //onClick={() => this.props.removeFromCart(cartItem)}
              style={{ marginLeft: '60px' }}
            >
              <Link to="/Login" style={{ color: 'white' }}>
                Giriş Yap
              </Link>
            </Button>
          </Col>
          <Col sm="4">
            <h2>Hesabın Yok mu?</h2>

            <Button
              color="info"
              //onClick={() => this.props.removeFromCart(cartItem)}
              style={{ marginLeft: '60px' }}
            >
              <Link to="/Register" style={{ color: 'white' }}>
                Kayıt Ol
              </Link>
            </Button>
          </Col>
          <Col sm="2"></Col>
        </Row>
      </div>
    )
  }
}
