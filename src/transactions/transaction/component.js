import React, { Component } from 'react'
import moment from 'moment'
import classnames from 'classnames'
import CategorizeContainer from './categorize-container'

class TransactionComponent extends Component {
  constructor (props) {
    super(props)

    this.state = { expandedCategory: false }

    this.toggleExpansion = () => this.setState({ ...this.state, expandedCategory: !this.state.expandedCategory })
  }

  render () {
    const { transaction } = this.props
    const classes = classnames('transaction-row', { 'expanded-category': this.state.expandedCategory })

    return (
      <tr className={classes} onClick={this.props.update}>
        <td className='transaction-row__date-time'>
          {moment(transaction.dateTime).format('YYYY-MM-DD \u00a0 kk:mm A')}
        </td>
        <td className='transaction-row__category'>
          <CategorizeContainer
            categoryId={transaction.categoryId}
            toggleExpansion={this.toggleExpansion}
            updateCategory={this.props.updateCategory}
          />
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
      </tr>
    )
  }
}

export default TransactionComponent
