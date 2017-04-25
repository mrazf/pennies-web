import React, { Component } from 'react'
import loadScript from 'load-script'

const GOOGLE_SDK_URL = 'https://apis.google.com/js/api.js'

class Exporter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      authLoaded: false,
      pickerLoaded: false,
      token: null
    }

    this.pickerLoaded = () => this.setState({ pickerLoaded: true })
    this.authLoaded = () => this.setState({ authLoaded: true })
    this.tokenLoaded = ({ access_token }) => this.setState({ token: access_token })
    this.getToken = this.getToken.bind(this)
    this.apiLoaded = this.apiLoaded.bind(this)
    this.createPicker = this.createPicker.bind(this)
    this.handleAuthResult = this.handleAuthResult.bind(this)
    this.pickerResult = this.pickerResult.bind(this)
  }

  apiLoaded () {
    window.gapi.load('client', this.getToken)
    window.gapi.load('picker', this.pickerLoaded)
  }

  componentDidMount () {
    loadScript(GOOGLE_SDK_URL, this.apiLoaded)
  }

  handleAuthResult (authResult) {
    this.setState({ googleToken: authResult.access_token })
  }

  getToken () {
    window.gapi.auth.authorize({
      'client_id': '270478801405-ebtt402hdm8rn9idn12gu8k1f5lsbjlg.apps.googleusercontent.com',
      'scope': ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/spreadsheets'],
      'immediate': false
    },
    this.tokenLoaded)
  }

  pickerResult (result) {
    console.log(result)

    switch (result.action) {
      case 'cancel':
        this.props.cancel()
        break
      case 'picked':
        this.props.picked(result.docs[0])
    }
  }

  createPicker () {
    const picker = new window.google.picker.PickerBuilder()
      .addView(window.google.picker.ViewId.DOCS)
      .setOAuthToken(this.state.token)
      .setDeveloperKey('AIzaSyCUc586MZvUba-no3aB-tt2mr7CLROVle8')
      .setCallback(this.pickerResult)
      .build()

    picker.setVisible(true)
  }

  render () {
    return (
      <div>
        {
          this.state.token ? this.createPicker() : <p>Loading...</p>
        }
      </div>
    )
  }
}

export default Exporter
