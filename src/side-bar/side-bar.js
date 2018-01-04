import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { slide as SideMenu } from 'react-burger-menu'
import MonthSelector from './month-selector'
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
        <SideMenu noOverlay styles={styles} width={280} isOpen={this.state.open}>
          <NavLink to='/dashboard/transactions' activeClassName='active'>
            <p className='lead'>
              Transactions
            </p>
          </NavLink>
          <MonthSelector />
        </SideMenu>
      </div>
    )
  }
}

export default withRouter(SideBar)
