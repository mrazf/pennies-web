import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import moment from 'moment'
import Picker from '../time-range-picker/picker'

class Transactions extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-1 offset-1'>
            <Picker />
          </div>
          <div className='col-8'>
            <table className='table table-sm'>
              <thead>
                <tr>
                  <th />
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
                  this.props.transactions.map(t => {
                    return (
                      <tr key={t.id}>
                        <td>
                          <Link to={`/dashboard/transactions/months/${this.props.month + 1}/${t.id}`}>
                            Detail
                          </Link>
                        </td>
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
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { transactions: state.transactions.entries }
}

const TransactionsContainer = connect(mapStateToProps)(Transactions)

export default TransactionsContainer
