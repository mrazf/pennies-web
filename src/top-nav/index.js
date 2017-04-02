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
            <div className='col-sm-7 col-7'>
              <a className='nav-item navbar-brand' href='#'>Pennies</a>
              <Link to='/' className='collapse nav-item nav-link'>Home</Link>
              <a className='collapse nav-item nav-link' href='#'>Features</a>
              <a className='collapse nav-item nav-link' href='#'>About</a>
            </div>
            <div className='col-sm-5 col-4'>
              <UserLinks />
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
