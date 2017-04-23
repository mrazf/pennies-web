import React, { Component } from 'react'
import Month from './month'
import './year-view.scss'

class YearViewComponent extends Component {
  render () {
    const { name, id } = this.props.spreadsheet

    return (
      <div className='year-view container-fluid offset-xl-2'>
        <div className='row pt-3'>
          <div className='col-lg-1'>
            <div className='btn-group-vertical'>
              <button type='button' className='btn btn-secondary'>2017</button>
            </div>
          </div>
          <div className='col-lg-1'>
            <button type='button' className='btn btn-danger' onClick={this.props.recreate}>Recreate</button>
          </div>
        </div>
        <div className='row pt-3'>
          <div className='col'>
            <p className='lead'>You look to be all setup for 2017</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p>Your transactions are being sent to "<a href='#'>{ name }</a>". Edit them below</p>
          </div>
        </div>
        <div className='row pt-3'>
          <div className='months col-lg-7'>
            <table className='table'>
              <tbody>
                {
                  this.props.months.map((m, i) => {
                    return <Month spreadsheetId={id} month={m} index={i} key={i} />
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default YearViewComponent
