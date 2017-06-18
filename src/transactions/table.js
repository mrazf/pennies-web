import React, { Component } from 'react'
import classnames from 'classnames'
import contains from 'ramda/src/contains'
import TransactionContainer from './transaction/transaction-container'

class Table extends Component {
  constructor (props) {
    super(props)

    this.state = { expanded: false }

    this.expand = () => this.setState({ expanded: true })
    this.contract = () => this.setState({ expanded: false })
  }

  render () {
    const ids = Object.keys(this.props.transactions)
    const transactions = ids.map(id => this.props.transactions[id]).reverse()
    const tableClasses = classnames('table table-sm', { expanded: this.state.expanded })

    return (
      <table className={tableClasses}>
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
            transactions.map((t, i) => {
              const updating = contains(t.id, this.props.updatingTransactions)

              return (
                <TransactionContainer
                  rowIndex={i}
                  updating={updating}
                  transaction={t}
                  expand={this.expand}
                  contract={this.contract}
                  key={t.id}
                />
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

export default Table
