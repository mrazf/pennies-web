import React, { Component } from 'react'
import { Link, withRouter } from 'react-router'
import { slide as SideMenu } from 'react-burger-menu'
import './menu.scss'

const styles = {
  bmMenuWrap: { position: 'absolute' }
}

class Menu extends Component {
  render () {
    return (
      <div className='side-bar'>
        <SideMenu noOverlay styles={styles} width={235} isOpen={this.props.open} customBurgerIcon={false} customCrossIcon={false}>
          <p className='sidebar__divider'>
            <Link to='/dashboard' activeClassName='active'>
              Dashboard
            </Link>
          </p>
          <p className='sidebar__divider'>
            <Link to='/dashboard/categories' activeClassName='active'>
              Categories
            </Link>
          </p>
          <p className='sidebar__divider'>
            <Link to='/dashboard/transactions' activeClassName='active'>
              Transactions
            </Link>
          </p>
        </SideMenu>
      </div>
    )
  }
}

export default withRouter(Menu)
