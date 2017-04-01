import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './category'
import NewCategoryCard from './new-category-card'

class Categories extends Component {
  render () {
    const { categories, transactions } = this.props

    return (
      <div className='categories container-fluid'>
        <div className='row'>
          <div className='col-sm-6 col-xl-2 offset-xl-1'>
            <NewCategoryCard />
          </div>
          {

            Object.keys(categories).map(c => {
              const transactionsForCategory = Object.keys(transactions).reduce((acc, t) => {
                if (transactions[t].metadata.category === c) acc.push(transactions[t])

                return acc
              }, [])

              return (
                <div className='col-sm-6 col-xl-2'>
                  <Card title={categories[c]} transactions={transactionsForCategory} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories.byId, transactions: state.transactions.byId }
}

const CategoriesContainer = connect(mapStateToProps)(Categories)

export default CategoriesContainer
