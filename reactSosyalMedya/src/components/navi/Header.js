import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
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
        <NavbarBrand>
          <FontAwesomeIcon icon={faHome} />{' '}
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            to={'/dahboard/post'}
          >
            Postlar
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <NavItem>
          <NavLink>
            <Link to="/addpost">Post ekle</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <FontAwesomeIcon icon={faUser} />
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={'/postAdd'}
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
              to={'/postAdd'}
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
              to={'/postAdd'}
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
                to={'/postAdd'}
              >
                Post Ekle
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <FontAwesomeIcon icon={faUser} />
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to={'/logout'}
              >
                Çıkış Yap
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
        <NavbarBrand>
          <FontAwesomeIcon icon={faHome} />{' '}
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            to={'/dahboard/post'}
          >
            Postlar
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <NavItem>
          <NavLink>
            <FontAwesomeIcon icon={faUser} />
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={'/postAdd'}
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
              to={'/postAdd'}
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
              to={'/postAdd'}
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

  render() {
    return <div>{this.renderLogin()}</div>
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.loginUserReducer,
  }
}
export default connect(mapStateToProps)(Header)
