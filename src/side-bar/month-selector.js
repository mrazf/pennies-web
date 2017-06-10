import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import moment from 'moment'
import { monthChange } from '../transactions/redux-actions'

class MonthSelector extends Component {
  render () {
    return (
      <nav className='month-selector nav flex-column'>
        {
          moment.months().map((m, i) => {
            const classes = classnames('nav-link', { 'active': i === this.props.selectedMonth })

            return (
              <a
                className={classes}
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
