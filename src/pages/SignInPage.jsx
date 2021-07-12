import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./SignInPage.css";
import { userActions } from '../_actions';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
class SignInPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    // reset login status
    this.props.logout();

    this.state = {
      username: '',
      password: '',
      user: {
        id: "",
        firstname: "",
        lastname: "",
        gender: "",
        birthday: "",
        picture: "",
        email: ""
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
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
    // const userFb = {
    //   id: "",
    //   firstname: "",
    //   lastname: "",
    //   gender: "",
    //   picture: "",
    //   email: "",
    // };
    const userFb = {
      id: response.id,
      firstname: response.first_name,
      lastname: response.last_name,

      picture: response.picture.data.url,
      email: response.email,
    }
    this.props.loginFb(userFb);
    console.log(this.props)
    // const { user } = this.state.user;


  }
  responseGoogle(response) {
    console.log(response);
    const userGg = {
      id: response.profileObj.googleId,
      firstname: response.profileObj.familyName,
      lastname: response.profileObj.givenName,

      picture: response.profileObj.imageUrl,
      email: response.profileObj.email,
    }
    this.props.loginFb(userGg);
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
                fields="id,name,first_name,last_name,middle_name,picture,gender,birthday,email"
                // onClick={this.componentClicked}
                callback={this.responseFacebook} />
              <GoogleLogin
                clientId="988060389475-ekg1vusjst9a3k94dvv1s4kvioetltr7.apps.googleusercontent.com"
                render={renderProps => (
                  <button className="btn btn-danger btn-lg btn-block" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with Google</button>
                )}
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
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
  logout: userActions.logout,
  loginFb: userActions.loginFb,
};

export default connect(mapState, actionCreators)(SignInPage);
