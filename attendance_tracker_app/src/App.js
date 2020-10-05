import React from 'react'
import Login from './Login'
import View from './View'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    // We can store user info in this top-level component
    this.state = {
      user: null,
      loggedin: false
    }
  }

  login (credentials) {
    // Secure Login with backend indentification, for now just grant access by default
    console.log('credentialt: ', credentials)
    this.setState({ loggedin: !this.state.loggedin })
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          {this.state.loggedin ? <View /> : <Login login={() => this.login()} />}
        </div>
      </div>
    )
  }
}

export default App
