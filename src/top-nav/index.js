import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserLinks from './user-links'

import 'bootstrap/scss/bootstrap.scss'
import './index.scss'

export default class TopNav extends Component {
  constructor (props) {
    super(props)

    this.state = { open: true }

    this.toggle = this.toggle.bind(this)
  }

  toggle (e) {
    e.preventDefault()

    this.setState({ open: !this.state.open })
  }

  render () {
    return (
      <header className='top-nav'>
        <nav className='container-fluid'>
          <div className='row'>
            <div className='col-3 col-lg-1' />
            <div className='hidden-sm-down offset-lg-1 col-lg-3'>
              <a className='nav-item navbar-brand' href='#'>Pennies</a>
              <Link to='/' className='collapse nav-item nav-link'>Home</Link>
              <a className='collapse nav-item nav-link' href='#'>Features</a>
              <a className='collapse nav-item nav-link' href='#'>About</a>
            </div>
            <div className='banner col-6 col-lg-2'>
              <h1 className='h4 text-center'>Dashboard</h1>
            </div>
            <div className='hidden-sm-down col-lg-3'>
              <UserLinks />
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
