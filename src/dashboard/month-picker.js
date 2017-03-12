import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import moment from 'moment'

import './month-picker.scss'

const monthsShort = moment.monthsShort()

export default class MonthPicker extends Component {
  render () {
    const activeMonthIndex = moment().month(this.props.monthName).month()

    return (
      <div className='container month-picker'>
        <ul className='nav nav-tabs justify-content-center'>
          {
            monthsShort.map((m, i) => {
              const monthName = moment.months()[i].toLowerCase()

              return (
                <li className='nav-item' key={i}>
                  <Link to={`/dashboard/${monthName}/transactions`} className={classNames({ 'nav-link': true, 'active': i === activeMonthIndex })}>
                    {m}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
