import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'

import { user, noUser } from './redux/actions'
import TopNav from './top-nav'

import './app.scss'

class App extends Component {
  constructor (props) {
    super(props)

    const { loggedInUser, loggedOutUser } = props
    firebase.auth().onAuthStateChanged(userObj => userObj ? loggedInUser(userObj) : loggedOutUser())
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

const mapDispatchToProps = dispatch => {
  return {
    loggedInUser: userObj => dispatch(user(userObj)),
    loggedOutUser: () => dispatch(noUser(null))
  }
}

const AppContainer = connect(null, mapDispatchToProps)(App)

export default AppContainer
