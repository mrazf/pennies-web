import React, { Component } from 'react'

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
    this.createPicker = this.createPicker.bind(this)
    this.pickerResult = this.pickerResult.bind(this)
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

  componentDidMount () {
    const token = window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token

    this.setState({ token })
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
