import React, { Component } from 'react'

import Explain from './explain'

import './index.scss'

export default class Home extends Component {
  render () {
    return (
      <div className='container home-hero'>
        <Explain />
      </div>
    )
  }
}
