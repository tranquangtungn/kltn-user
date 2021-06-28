import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./SignInPage.css";
class SignInPage extends Component {
  render() {
    return (
      <div className="sign-in-page">
        <div className="outer">
          <div className="inner">
            <form>
              <h3>Log in</h3>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
              <Link to="/signup" className="btn btn-dark btn-lg btn-block">Sign up</Link>

              <p className="forgot-password text-right">
                Forgot <a href="/#">password?</a>
              </p>
            </form>
          </div>
        </div></div >
    );
  }
}

export default SignInPage;
