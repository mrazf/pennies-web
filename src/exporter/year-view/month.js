import React, { Component } from 'react'

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
  }

  createSheet () {
    const api = window.gapi.client.sheets.spreadsheets
    const { spreadsheetId, index, month } = this.props
    const sheetName = month.name

    console.log(api.batchUpdate({
      spreadsheetId,
      requests: [
        {
          addSheet: {
            title: sheetName, index
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

  render () {
    const { index, month } = this.props

    return (
      <tr>
        <td><strong>{month.name}</strong></td>
        <td>
          {
            month.buttons.map((b, i) => this.createButton(b, i))
          }
        </td>
        { createCopy(month) }
      </tr>
    )
  }
}

export default Month
