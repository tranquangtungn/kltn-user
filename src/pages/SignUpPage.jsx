import React, { Component } from "react";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';

import { userActions } from '../_actions';

import "./SignInPage.css";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstname: '',
        lastname: '',
        gender: '',
        phonenumber: '',
        birthday: '',
        email: '',
        username: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.firstname && user.lastname && user.username && user.password) {
      this.props.register(user);
    }
  }

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className="sign-in-page">
        <div className="outer">
          <div className="inner">
            <form onSubmit={this.handleSubmit}>
              <h3>Register</h3>

              <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" name="firstname" value={user.firstname} onChange={this.handleChange} />
                {submitted && !user.firstname &&
                  <div className="help-block">First Name is required</div>
                }
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" name="lastname" value={user.lastname} onChange={this.handleChange} />
                {submitted && !user.lastname &&
                  <div className="help-block">Last Name is required</div>
                }
              </div>
              <div className="form-group">
                <label>gender</label>
                <input type="text" className="form-control" placeholder="Gender" name="gender" value={user.gender} onChange={this.handleChange} />
                {submitted && !user.gender &&
                  <div className="help-block">Gender is required</div>
                }
              </div>
              <div className="form-group">
                <label>Birthday</label>
                {/* <input type="text" className="form-control" placeholder="Last name" name="lastname" value={user.lastname} onChange={this.handleChange} /> */}
                <DatePicker selected={user.birthday} className="date-control" name="birthday" value={user.birthday} onChange={(date) => {
                  this.setState({
                    user: {
                      birthday: date
                    }
                  });
                }} />
                {submitted && !user.birthday &&
                  <div className="help-block">Last Name is required</div>
                }
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" className="form-control" placeholder="Enter phone number" name="phonenumber" value={user.phonenumber} onChange={this.handleChange} />
                {submitted && !user.phonenumber &&
                  <div className="help-block">Phone number is required</div>
                }
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" name="email" value={user.email} onChange={this.handleChange} />
                {submitted && !user.email &&
                  <div className="help-block">Email is required</div>
                }
              </div>
              <div className="form-group">
                <label>username</label>
                <input type="text" className="form-control" placeholder="Enter username" name="username" value={user.username} onChange={this.handleChange} />
                {submitted && !user.username &&
                  <div className="help-block">Username is required</div>
                }
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name="password" value={user.password} onChange={this.handleChange} />
                {submitted && !user.password &&
                  <div className="help-block">Password is required</div>
                }
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
              <p className="forgot-password text-right">
                Already registered <a href="/#">log in?</a>
              </p>
            </form>
          </div>
        </div></div >
    );
  }
}

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register
}

export default connect(mapState, actionCreators)(SignUpPage);
