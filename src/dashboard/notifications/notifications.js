import React, { Component } from 'react'
import './notification.scss'

const things = [1, 2, 3, 4]

class Notifications extends Component {
  render () {
    return (
      <div className='container notifications'>
        <div className='row'>
          <p className='text-muted'>Last updated: 50 minutes ago</p>
          {
            things.map(t => {
              return (
                <div className='notification col-2'>
                  <span className='badge badge-primary'>{t}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Notifications
