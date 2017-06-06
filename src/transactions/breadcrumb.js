import React, { Component } from 'react'
import './breadcrumb.scss'

export default class Breadcrumb extends Component {
  render () {
    return (
      <ol className='breadcrumb'>
        <li className='breadcrumb-item active'>June's Transactions</li>
      </ol>
    )
  }
}
