import React, { Component } from 'react'
import firebase from 'firebase'
import moment from 'moment'

export default class Transactions extends Component {
  constructor (props) {
    super(props)

    this.state = { transactions: [] }

    this.getTransactions = this.getTransactions.bind(this)
  }

  getTransactions (token) {
    console.log(this.props.month)
    const headers = { 'Authorization': `Bearer: ${token}` }
    const from = moment.utc().month(this.props.month).subtract(1, 'month').endOf('month').format()
    const to = moment.utc().month(this.props.month).add(1, 'month').endOf('month').format()

    window.fetch(`http://localhost:9001/transactions?from=${from}&to=${to}`, { headers })
      .then(resp => resp.json())
      .then(json => this.setState({ transactions: json.transactions }))
      .catch(console.log)
  }

  componentDidMount () {
    const userId = firebase.auth().currentUser.uid

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
      <table className='table'>
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.transactions.map(t => {
              return (
                <tr key={t.id}>
                  <td>{moment(t.created).format('MMM Do YYYY, ddd, HH:mm:ss')}</td>
                  <td>{t.description}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}
