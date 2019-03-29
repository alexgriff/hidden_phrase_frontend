import React, { Component } from 'react';

import Login from './Login';
import Signup from './Signup';

class Auth extends Component {
  state = { signup: false };

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({ signup: !prevState.signup }));
  };

  render() {
    return (
      <div>
        <h4>
          <div >
            {this.state.signup ? <div>Already signed up? <a onClick={this.handleClick} href="/">Log In</a></div> : <div>Don't have an account? <a onClick={this.handleClick} href="/">Sign Up</a></div>}
          </div>
        </h4>
        {this.state.signup ? <Signup /> : <Login />}
      </div>
    );
  }
}

export default Auth;
