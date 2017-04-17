import React, { Component } from 'react'
import { connect } from 'react-redux'
import Picker from './picker'
import { addExportSheet } from './actions'

class Setup extends Component {
  constructor (props) {
    super(props)

    this.state = { picking: false }

    this.startPicking = () => this.setState({ picking: true })
    this.cancelPicking = () => this.setState({ picking: false })
  }

  render () {
    return (
      <div>
        <p className='lead text-center'>
          <strong>
            Send your Monzo transactions straight to Google Sheets
          </strong>
        </p>
        <p className='lead text-center'>Pick a folder or an existing Sheet and we'll put your transactions in there</p>
        {
          this.state.picking
            ? <Picker cancel={this.cancelPicking} picked={this.props.addExportSheet} />
            : <button type='button' onClick={this.startPicking} className='start-button btn btn-primary mx-auto'>Start</button>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { addExportSheet: sheet => dispatch(addExportSheet(sheet)) }
}

export default connect(null, mapDispatchToProps)(Setup)
