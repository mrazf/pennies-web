import React, { Component } from 'react'
import { Link } from 'react-router'
import UserLinks from './user-links'

import 'bootstrap/scss/bootstrap.scss'
import './index.scss'

export default class TopNav extends Component {
  render () {
    return (
      <header className='navbar navbar-light navbar-toggleable-md bd-navbar'>
        <nav className='container'>
          <a className='navbar-brand' href='#'>Pennies</a>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav d-flex w-50 mr-auto'>
              <Link to='/' className='nav-item nav-link'>Home</Link>
              <a className='nav-item nav-link' href='#'>Features</a>
              <a className='nav-item nav-link' href='#'>About</a>
            </div>
          </div>
          <UserLinks />
        </nav>
      </header>
    )
  }
}
