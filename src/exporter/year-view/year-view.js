import React, { Component } from 'react'
import moment from 'moment'
import YearViewComponent from './year-view-component'

const monthsShort = moment.monthsShort()

class YearView extends Component {
  constructor (props) {
    super(props)

    this.state = { loading: true, sheet: null }

    this.recreate = this.recreate.bind(this)
  }

  buildMonths (rawMonths) {
    return monthsShort.map((monthName, i) => {
      const thisRawMonth = rawMonths.find(rawMonth => rawMonth.properties.title === monthName)
      const type = thisRawMonth ? 'THINGS' : 'CREATE'
      const buttons = type
        ? [{ type: 'CREATE', do: () => console.log('create') }]
        : [{ type: 'CREATE', do: () => console.log('create') }]

      return { name: monthName, type, buttons }
    })
  }

  recreate () {
    console.log('pop')
  }

  reSetup () {
    window.gapi.auth2.getAuthInstance().currentUser.get().grantOfflineAccess()
      .then(resp => {
        console.log(resp)
      })
  }

  loadingSpinner () {
    return (
      <div className='container loading-spinner'>
        <div className='row justify-content-center'>
          <strong className='spinner' role='progressbar'>Loading…</strong>
        </div>
      </div>
    )
  }

  componentDidMount () {
    window.gapi.client.sheets.spreadsheets.get({
      spreadsheetId: this.props.spreadsheetId,
      includeGridData: true
    })
    .then(({ result }) => {
      this.setState({ loading: false, sheet: result })
    })
  }

  render () {
    const sheet = this.state.sheet
    const months = sheet ? this.buildMonths(sheet.sheets) : null

    return (
      this.state.loading
        ? this.loadingSpinner()
        : <YearViewComponent spreadsheet={this.state.sheet} months={months} reSetup={this.reSetup} recreate={this.recreate} />
    )
  }
}

export default YearView
