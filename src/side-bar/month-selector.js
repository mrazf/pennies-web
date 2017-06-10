import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { monthChange } from '../transactions/redux-actions'

class MonthSelector extends Component {
  render () {
    return (
      <nav className='side-bar__sublink nav flex-column'>
        {
          moment.monthsShort().map((m, i) => {
            return (
              <a
                className='side-bar__sublink nav-link active'
                onClick={() => this.props.monthChange(i)}
                key={i}>
                {m}
              </a>
            )
          })
        }
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return { selectedMonth: state.transactions.selectedMonth }
}

const mapDispatchToProps = dispatch => {
  return { monthChange: month => dispatch(monthChange(month)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthSelector)
