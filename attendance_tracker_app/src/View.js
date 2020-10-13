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
          <h5 class='titleCourses'>Your Courses</h5>
          <div class='totalFrame'>
            <a href='#' class='courses'></a>
            <a href='#' class='courses'></a>
            <a href='#' class='courses'></a>
            <a href='#' class='courses'></a>
            <a href='#' class='courses'></a>
          </div>
          <div class='editCourse'>
            <a href='#' class='editButton addCourse'>ADD NEW COURSE</a>
            <a href='#' class='editButton removeCourse'>REMOVE COURSE</a>
          </div>
        </div>
      </div>
    )
  }
}

export default View
