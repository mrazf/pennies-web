import React, { Component } from 'react'

export default class HomeHero extends Component {
  render () {
    return (
      <section className='hero is-light is-bold' >
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>Pennies</h1>
            <h1 className='subtitle'>Smart, customizable budgeting for <strong>Monzo</strong></h1>
          </div>
        </div>
      </section>
    )
  }
}
