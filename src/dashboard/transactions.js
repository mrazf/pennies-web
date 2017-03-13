import React, { Component } from 'react'
import firebase from 'firebase'
import moment from 'moment'

const apiHost = __API_HOST__

export default class Transactions extends Component {
  constructor (props) {
    super(props)

    this.state = { transactions: [] }

    this.getTransactions = this.getTransactions.bind(this)
  }

  getTransactions (token) {
    const headers = { 'Authorization': `Bearer: ${token}` }
    const from = moment.utc().month(this.props.month).subtract(1, 'month').endOf('month').format()
    const to = moment.utc().month(this.props.month).endOf('month').format()

    window.fetch(`${apiHost}/transactions?from=${from}&to=${to}`, { headers })
      .then(resp => resp.json())
      .then(json => this.setState({ transactions: json.transactions }))
      .catch(console.log)
  }

  componentDidMount () {
    firebase.auth().currentUser.getToken(true)
      .then(this.getTransactions)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.month === nextProps.month) return

    firebase.auth().currentUser.getToken(true)
      .then(this.getTransactions)
  }

  render () {
    return (
      <table className='table table-sm'>
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Merchant</th>
            <th>Description</th>
            <th>Monzo Category</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.transactions.map(t => {
              return (
                <tr key={t.id}>
                  <td>{moment(t.created).format('ddd Do, HH:mm:ss')}</td>
                  <td>Uncategorized</td>
                  <td>{t.amount}</td>
                  <td>-</td>
                  <td>{t.description}</td>
                  <td>{t.category}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}
