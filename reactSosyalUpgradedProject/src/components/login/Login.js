import React, { Component } from 'react'
import './Log.css'
import * as loginAction from '../../redux/actions/userActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ marginTop: '100px', marginLeft: '35%' }}
      >
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user" />
                <input
                  type="text"
                  className="login__input"
                  placeholder="Email"
                  onChange={(e) =>
                    this.props.actions.currentUsername(e.target.value)
                  }
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock" />
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  onChange={(e) =>
                    this.props.actions.currentPassword(e.target.value)
                  }
                />
              </div>
              <button
                className="button login__submit"
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
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon fas fa-chevron-right" />
                </Link>
              </button>
            </form>
            <div className="social-login">
              <h3>log in via</h3>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram" />
                <a href="#" className="social-login__icon fab fa-facebook" />
                <a href="#" className="social-login__icon fab fa-twitter" />
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>
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
