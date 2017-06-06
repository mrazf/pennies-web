import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimeRangeContainer from './time-range-container'
import HeadlinesContainer from './headlines/headlines-container'
import Table from './table'
import './transactions.scss'

class Transactions extends Component {
  render () {
    return (
      <div className='transactions container'>
        <div className='transactions__picker row'>
          <TimeRangeContainer />
        </div>
        <div className='transactions__headlines row'>
          <div className='col'>
            <HeadlinesContainer selectedMonth={this.props.selectedMonth} />
          </div>
        </div>
        <div className='transactions__table row'>
          <div className='col'>
            <Table
              transactions={this.props.transactions}
              updatingTransactions={this.props.updatingTransactions}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions.byId,
    updatingTransactions: state.transactions.updatingIds,
    selectedMonth: state.transactions.selectedMonth
  }
}

const TransactionsContainer = connect(mapStateToProps)(Transactions)

export default TransactionsContainer
