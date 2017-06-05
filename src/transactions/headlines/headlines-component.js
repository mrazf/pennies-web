import React, { Component } from 'react'

class HeadlinesComponent extends Component {
  render () {
    return (
      <div>
        <span onClick={this.props.refresh} className='create-sheet mr-3'>
          <i className='fa fa-refresh pr-2' aria-hidden='true' />Refresh
        </span>
      </div>
    )
  }
}

export default HeadlinesComponent
