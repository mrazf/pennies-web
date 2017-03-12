import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import firebase from 'firebase'

import Transactions from './transactions'

import './content.scss'

const menuItems = {
  transactions: {
    title: 'Transactions',
    component: Transactions
  }
}

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
    console.log('content state', this.state)
    const ContentsComponent = menuItems[this.props.params.categoryType].component

    return (
      <div className='row content'>
        <div className='col-2'>
          <ul className='list-group'>
            {
              Object.keys(menuItems).map(i => {
                const isActive = i === this.props.params.categoryType

                return (
                  <li className='list-group-item' key={`content-${i}`}>
                    <Link to={`/dashboard/${this.props.params.month}/${i}`} className={classNames({ 'is-active': isActive })}>{menuItems[i].title}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='col-9'>
          { this.state.user ? <ContentsComponent month={this.props.params.month} /> : <h1>tits</h1>}
        </div>
        <div className='col-1'>
          <button type='button' className='btn btn-outline-primary'>New</button>
        </div>
      </div>
    )
  }
}
