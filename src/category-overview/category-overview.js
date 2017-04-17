import React, { Component } from 'react'
import './category-overview.scss'

const spendingItem = (title, percentage) => {
  return (
    <div className='row no-gutters'>
      <div className='col-xl-3'>
        <p>{title}</p>
      </div>
      <div className={`percentage percentage-${percentage} col-xl-9`} />
    </div>
  )
}

export default class Overview extends Component {
  render () {
    return (
      <div className='category-overview'>
        <div className='header'>
          <p><strong>poo</strong></p>
        </div>
        <div className='spending  container-fluid'>
          <div className='spent'>
            { spendingItem('Spent', 98) }
          </div>
          <div className='over-spend'>
            { spendingItem('Over spend', 30) }
          </div>
          <div className='monthly-target text-muted'>
            <p>
              <small>Monthly Target</small>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
