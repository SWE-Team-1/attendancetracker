import React from 'react'
import './View.css'

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
        <p>User is a {this.props.prof ? 'prof' : 'student'}</p>
        <button onClick={() => this.props.logout()}>Logout</button>

        <div>
          <h5 class='View-Title-Courses'>Your Courses</h5>
          <div class='View-Total-Frame'>
            <a href='#' class='View-Courses'></a>
            <a href='#' class='View-Courses'></a>
            <a href='#' class='View-Courses'></a>
            <a href='#' class='View-Courses'></a>
            <a href='#' class='View-Courses'></a>
          </div>
          <div class='View-Edit-Course'>
            <a href='#' class='View-Edit-Button View-Add-Course'>ADD NEW COURSE</a>
            <a href='#' class='View-Edit-Button View-Remove-Course'>REMOVE COURSE</a>
          </div>
        </div>
      </div>
    )
  }
}

export default View
