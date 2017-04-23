import React, { Component } from 'react'
import { connect } from 'react-redux'
import gapiSetup from './gapi-setup'
import Setup from './setup'
import YearView from './year-view/year-view'
import './exporter.scss'

class Exporter extends Component {
  constructor (props) {
    super(props)

    this.state = { loading: true }

    this.loaded = () => this.setState({ loading: false })
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

  componentDidMount () {
    gapiSetup()
      .then(this.loaded)
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
