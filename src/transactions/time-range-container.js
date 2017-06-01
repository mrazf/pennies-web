import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimeRange from '../components/time-range/time-range'
import { monthChange } from './actions'

class TimeRangeContainer extends Component {
  render () {
    const { selectedMonth, monthChange } = this.props

    return <TimeRange selectedMonth={selectedMonth} monthChange={monthChange} />
  }
}

const mapStateToProps = state => {
  return { selectedMonth: state.transactions.selectedMonth }
}

const mapDispatchToProps = dispatch => {
  return { monthChange: month => dispatch(monthChange(month)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeRangeContainer)
