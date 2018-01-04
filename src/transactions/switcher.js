import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Switcher extends Component {
  render () {
    return (
      <div className='switcher'>
        <div className='btn-group' role='group' aria-label='Basic example'>
          <Link to='/dashboard/transactions'><button type='button' className='btn btn-secondary'>Transactions</button></Link>
          <Link to='/dashboard/categories'><button type='button' className='btn btn-secondary'>Categories</button></Link>
        </div>
      </div>
    )
  }
}

export default Switcher
