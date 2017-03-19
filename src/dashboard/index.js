import React, { Component } from 'react'
import Banner from './banner/banner'

export default class Dashboard extends Component {
  render () {
    return (
      <div className='dashboard'>
        <Banner />
        { this.props.children }
      </div>
    )
  }
}
