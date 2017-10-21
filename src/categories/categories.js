import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'
import Switcher from '../transactions/switcher'

class Categories extends Component {
  render () {
    const transactions = R.values(this.props.transactionsById)

    const categories = R.keys(this.props.categories).map(categoryId => {
      const noOfTransactions = transactions.filter(transaction => {
        return transaction.categoryId === categoryId
      }).length

      const totalAmount = transactions.reduce((acc, transaction) => {
        return transaction.categoryId === categoryId ? acc + transaction.amount : acc
      }, 0)

      const amount = Math.round(totalAmount)

      return {
        name: this.props.categories[categoryId],
        noOfTransactions,
        amount
      }
    })

    return (
      <div className='transactions container'>
        <div className='transactions__switcher row justify-content-center'>
          <Switcher />
        </div>
        <div className='transactions__table row'>
          <div className='col-11'>
            <table className='table table-sm'>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Transactions</th>
                  <th className='amount-header'>Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                  categories.map(category => {
                    return (
                      <tr key={category.name}>
                        <td>{category.name}</td>
                        <td>{category.noOfTransactions}</td>
                        <td>£{category.amount}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.byId,
    transactionsById: state.transactions.byId
  }
}

export default connect(mapStateToProps)(Categories)
