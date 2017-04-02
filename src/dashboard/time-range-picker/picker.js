import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import moment from 'moment'
import { changeMonth } from './actions'
import './picker.scss'

class Picker extends Component {
  render () {
    const { selectedMonth, changeMonth } = this.props

    return (
      <div className='time-range-picker container' style={{marginBottom: '2rem'}}>
        <div className='row justify-content-center'>
          <div className='btn-group'>
            <button type='button' className='btn btn-secondary'>2017</button>
            {
              moment.monthsShort().map((m, i) => {
                const classes = classnames('btn btn-secondary text-left', {active: selectedMonth === i})

                return (
                  <button
                    type='button'
                    className={classes}
                    onClick={() => changeMonth(i)}
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

const mapStateToProps = state => {
  return { selectedMonth: state.selectedMonth.number }
}

const mapDispatchToProps = dispatch => {
  return { changeMonth: monthNumber => dispatch(changeMonth(monthNumber)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Picker)
