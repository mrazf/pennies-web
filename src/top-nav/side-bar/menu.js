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
          <p className='sidebar__divider'>
            <Link to='/dashboard'>Dashboard</Link>
          </p>
          <p className='sidebar__divider'>
            <Link to='/dashboard/categories'>Categories</Link>
          </p>
          <p className='sidebar__divider'>
            <Link to='/dashboard/transactions'>Transactions</Link>
          </p>
          <p>
            <Link to='/dashboard/exporter'>Exporter</Link>
          </p>
        </SideMenu>
      </div>
    )
  }
}
