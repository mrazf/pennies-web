import React, { Component } from 'react'
import { connect } from 'react-redux'
import Picker from '../time-range-picker/picker'
import Setup from './setup'
import './exporter.scss'

class Exporter extends Component {
  constructor (props) {
    super(props)

    this.startPicking = () => this.setState({ picking: true })
    this.cancelPicking = () => this.setState({ picking: false })
  }

  content () {
    return (
      <Picker />
    )
  }

  render () {
    return (
      <div className='exporter container-fluid'>
        <div className='row pt-4'>
          <div className='col-xl-8 offset-xl-2'>
            {
              this.props.setup
                ? this.content()
                : <Setup />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { ...state.exporter }
}

export default connect(mapStateToProps)(Exporter)
