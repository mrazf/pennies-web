import React, { Component } from 'react'
import moment from 'moment'
import './year-view-component.scss'

const monthsShort = moment.monthsShort()

class YearViewComponent extends Component {
  render () {
    return (
      <div className='year-view-component container-fluid offset-xl-2'>
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
            <p>Your transactions are being sent to "<a href='#'>{ this.props.sheet.name }</a>". Edit them below</p>
          </div>
        </div>
        <div className='row pt-3'>
          <div className='months col-lg-7'>
            <table>
              <tbody>
                {
                  monthsShort.map((m, i) => {
                    return (
                      <tr className='table'>
                        <td><strong>{m}</strong></td>
                        <td>
                          <span className='open-month mr-3'>
                            <i className='fa fa-external-link pr-1' aria-hidden='true' />
                            Open
                          </span>
                          <span className='clear-month'>
                            <i className='fa fa-minus-square-o pr-1' aria-hidden='true' />
                            Clear
                          </span>
                        </td>
                        <td>62 transactions exported</td>
                      </tr>
                    )
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
