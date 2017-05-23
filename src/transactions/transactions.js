import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Picker from '../time-range-picker/picker'
import { updateCategory } from './actions'
import './transactions.scss'

class Transactions extends Component {
  render () {
    const ids = Object.keys(this.props.transactions)
    const transactions = ids.map(id => this.props.transactions[id])

    return (
      <div className='transactions container-fluid'>
        <div className='transactions__picker row'>
          <Picker />
        </div>
        <div className='transactions__table row'>
          <div className='col-9'>
            <table className='table table-sm'>
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Merchant</th>
                  <th>Monzo Category</th>
                </tr>
              </thead>
              <tbody>
                {
                  transactions.map(t => {
                    return (
                      <tr key={t.id}>
                        <td>{moment(t.dateTime).format('ddd Do, HH:mm:ss')}</td>
                        <td>Not Set</td>
                        <td>{`£${t.amount}`}</td>
                        <td>{t.merchant}</td>
                        <td>{t.monzoCategory}</td>
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
  return { transactions: state.transactions.byId, categories: state.categories.byId }
}

const mapDispatchToProps = dispatch => {
  return { updateCategory: (transaction, categoryUpdate) => dispatch(updateCategory(transaction, categoryUpdate)) }
}

const TransactionsContainer = connect(mapStateToProps, mapDispatchToProps)(Transactions)

export default TransactionsContainer
