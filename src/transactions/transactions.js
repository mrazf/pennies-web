import React, { Component } from 'react'
import { connect } from 'react-redux'
import Picker from '../time-range-picker/picker'
import { updateCategory } from './actions'
import TransactionContainer from './transaction/transaction-container'
import './transactions.scss'

class Transactions extends Component {
  constructor (props) {
    super(props)

    this.state = { expanded: false }

    this.toggleExpansion = () => this.setState({ ...this.state, expanded: !this.state.expanded })
  }

  render () {
    const ids = Object.keys(this.props.transactions)
    const transactions = ids.map(id => this.props.transactions[id])

    return (
      <div className='transactions container-fluid'>
        <div className='transactions__picker row'>
          <Picker />
        </div>
        <div className='row justify-content-center'>
          <div className='col-7'>
            <div className='transactions__table'>
              <table className='table table-sm'>
                <thead>
                  <tr>
                    <th>Date & Time</th>
                    <th>Category</th>
                    <th className='amount-header'>Amount</th>
                    <th>Merchant</th>
                    <th>Monzo Category</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    transactions.map(t => {
                      return (
                        <TransactionContainer
                          transaction={t}
                          toggleExpansion={this.toggleExpansion}
                        />
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
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
