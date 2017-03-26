import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchTransactions } from './dashboard-actions'
import Banner from './banner/banner'

class Dashboard extends Component {
  render () {
    return (
      <div className='dashboard'>
        <Banner />
        { this.props.children }
      </div>
    )
  }

  componentWillReceiveProps (nextProps) {
    const { token, transactions, selectedMonth, fetchTransactionsDiff } = nextProps

    if (token.value && !transactions.requested) {
      fetchTransactionsDiff(token.value, selectedMonth)
    }

    if (this.props.selectedMonth !== selectedMonth) {
      fetchTransactionsDiff(token.value, selectedMonth)
    }
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    transactions: state.transactions,
    selectedMonth: state.selectedMonth.number
  }
}

const mapDispatchToProps = dispatch => {
  return { fetchTransactionsDiff: (token, selectedMonth) => dispatch(fetchTransactions(token, selectedMonth)) }
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default DashboardContainer
