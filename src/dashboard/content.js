import React, { Component } from 'react'
import { Link } from 'react-router'
import firebase from 'firebase'

import Transactions from './transactions'

import './content.scss'

export default class Content extends Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.updateUser = this.updateUser.bind(this)

    firebase.auth().onAuthStateChanged(this.updateUser)
  }

  updateUser (user) {
    this.setState({ user })
  }

  render () {
    const month = this.props.params.month - 1;
    return (
      <div className='row content'>
        <div className='col-2'>
          <ul className='list-group'>
            <li className='list-group-item'>
              <Link to={`/dashboard/${this.props.params.month}/transactions`}>Transactions</Link>
            </li>
          </ul>
        </div>
        <div className='col-9'>
          { this.state.user ? <Transactions month={month} /> : <h1>tits</h1>}
        </div>
        <div className='col-1'>
          <button type='button' className='btn btn-outline-primary'>New</button>
        </div>
      </div>
    )
  }
}
