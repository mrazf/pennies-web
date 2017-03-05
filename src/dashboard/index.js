import React, { Component } from 'react'

import MonthPicker from './month-picker'

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        <section className='hero is-light is-bold' >
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>£30000, looking good this month</h1>
            </div>
          </div>
        </section>
        <MonthPicker monthName={this.props.params.month} />
        { this.props.children }
      </div>
    )
  }
}
