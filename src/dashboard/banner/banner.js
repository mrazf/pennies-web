import React, { Component } from 'react'
import { Link, withRouter } from 'react-router'

import './banner.scss'

const bannerPaths = {
  dashboard: { title: 'Dashboard Home', link: '/dashboard' },
  transactions: { title: 'Transactions', link: '/dashboard/transactions' },
  categories: { title: 'Categories', link: '/dashboard/categories' }
}

class Banner extends Component {
  render () {
    const paths = this.props.router.location.pathname.split('/').filter((p) => p)

    return (
      <div className='banner'>
        <div className='container'>
          <h1 className='h4 text-center'>Dashboard</h1>
        </div>
      </div>
    )
  }
}

export default withRouter(Banner)
