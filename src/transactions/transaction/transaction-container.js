import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCategory } from '../redux-actions'
import TransactionComponent from './transaction-component'
import CategorizeContainer from './categorize-container'

export class TransactionContainer extends Component {
  constructor (props) {
    super(props)

    this.updateCategory = this.updateCategory.bind(this)
  }

  updateCategory () {
    return category => {
      return this.props.updateCategory(this.props.transaction, this.props.rowIndex, category)
    }
  }

  categorizeContainer () {
    return (
      <CategorizeContainer
        onBlur={this.props.contract}
        onFocus={this.props.expand}
        disabled={this.props.updating}
        categoryId={this.props.transaction.categoryId}
        updateCategory={this.updateCategory()}
      />
    )
  }

  render () {
    return (
      <TransactionComponent
        categorizeContainer={this.categorizeContainer()}
        transaction={this.props.transaction}
      />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCategory: (transaction, rowIndex, categoryUpdate) => {
      dispatch(updateCategory(transaction, rowIndex, categoryUpdate))
    }
  }
}

export default connect(null, mapDispatchToProps)(TransactionContainer)
