import React, { Component } from 'react'
import { connect } from 'react-redux'

const apiHost = __API_HOST__

const createCopy = month => {
  switch (month.type) {
    case 'CREATE':
      return <td>This month hasn't been created yet</td>
  }
}

class Month extends Component {
  constructor (props) {
    super(props)

    this.createSheet = this.createSheet.bind(this)
    this.refresh = this.refresh.bind(this)
  }

  createSheet () {
    const api = window.gapi.client.sheets.spreadsheets
    const { spreadsheetId, index, month } = this.props
    const title = month.name

    console.log(api.batchUpdate({
      spreadsheetId,
      requests: [
        {
          addSheet: {
            properties: { title, index }
          }
        }
      ]
    }).execute())
  }

  createButton (button, i) {
    switch (button.type) {
      case 'CREATE':
        return (
          <span onClick={this.createSheet} className='create-sheet mr-3' key={i}>
            <i className='fa fa-plus pr-2' aria-hidden='true' />Create
          </span>
        )
    }
  }

  refresh () {
    const headers = { 'Authorization': `Bearer: ${this.props.token}` }

    return window.fetch(`${apiHost}/rpc`, { headers })
      .then(response => response.json())
  }

  render () {
    const { month } = this.props

    return (
      <tr>
        <td><strong>{month.name}</strong></td>
        <td>
          {
            month.buttons.map((b, i) => this.createButton(b, i))
          }
          <span onClick={this.refresh} className='create-sheet mr-3'>
            <i className='fa fa-plus pr-2' aria-hidden='true' />Refresh
          </span>
        </td>
        { createCopy(month) }
      </tr>
    )
  }
}

const mapStateToProps = state => {
  return { token: state.token.value }
}

export default connect(mapStateToProps)(Month)
