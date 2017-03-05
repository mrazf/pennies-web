import React, { Component } from 'react'
import firebase from 'firebase'

import TopNav from './top-nav'

import './bulma.css'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = { user: firebase.auth().currentUser }
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
