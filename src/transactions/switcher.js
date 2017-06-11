import React, { Component } from 'react'

class Switcher extends Component {
  render () {
    return (
      <div className='switcher'>
        <div className='btn-group' role='group' aria-label='Basic example'>
          <button type='button' className='btn btn-secondary active'>Transactions</button>
          <button type='button' className='btn btn-secondary'>By Category</button>
        </div>
      </div>
    )
  }
}

export default Switcher
