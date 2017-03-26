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
      <div className='picker btn-group-vertical'>
        {
          moment.months().map((m, i) => {
            const classes = classnames('btn btn-secondary text-left', {active: selectedMonth === i})

            return (
              <button
                type='button'
                onClick={() => changeMonth(i)}
                className={classes}>
                {m}
              </button>
            )
          })
        }
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

const PickerContainer = connect(mapStateToProps, mapDispatchToProps)(Picker)

export default PickerContainer
