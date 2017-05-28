import React, { Component } from 'react'
import moment from 'moment'
import classnames from 'classnames'
import Categorize from './categorize/categorize'

class TransactionRow extends Component {
  constructor (props) {
    super(props)

    this.state = { expandedCategory: false }

    this.onClick = () => this.setState({ ...this.state, expandedCategory: !this.state.expandedCategory })
  }
  render () {
    const { transaction } = this.props
    const classes = classnames('transaction-row', { 'expanded-category': this.state.expandedCategory })

    return (
      <tr className={classes}>
        <td className='transaction-row__date-time'>{moment(transaction.dateTime).format('YYYY-MM-DD \u00a0 kk:mm A')}</td>
        <td className='transaction-row__category' onClick={this.onClick}><Categorize /></td>
        <td className='transaction-row__amount'>{`£${transaction.amount}`}</td>
        <td className='transaction-row__merchant'>{transaction.merchant}</td>
        <td className='transaction-row__monzo-category'>{transaction.monzoCategory}</td>
      </tr>
    )
  }
}

export default TransactionRow
