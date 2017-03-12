import React, { Component } from 'react'

import MonthPicker from './month-picker'

export default class Dashboard extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <MonthPicker monthName={this.props.params.month} />
        { this.props.children }
      </div>
    )
  }
}
