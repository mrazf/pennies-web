import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCategory } from '../actions'
import TransactionComponent from './component'

export class TransactionContainer extends Component {
  constructor (props) {
    super(props)

    this.updateCategory = this.updateCategory.bind(this)
  }

  updateCategory () {
    return category => {
      return this.props.updateCategory(this.props.transaction, category)
    }
  }

  render () {
    return (
      <TransactionComponent
        transaction={this.props.transaction}
        updateCategory={this.updateCategory()}
        toggleExpansion={this.props.toggleExpansion}
      />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { updateCategory: (transaction, categoryUpdate) => dispatch(updateCategory(transaction, categoryUpdate)) }
}

export default connect(null, mapDispatchToProps)(TransactionContainer)
