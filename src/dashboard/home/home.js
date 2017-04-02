import React, { Component } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import CategoryOverview from './category-overview'
import './home.scss'

class Home extends Component {
  render () {
    const { categories, transactions } = this.props
    const categoryIds = Object.keys(categories)
    const uncategorized = R.values(transactions).filter(t => !t.metadata.category)

    return (
      <div className='dashboard-home'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3'>
              <CategoryOverview
                category='Uncategorized'
                transactions={uncategorized} />
            </div>
            {
              categoryIds.map(c => {
                const transactionsForCategory = this.props.transactions.filter(t => t.metadata.category === c)
                console.log(transactionsForCategory)

                return (
                  <div className='col-xl-3'>
                    <CategoryOverview
                      category={categories[c]}
                      transactions={transactionsForCategory}
                      key={c} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.byId,
    transactions: R.values(state.transactions.byId)
  }
}

export default connect(mapStateToProps)(Home)
