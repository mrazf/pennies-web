import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'

import { addUser, noUser, fetchToken } from './app-actions'
import TopNav from './top-nav'

import './app.scss'

class App extends Component {
  componentDidMount () {
    firebase.auth().onAuthStateChanged(userObj => {
      const { user, loggedInUser, loggedOutUser } = this.props

      if (userObj !== user) {
        return userObj ? loggedInUser(userObj) : loggedOutUser()
      }
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.user && !nextProps.token.requested) {
      const { token, fetchTokenDiff } = this.props
      fetchTokenDiff(nextProps.user)
    }
  }

  render () {
    return (
      <div>
        <TopNav />
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user.data, token: state.token }
}

const mapDispatchToProps = dispatch => {
  return {
    loggedInUser: userObj => dispatch(addUser(userObj)),
    loggedOutUser: () => dispatch(noUser(null)),
    fetchTokenDiff: func => dispatch(fetchToken(func))
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
