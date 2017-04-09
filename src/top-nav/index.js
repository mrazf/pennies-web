import React, { Component } from 'react'
import { Link } from 'react-router'
import UserLinks from './user-links'

import 'bootstrap/scss/bootstrap.scss'
import './index.scss'

export default class TopNav extends Component {
  render () {
    return (
      <header className='top-nav'>
        <nav className='container'>
          <div className='row'>
            <div className='col-3 col-md-8'>
              <a className='nav-item navbar-brand' href='#'>Pennies</a>
              <Link to='/' className='collapse nav-item nav-link'>Home</Link>
              <a className='collapse nav-item nav-link' href='#'>Features</a>
              <a className='collapse nav-item nav-link' href='#'>About</a>
            </div>
            <div className='col-9 col-md-4'>
              <UserLinks />
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
