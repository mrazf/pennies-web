import React, { Component } from 'react'
import moment from 'moment'

class Picker extends Component {
  render () {
    return (
      <div className='time-range-picker container' style={{marginBottom: '2rem'}}>
        <div className='row justify-content-center'>
          <div className='btn-group'>
            <button type='button' className='btn btn-secondary'>2017</button>
            {
              moment.monthsShort().map(m => {
                return <button type='button' className='btn btn-secondary'>{m}</button>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Picker
