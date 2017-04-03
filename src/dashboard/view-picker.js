import React, { Component } from 'react'
import { Link } from 'react-router'

class ViewPicker extends Component {
  render () {
    return (
      <div className='view-picker container'>
        <div className='row justify-content-center'>
          <div className='btn-group btn-group-sm' role='group' aria-label='Basic example'>
            <Link to='/dashboard' className='btn btn-secondary'>
              Dashboard Home
            </Link>
            <Link to='/dashboard/categories' className='btn btn-secondary'>
              Categories
            </Link>
            <Link to='/dashboard/transactions' className='btn btn-secondary'>
              Transactions
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewPicker
