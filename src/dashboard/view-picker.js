import React, { Component } from 'react'

export default class ViewPicker extends Component {
  render () {
    return (
      <nav className='nav has-shadow'>
        <div className='container'>
          <div className='nav-left'>
            <a className='nav-item is-tab'>Categories</a>
            <a className='nav-item is-tab'>Transactions</a>
          </div>
        </div>
      </nav>
    )
  }
}
