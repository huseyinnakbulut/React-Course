import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userAction from '../../redux/actions/userActions'
class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  renderLogin() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarToggler onClick={this.toggle} />

        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <FontAwesomeIcon icon={faUser} />
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to={'/login'}
              >
                Giriş Yap
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }

  renderLogout() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarToggler onClick={this.toggle} />
        <NavItem>
          <NavLink>
            <Link to="/postAdd">Post ekle</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <FontAwesomeIcon icon={faUser} />
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={'/normalposts'}
            >
              Normal Postlar
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <FontAwesomeIcon icon={faUser} />
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={'/videoposts'}
            >
              Video Postlar
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <FontAwesomeIcon icon={faUser} />
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={'/imageposts'}
            >
              Resim Postlar
            </Link>
          </NavLink>
        </NavItem>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <FontAwesomeIcon icon={faUser} />
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                onClick={() => this.chan()}
                to={'/login'}
              >
                Çıkış Yap
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
  chan = () => {
    this.props.actions.IsOnlineTrue(false)
  }
  render() {
    return (
      <div>
        {this.props.IsOnline ? this.renderLogout() : this.renderLogin()}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    IsOnline: state.IsOnlineReducer,
    currentUser: state.loginReducer,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      IsOnlineTrue: bindActionCreators(userAction.IsOnlineTrue, dispatch),
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
