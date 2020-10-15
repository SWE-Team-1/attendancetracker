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
          <ul>
            <li><a>ATTENDANCE TRACKER</a></li>
            <li class="button"><a href="#top">COURSES</a></li>
            <li class="button"><a href="#top">INBOX</a></li>
            <li class="button"><a href="#top">SETTINGS</a></li>
            <li class=".secondary-button" ><a href="#top">LOG OUT</a></li>
          </ul>
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
