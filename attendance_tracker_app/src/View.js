import React from 'react'

class View extends React.Component {
  constructor (props) {
    super(props)
    // Store local variable is state, not needed for now
    this.state = {
      states: false
    }
  }

  render () {
    return (
      <div className='View'>
        <div className='Header'>
          Morgan: Header goes here!
        </div>
        <div>
          <h1>
            Yiran: View page goes here!
          </h1>
          <p>User is a {this.props.prof ? 'prof' : 'student'}</p>
          <button onClick={() => this.props.logout()}>Logout</button>
        </div>
      </div>
    )
  }
}

export default View
