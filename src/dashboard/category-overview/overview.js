import React, { Component } from 'react'
import classnames from 'classnames'
import DeleteOverlay from './delete-overlay'
import './overview.scss'

class CategoryOverview extends Component {
  constructor (props) {
    super(props)

    this.confirmDelete = () => this.setState({ confirmDelete: !this.state.confirmDelete })

    this.state = { confirmDelete: false }
  }

  render () {
    const { category } = this.props
    const closeButtonClasses = classnames('close', { overlay: this.state.confirmDelete })

    return (
      <div className='categoryOverview card'>
        { this.state.confirmDelete && <DeleteOverlay {...this.props} /> }
        <div className='card-header'>
          <h5 className='title'>{category.name}</h5>
          <button type='button' className={closeButtonClasses} aria-label='Delete' onClick={this.confirmDelete}>
            <span aria-hidden='true'>&times;</span>
          </button>
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
