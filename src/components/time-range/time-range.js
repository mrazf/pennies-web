import React, { Component } from 'react'
import * as R from 'ramda'
import classnames from 'classnames'
import moment from 'moment'
import './time-range.scss'

class TimeRange extends Component {
  render () {
    const { selectedMonth, monthChange } = this.props

    return (
      <div className='time-range-picker container'>
        <div className='row justify-content-center'>
          <div className='btn-group'>
            <button type='button' className='btn btn-secondary'>2017</button>
            {
              moment.monthsShort().map((m, i) => {
                const isSelectedMonth = selectedMonth === i
                const classes = classnames('btn btn-secondary text-left', {active: isSelectedMonth, 'hidden-sm-down': !isSelectedMonth})
                const onClick = isSelectedMonth ? R.always : () => monthChange(i)

                return (
                  <button
                    type='button'
                    className={classes}
                    onClick={() => onClick()}
                    key={i}>
                    {m}
                  </button>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default TimeRange
