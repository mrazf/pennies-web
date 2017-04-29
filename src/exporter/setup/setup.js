import React, { Component } from 'react'
import { connect } from 'react-redux'
import Picker from './picker'
import { addExportSheet } from './actions'
import { START, start, AUTHENTICATING, PICKING } from './statuses'

class Setup extends Component {
  constructor (props) {
    super(props)

    this.state = { status: START }

    this.startPicking = () => this.setState({ status: PICKING })

    this.authenticateAndPick = this.authenticateAndPick.bind(this)
    this.authenticate = this.authenticate.bind(this)
  }

  authenticateAndPick () {
    this.authenticate()
      .then(this.startPicking)
  }

  authenticate () {
    const signedIn = window.gapi.auth2.getAuthInstance().currentUser.get().isSignedIn()

    return new Promise((resolve, reject) => {
      if (signedIn) return resolve()

      this.setState({ status: AUTHENTICATING })

      window.gapi.auth2.getAuthInstance().signIn()
        .then(resolve, err => console.log(err))
    })
  }

  content () {
    switch (this.state.status) {
      case START: return start(this.authenticateAndPick)
      case PICKING: return <Picker cancel={this.cancelPicking} picked={this.props.addExportSheet} />
      case AUTHENTICATING: return <h1>We're authenticating</h1>
    }
  }

  render () {
    return (
      <div className='text-center'>
        <p className='lead text-center'>
          <strong>
            Send your Monzo transactions straight to Google Sheets
          </strong>
        </p>
        <p className='lead text-center'>Pick a folder or an existing Sheet and we'll put your transactions in there</p>
        { this.content() }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { addExportSheet: sheet => dispatch(addExportSheet(sheet)) }
}

export default connect(null, mapDispatchToProps)(Setup)
