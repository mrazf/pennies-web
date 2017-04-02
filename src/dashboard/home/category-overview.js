import React, { Component } from 'react'
import './category-overview.scss'

class CategoryOverview extends Component {
  render () {
    console.log(this.props)
    const { category } = this.props

    return (
      <div className='categoryOverview card'>
        <div className='card-header'>
          <h5 className='title'>{category}</h5>
        </div>
        <div className='card-block'>
          <p className='info'>
            <span className='badge badge-default'>£50</span>Spent this month
          </p>
          <p className='info'>
            <span className='badge badge-default'>{this.props.transactions.length}</span>Transactions
          </p>
        </div>
        <div className='card-footer text-muted'>
          2 days ago
        </div>
      </div>
    )
  }
}

export default CategoryOverview
