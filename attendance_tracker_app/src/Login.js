import React from 'react'
import './App.css'
import './index.css'


class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null
    }
    // This page should be a form that sends all feild's value to the login function on submit
  }

  verifyLogin (credentials, unsecurepassword) {
    // Secure Login with backend indentification, for now just grant access by default
    if (unsecurepassword === 'unsecure-password') {
      if (credentials === 'prof') this.props.loginProf()
      else this.props.login()
    } else {
      this.setState({ error: 'Incorrect credentials, try again' })
    }
  }

  render () {
    return (
      <div className='Login'>
        <div className='App-header'>
          <h1>Login</h1>
          <div />
          <input>Email</input>
          <div />
          <input type="password" placeholder="Password"/>
          <div />
          <h3>{this.state.error}</h3>
          <button onClick={() => this.verifyLogin('test credentials', 'unsecure-password')}>Login</button>
          <div />
          <button onClick={() => this.verifyLogin('prof', 'unsecure-password')}>Login as prof</button>
          <div />
          <button onClick={() => this.verifyLogin('test credentials', 'not unsecure-password')}>Login Error</button>
        </div>
      </div>
    )
  }
}

export default Login
