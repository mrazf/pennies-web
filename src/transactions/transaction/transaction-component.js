import React, { Component } from 'react'
import moment from 'moment'

class TransactionComponent extends Component {
  render () {
    const { transaction } = this.props

    return (
      <tr className='transaction-row'>
        <td className='transaction-row__date-time'>
          {moment(transaction.dateTime).format('YYYY-MM-DD \u00a0 kk:mm A')}
        </td>
        <td className='transaction-row__category'>
          { this.props.categorizeContainer }
        </td>
        <td className='transaction-row__amount'>
          {`£${transaction.amount}`}
        </td>
        <td className='transaction-row__merchant'>
          {transaction.merchant}
        </td>
        <td className='transaction-row__monzo-category'>
          {transaction.monzoCategory}
        </td>
        <td onClick={this.props.openTransaction}>
          <i className='fa fa-caret-down fa-2' aria-hidden='true' />
        </td>
      </tr>
    )
  }
}

export default TransactionComponent
