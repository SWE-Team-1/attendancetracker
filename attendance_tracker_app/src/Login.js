import React from 'react'

class Login extends React.Component {
  constructor (props) {
    super(props)
    // Store local variable is state, not needed for now
    this.state = {
      states: false
    }
  }

  render () {
    return (
      <div className='Login'>
        Login page goes here!
        <button onClick={() => this.props.login('test credentials')}>Login</button>
      </div>
    )
  }
}

export default Login
