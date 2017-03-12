import React, { Component } from 'react'

import MonthPicker from './month-picker'

export default class Dashboard extends Component {
  render () {
    const month = this.props.params.month - 1;

    return (
      <div className='container-fluid'>
        <MonthPicker monthName={month} />
        { this.props.children }
      </div>
    )
  }
}
