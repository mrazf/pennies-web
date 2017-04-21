import React, { Component } from 'react'
import { connect } from 'react-redux'
import loadScript from 'load-script'
import Setup from './setup'
import YearView from './year-view'
import './exporter.scss'

const GOOGLE_SDK_URL = 'https://apis.google.com/js/api.js'

class Exporter extends Component {
  constructor (props) {
    super(props)

    this.state = { loading: true }

    this.loaded = () => this.setState({ loading: false })
    this.startPicking = () => this.setState({ picking: true })
    this.cancelPicking = () => this.setState({ picking: false })
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

  content () {
    return this.props.setup ? <YearView {...this.props} /> : <Setup />
  }

  componentDidMount () {
    loadScript(GOOGLE_SDK_URL, this.loaded)
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

export default connect(mapStateToProps)(Exporter)
