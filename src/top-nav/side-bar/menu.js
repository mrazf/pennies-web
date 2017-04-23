import React, { Component } from 'react'
import { Link } from 'react-router'
import { slide as SideMenu } from 'react-burger-menu'
import './menu.scss'

const styles = {
  bmMenuWrap: { position: 'absolute' }
}

export default class Menu extends Component {
  render () {
    return (
      <div className='side-bar'>
        <SideMenu noOverlay styles={styles} width={235} isOpen={this.props.open} customBurgerIcon={false} customCrossIcon={false}>
          <p className='sidebar__divider'>Dashboard</p>
          <p className='sidebar__divider'>Categories</p>
          <p className='sidebar__divider'>Transactions</p>
          <Link to='/dashboard/exporter'>Exporter</Link>
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
          <Link to='/dashboard/exporter'>
            Newly Exported
            <span className='badge badge-warning'>8</span>
          </Link>
        </SideMenu>
      </div>
    )
  }
}
