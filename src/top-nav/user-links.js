import React, { Component } from 'react'
import { Link, withRouter } from 'react-router'
import firebase from 'firebase'

class Login extends Component {
  onClick () {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      .then(() => console.log('login success'))
      .catch(() => console.log('login failure'))
  }

  render () {
    return (
      <div className='nav-right nav-menu'>
        <Link className='nav-item is-tab' style={{cursor: 'pointer'}} onClick={this.onClick}>Login</Link>
      </div>
    )
  }
}

class LogoutAndUser extends Component {
  constructor (props) {
    super(props)

    this.logout = this.logout.bind(this)
  }
  logout () {
    firebase.auth().signOut()
      .then(() => {
        console.log('logout successful')
        this.props.router.push('/')
      })
      .catch(err => {
        console.log('logout failure')
        console.log(err)
      })
  }

  render () {
    return (
      <div className='user'>
        <a className='nav-item nav-link collapse' onClick={this.logout}> Logout </a>
        <Link to='/dashboard' className='nav-item nav-link'>{this.props.user.displayName}</Link>
      </div>
    )
  }
}

const LogoutAndUserRouter = withRouter(LogoutAndUser)

export default class UserLinks extends Component {
  constructor (props) {
    super(props)

    this.state = { user: null }

    firebase.auth().onAuthStateChanged(user => this.setState({ user }))
  }

  render () {
    return this.state.user ? <LogoutAndUserRouter user={this.state.user} /> : <Login />
  }
}
