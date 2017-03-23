import React, { Component } from 'react'
import { connect } from 'react-redux'
import { transactionsToCategories } from './actions'

class Categories extends Component {
  render () {
    return (
      <div className='categories'>
        { this.props.categories }
      </div>
    )
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.transactions === nextProps.transactions) return

    const { transactions, transactionsToCategories } = nextProps

    transactionsToCategories(transactions)
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions.entries,
    categories: state.categories.entries
  }
}

const mapDispatchToProps = dispatch => {
  return { transactionsToCategories: transactions => dispatch(transactionsToCategories(transactions)) }
}

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories)

export default CategoriesContainer
