import React, { Component } from 'react'
import { Link } from 'react-router'
import UserLinks from './user-links'

export default class TopNav extends Component {
  render () {
    return (
      <div className='container'>
        <nav className='nav' style={{ borderBottom: '1px solid #BF793F' }}>
          <div className='nav-left'>
            <a className='nav-item is-brand' href='http://bulma.io'>
              <img src='http://bulma.io/images/bulma-logo.png' alt='Bulma: a modern CSS framework based on Flexbox' />
            </a>
            <span id='nav-toggle' className='nav-toggle'>
              <span />
              <span />
              <span />
            </span>
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='/' className='nav-item'>Features</Link>
            <Link to='/' className='nav-item'>About</Link>
          </div>
          <div className='nav-right nav-menu'>
            <UserLinks />
          </div>
        </nav>
      </div>
    )
  }
}
