import React, { Component } from 'react'
import classnames from 'classnames'
import * as R from 'ramda'
import TransactionContainer from './transaction/transaction-container'
import splitTransactions from './split-transactions'

class Table extends Component {
  constructor (props) {
    super(props)

    this.state = { expanded: false, openTransactionIndex: null }

    this.expand = () => this.setState({ expanded: true })
    this.contract = () => this.setState({ expanded: false })

    this.openTransaction = this.openTransaction.bind(this)
  }

  openTransaction (index) {
    return () => {
      this.setState({ ...this.state, openTransactionIndex: index })
    }
  }

  transactionContainer (t, i) {
    const updating = R.contains(t.id, this.props.updatingTransactions)

    return (
      <TransactionContainer
        rowIndex={i}
        updating={updating}
        transaction={t}
        expand={this.expand}
        contract={this.contract}
        openTransaction={this.openTransaction(i)}
        key={t.id}
      />
    )
  }

  render () {
    const ids = Object.keys(this.props.transactions)
    const transactions = ids.map(id => this.props.transactions[id]).reverse()
    const tableClasses = classnames('table table-sm', { expanded: this.state.expanded })

    const { top, bottom } = splitTransactions(transactions, this.state.openTransactionIndex)
    const chosenTransaction = this.state.openTransactionIndex === null ? null : <tr><td colSpan={6}><div>hello</div></td></tr>

    return (
      <table className={tableClasses}>
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Category</th>
            <th className='amount-header'>Amount</th>
            <th>Merchant</th>
            <th>Monzo Category</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
            top && top.map((t, i) => this.transactionContainer(t, i))
          }
          { chosenTransaction }
          {
            bottom && bottom.map((t, i) => {
              const index = top.length + i

              return this.transactionContainer(t, index)
            })
          }
        </tbody>
      </table>
    )
  }
}

export default Table
