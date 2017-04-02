import React, { Component } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import CategoryOverview from '../category-overview/overview'
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
            <div className='col-sm-6 col-xl-3'>
              <CategoryOverview
                category={{ 'name': 'Uncategorized' }}
                transactions={uncategorized} />
            </div>
            {
              categoryIds.map(c => {
                const transactionsForCategory = this.props.transactions.filter(t => t.metadata.category === c)
                const category = { slug: c, name: categories[c] }

                return (
                  <div className='col-sm-6 col-xl-3'>
                    <CategoryOverview
                      category={category}
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
