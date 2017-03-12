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
              return (
                <li className='nav-item' key={i}>
                  <Link to={`/dashboard/transactions/months/${i + 1}`} className={classNames({ 'nav-link': true, 'active': i === activeMonthIndex })}>
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
