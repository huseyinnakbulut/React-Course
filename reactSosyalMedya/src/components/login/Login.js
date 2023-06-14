import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginAction from '../../redux/actions/userActions'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Deneme.css'

class Login extends Component {
  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Tabs Titles */}
          {/* Icon */}
          <div className="fadeIn first">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              id="icon"
              alt="User Icon"
              style={{
                borderRadius: '70%',
                height: '150px',
                width: '150px',
                marginBottom: '10px',
                marginTop: '30px',
              }}
            />
          </div>
          {/* Login Form */}
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="email"
              onChange={(e) =>
                this.props.actions.currentUsername(e.target.value)
              }
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              onChange={(e) =>
                this.props.actions.currentPassword(e.target.value)
              }
            />
          </form>
          <Button
            className="fadeIn fourth"
            onClick={() =>
              this.props.actions.getUsernamePassword(
                this.props.currentUsername,
                this.props.currentPassword
              )
            }
          >
            <Link
              to={'/normalposts'}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Giriş yap
            </Link>
          </Button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    posts: state.loginReducer,
    currentUsername: state.currentUsernameReducer,
    currentPassword: state.currentPasswordReducer,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUsernamePassword: bindActionCreators(
        loginAction.getUsernamePassword,
        dispatch
      ),
      currentUsername: bindActionCreators(
        loginAction.currentUsername,
        dispatch
      ),
      currentPassword: bindActionCreators(
        loginAction.currentPassword,
        dispatch
      ),
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
//Change user ve password u onchange de tutup clickten gönderip kontrol edilecek.
