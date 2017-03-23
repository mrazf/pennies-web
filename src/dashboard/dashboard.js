import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchTransactions } from './dashboard-actions'
import Banner from './banner/banner'

class Dashboard extends Component {
  render () {
    return (
      <div className='dashboard'>
        <Banner />
        <div className='row content'>
          <div className='col-1' />
          <div className='col-9'>
            { this.props.children }
          </div>
          <div className='col-2'>
            <button type='button' className='btn btn-outline-primary'>New</button>
          </div>
        </div>
      </div>
    )
  }

  componentWillReceiveProps (nextProps) {
    const { token, transactions, fetchTransactionsDiff } = nextProps

    if (token.value && !transactions.requested) {
      fetchTransactionsDiff(token.value)
    }
  }
}

const mapStateToProps = state => {
  return { token: state.token, transactions: state.transactions }
}

const mapDispatchToProps = dispatch => {
  return { fetchTransactionsDiff: (token) => dispatch(fetchTransactions(token)) }
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default DashboardContainer
