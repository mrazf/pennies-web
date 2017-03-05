import React, { Component } from 'react'

import HomeHero from './home-hero'
import Explain from './explain'

export default class Home extends Component {
  render () {
    return (
      <div>
        <HomeHero />
        <Explain />
      </div>
    )
  }
}
