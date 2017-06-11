import React, { Component } from 'react'
import { Link, withRouter } from 'react-router'
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
          <Link to='/dashboard/transactions' className='side-bar__link' activeClassName='active'>
            <p className='lead'>
              Transactions
            </p>
          </Link>
          <MonthSelector />
        </SideMenu>
      </div>
    )
  }
}

export default withRouter(SideBar)
