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
          Don't have an account?{' '}
          <a onClick={this.handleClick} href="/">
            Click Here to {this.state.signup ? <span>Log In</span> : <span>Sign Up</span>} 
          </a>
        </h4>
        {this.state.signup ? <Signup /> : <Login />}
      </div>
    );
  }
}

export default Auth;
