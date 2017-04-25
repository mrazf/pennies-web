import React, { Component } from 'react'
import { connect } from 'react-redux'
import YearView from './year-view/year-view'
import gapiSetup from './gapi-setup'
import Setup from './setup'

class ExporterOrSetup extends Component {
  constructor (props) {
    super(props)

    this.state = { loading: true, sheet: null }
  }

  loadingSpinner () {
    return (
      <div className='container loading-spinner'>
        <div className='row justify-content-center'>
          <strong className='spinner' role='progressbar'>Loading Google</strong>
        </div>
      </div>
    )
  }

  content () {
    return this.props.setup ? <YearView {...this.props} /> : <Setup />
  }

  spreadsheetOrNull () {
    const { spreadsheetId } = this.props

    return new Promise((resolve) => {
      if (!spreadsheetId) return resolve()

      window.gapi.client.sheets.spreadsheets.get({
        spreadsheetId,
        includeGridData: true
      }).then(({ result }) => {
        this.setState({ loading: false, sheet: result })
      })
    })
  }

  componentDidMount () {
    gapiSetup()
      .then(this.spreadsheetOrNull)
  }

  render () {
    return (
      <div className='exporter'>
        {
          this.state.loading ? this.loadingSpinner() : this.content()
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { ...state.exporter }
}

export default connect(mapStateToProps)(ExporterOrSetup)
