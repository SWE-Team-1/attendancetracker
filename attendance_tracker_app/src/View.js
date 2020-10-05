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
        <div className='App-logo'>
          View page goes here!
        </div>
      </div>
    )
  }
}

export default View
