import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoryForm from './category-form'

const findTransaction = (transactions, id) => transactions.find(t => t.id === id)

class Transaction extends Component {
  constructor (props) {
    super(props)

    const { transactions, router } = props

    this.state = { transaction: findTransaction(transactions, router.params.id) }
  }

  componentWillReceiveProps (nextProps) {
    const { transactions, router } = nextProps

    this.setState({ transaction: findTransaction(transactions, router.params.id) })
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            {
              this.state.transaction &&
              this.state.transaction.merchant.metadata.suggested_name
            }
          </div>
          <div className='col'>
            {
              this.state.transaction &&
              this.state.transaction.metadata.category ? this.state.transaction.metadata.category : 'Uncategorized'
            }
          </div>
          <div className='col'>
            <CategoryForm />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { transactions: state.transactions.entries }
}

export default connect(mapStateToProps)(Transaction)
