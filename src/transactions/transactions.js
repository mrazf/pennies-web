import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Picker from '../time-range-picker/picker'
import Categorize from './categorize/form'
import { updateCategory } from './actions'
import './transactions.scss'

class Transactions extends Component {
  render () {
    const ids = Object.keys(this.props.transactions)
    const transactions = ids.map(id => this.props.transactions[id])

    return (
      <div className='transactions container-fluid'>
        <div className='row'>
          <div className='col-1 offset-1'>
            <Picker />
          </div>
          <div className='col-8'>
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
                  transactions.map(t => {
                    const updateThisCategory = categoryId => this.props.updateCategory(t, categoryId)
                    const categoryId = t.metadata.category

                    return (
                      <tr key={t.id}>
                        <td>{moment(t.created).format('ddd Do, HH:mm:ss')}</td>
                        <td>
                          {
                            categoryId ? this.props.categories[categoryId] : <Categorize updateCategory={updateThisCategory} />
                          }
                        </td>
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
  return { transactions: state.transactions.entries, categories: state.categories.entries }
}

const mapDispatchToProps = dispatch => {
  return { updateCategory: (transaction, categoryUpdate) => dispatch(updateCategory(transaction, categoryUpdate)) }
}

const TransactionsContainer = connect(mapStateToProps, mapDispatchToProps)(Transactions)

export default TransactionsContainer
