import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./SignInPage.css";
import { userActions } from '../_actions';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
class SignInPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    // reset login status
    this.props.logout();

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  }
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="sign-in-page">
        <div className="outer">
          <div className="inner">
            <form onSubmit={this.handleSubmit}>
              <h3>Log in</h3>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" name="username" placeholder="Enter email" value={username} onChange={this.handleChange} />
                {submitted && !username &&
                  <div className="help-block">Username is required</div>
                }
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" placeholder="Enter password" value={password} onChange={this.handleChange} />
                {submitted && !password &&
                  <div className="help-block">Password is required</div>
                }
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
              <Link to="/signup" className="btn btn-dark btn-lg btn-block">Sign up</Link>

              <FacebookLogin
                cssClass="btn btn-primary btn-lg btn-block"
                appId="428202575028941"
                fields="name,email,picture"
                // onClick={this.componentClicked}
                callback={this.responseFacebook} />

              <p className="forgot-password text-right">
                Forgot <a href="/#">password?</a>
              </p>

            </form>
          </div>
        </div></div >
    );
  }
}
function mapState(state) {
  console.log(state)
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

export default connect(mapState, actionCreators)(SignInPage);
