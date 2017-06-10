import React, { Component } from 'react'
import { Link, withRouter } from 'react-router'
import { slide as SideMenu } from 'react-burger-menu'
import TimeRangeComponent from './month-selector'
import './side-bar-react-burger-menu.scss'
import './side-bar.scss'

const styles = {
  bmMenuWrap: { position: 'absolute' }
}

class SideBar extends Component {
  constructor (props) {
    super(props)

    this.state = { open: true }

    this.toggle = () => this.setState({ open: !this.state.open })
  }

  render () {
    return (
      <div className='side-bar'>
        <SideMenu noOverlay styles={styles} width={280} isOpen={this.state.open} customBurgerIcon={false}>
          <Link to='/dashboard' className='side-bar__link' activeClassName='active'>
            <p className='sidebar__divider lead'>
              Dashboard
            </p>
          </Link>
          <Link to='/dashboard/categories' className='side-bar__link' activeClassName='active'>
            <p className='sidebar__divider lead'>
              Categories
            </p>
          </Link>
          <Link to='/dashboard/transactions' className='side-bar__link' activeClassName='active'>
            <p className='lead'>
              Transactions
            </p>
          </Link>
          <TimeRangeComponent />
        </SideMenu>
      </div>
    )
  }
}

export default withRouter(SideBar)
