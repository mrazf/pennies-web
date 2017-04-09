import React, { Component } from 'react'
import { slide as SideMenu } from 'react-burger-menu'
import './menu.scss'

export default class Menu extends Component {
  render () {
    return (
      <div className='side-bar'>
        <SideMenu noOverlay width={'235'} isOpen={this.props.open} customBurgerIcon={false} customCrossIcon={false}>
          <p className='sidebar__divider'>Dashboard</p>
          <p className='sidebar__divider'>Categories</p>
          <p>Transactions</p>
          <p className='last-updated text-muted'>
            <small>Updated 50 mins ago</small>
          </p>
          <p className='sidebar__divider'>
            Uncategorized
            <span className='badge badge-warning'>10</span>
          </p>
          <p className='sidebar__divider'>
            New Transactions
            <span className='badge badge-warning'>9</span>
          </p>
          <p>
            Newly Exported
            <span className='badge badge-warning'>8</span>
          </p>
        </SideMenu>
      </div>
    )
  }
}
