import React, { Component } from 'react'
import { connect } from 'react-redux'
import YearView from './year-view/year-view'
import gapiSetup from './gapi-setup'
import Setup from './setup/setup'
import { LOADING, NEW_EXPORTER, EXPORTER } from './statuses'

class ExporterOrSetup extends Component {
  constructor (props) {
    super(props)

    this.state = { status: LOADING, sheet: null }

    this.loaded = this.loaded.bind(this)
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

  loaded () {
    const exporterOrSetup = this.props.spreadsheetId ? EXPORTER : NEW_EXPORTER

    this.setState({ status: exporterOrSetup })
  }

  componentDidMount () {
    gapiSetup()
      .then(this.loaded)
  }

  status () {
    switch (this.state.status) {
      case LOADING: return this.loadingSpinner()
      case NEW_EXPORTER: return <Setup />
      case EXPORTER: return <YearView />
    }
  }

  render () {
    return (
      <div className='exporter'>
        { this.status() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { ...state.exporter }
}

export default connect(mapStateToProps)(ExporterOrSetup)
