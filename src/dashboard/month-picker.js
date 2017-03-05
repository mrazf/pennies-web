import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import moment from 'moment'

const monthsShort = moment.monthsShort()

export default class MonthPicker extends Component {
  render () {
    const monthIndex = moment().month(this.props.month)

    return (
      <nav className='nav has-shadow'>
        <div className='container'>
          <div className="nav-left">
            {
              monthsShort.map((m, i) => {
                return <Link className={classNames({
                  'nav-item': true,
                  'is-tab': true,
                  'is-active': monthIndex === i })}>
                  {m}
                </Link>
              })
            }
          </div>
        </div>
      </nav>
    )
  }
}
