import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import TopNav from './top-nav'
import SideBar from './side-bar/side-bar'
import Transactions from './transactions/transactions'
import Auth from './user/auth'
import './app.scss'

class App extends Component {
  render () {
    return (
      <Auth>
        <SideBar />
        <TopNav />
        { this.props.children }
        <Route path='/dashboard/transactions' component={Transactions} />
      </Auth>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user.data, token: state.token }
}

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer
