import React, { Component } from 'react'
import { connect } from 'react-redux'
import TopNav from './top-nav'
import SideBar from './side-bar/side-bar'
import './app.scss'

class App extends Component {
  render () {
    return (
      <div>
        <SideBar />
        <TopNav />
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user.data, token: state.token }
}

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer
