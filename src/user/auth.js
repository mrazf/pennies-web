import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { userSetup, userLogout } from './redux-actions'

class Auth extends Component {
  componentDidMount () {
    const { userSetup, userLogout } = this.props

    firebase.auth().onAuthStateChanged(user => {
      user ? userSetup(user) : userLogout()
    })
  }

  render () {
    return this.props.loggedIn && this.props.children
      ? <div className='pennies'>{this.props.children}</div> : null
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.user.uid }
}

const mapDispatchToProps = dispatch => {
  return {
    userSetup: user => dispatch(userSetup(user)),
    userLogout: () => dispatch(userLogout(null))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
