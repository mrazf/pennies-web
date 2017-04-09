import React, { Component } from 'react'
import { slide as SideMenu } from 'react-burger-menu'
import classnames from 'classnames'
import './menu.scss'

export default class Menu extends Component {
  constructor (props) {
    super(props)

    this.state = { open: false }

    this.toggle = this.toggle.bind(this)
  }

  toggle (e) {
    e.preventDefault()

    this.setState({ open: !this.state.open })
  }

  render () {
    const classes = classnames('hamburger hamburger--arrow', { 'is-active': this.state.open })

    return (
      <div className='side-bar'>
        <button onClick={this.toggle} className={classes} type='button'>
          <span className='hamburger-box'>
            <span className='hamburger-inner' />
          </span>
        </button>
        <SideMenu noOverlay isOpen={this.state.open} customBurgerIcon={false} customCrossIcon={false}>
          <p className='active'>Dashboard</p>
          <p>Categories</p>
          <p>Transactions</p>
          <p className='last-updated text-muted'>
            <small>Updated 50 mins ago</small>
          </p>
          <p>New Transactions</p>
          <p>Uncategorized</p>
        </SideMenu>
      </div>
    )
  }
}
