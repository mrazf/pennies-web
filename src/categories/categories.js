import React, { Component } from 'react'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-component'
import Card from './category'
import NewCategoryCard from './new-category-card'
import './categories.scss'

class Categories extends Component {
  render () {
    const { categories, transactions } = this.props

    return (
      <div className='categories container-fluid'>
        <Masonry className='row'>
          <div className='col-md-6 col-xl-3'>
            <NewCategoryCard />
          </div>
          {

            Object.keys(categories).map(c => {
              const transactionsForCategory = Object.keys(transactions).reduce((acc, t) => {
                if (transactions[t].metadata.category === c) acc.push(transactions[t])

                return acc
              }, [])

              return (
                <div className='col-md-6 col-xl-3'>
                  <Card title={categories[c]} transactions={transactionsForCategory} />
                </div>
              )
            })
          }
        </Masonry>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories.byId, transactions: state.transactions.byId }
}

const CategoriesContainer = connect(mapStateToProps)(Categories)

export default CategoriesContainer
